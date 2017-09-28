#include <app/menu.h>
#include <app/shader.h>

#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>

static struct {
  int model;
  int view;
  int projection;
  int color;
} uni;

static float mouseX;
static float mouseY;

static void check_collision();

static float mouse_collision(float x, float y, float w, float h) {
  if (mouseX > x && mouseX < x+w && mouseY > y && mouseY < y+w ) {
    return true;
  } 
  return false;
}

static void mousemove(Window *window, float x, float y) {
  float width, height;

  window->GetDimensions(&width, &height);

  mouseX = x;
  mouseY = -(y - height);

  // printf("MOUSE POSITION: '%.2f, %.2f'.\n", mouseX, mouseY);
  // printf("MOUSE DIMENSIONS: '%.2f, %.2f'.\n", width, height);
  check_collision();
}

glm::mat4 model;
glm::mat4 view;
glm::mat4 projection;

static struct {
  unsigned int vao, vbo, ebo;
  float x;
  float y;
  float width;
  float height;
  bool mouseCollision;
  glm::vec3 color;
  glm::vec3 defaultColor;
  glm::vec3 mouseCollisionColor;
  void (*buttonDownCallback)(Window *window);
} button01;

static void mouseButtonDownCallback(Window *window, float x, float y) {
  if (button01.mouseCollision && button01.buttonDownCallback) {
    button01.buttonDownCallback(window);
  }
}

static void button01ButtonDownCallback(Window *window) {
  printf("'%s' BUTTON DOWN YO\n", window->argv[0]);
  std::string arg = window->argv[0];
  std::string command = "i3 exec " + arg + " red 1";
  system(command.c_str());
}

static void Button01Initialize() {
  button01.x = 300.0f;
  button01.y = 300.0f;
  button01.width = 50.0f;
  button01.height = 50.0f;
  button01.color = glm::vec3(1.0f, 1.0f, 0.0f);
  button01.defaultColor = glm::vec3(1.0f, 1.0f, 0.0f);
  button01.mouseCollisionColor = glm::vec3(1.0f, 0.0f, 1.0f);
  button01.mouseCollision = false;
  button01.buttonDownCallback = button01ButtonDownCallback;

  glGenVertexArrays(1, &button01.vao);
  glGenBuffers(1, &button01.vbo);
  glGenBuffers(1, &button01.ebo);

  float vertices[4][2] = {
    0.0f, 0.0f,
    button01.width, 0.0f,
    button01.width, button01.height,
    0.0f, button01.height
  };

  unsigned int indices[2][3] = {
    0, 1, 2,
    0, 3, 2,
  };

  glBindVertexArray(button01.vao);

  glBindBuffer(GL_ARRAY_BUFFER, button01.vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, button01.ebo);
  glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

  glVertexAttribPointer(0, 2, GL_FLOAT, GL_FALSE, 2 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);

  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);
}

static void Button01Destroy() {
  glDeleteVertexArrays(1, &button01.vao);
  glDeleteBuffers(1, &button01.vbo);
  glDeleteBuffers(1, &button01.ebo);
}

static void Button01Update() {
  glBindVertexArray(button01.vao);
  model = glm::mat4();
  model = glm::translate(model, glm::vec3(button01.x, button01.y, 0.0f));
  glUniformMatrix4fv(uni.model, 1, GL_FALSE, glm::value_ptr(model));

  if (button01.mouseCollision) {
    glUniform3fv(uni.color, 1, glm::value_ptr(button01.mouseCollisionColor));
  } else {
    glUniform3fv(uni.color, 1, glm::value_ptr(button01.defaultColor));
  }

  glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, (void*)0);
  glBindVertexArray(0);

  // CHECK BUTTON01 AND MOSUE COLLISION
  if (mouse_collision(button01.x, button01.y, button01.width, button01.height)) {
    button01.mouseCollision = true;
  } else {
    button01.mouseCollision = false;
  }
}

static const int NUM_BOXES = 10;

struct Box {
  float x;
  float y;
  float width;
  float height;
};

static struct {
  unsigned int vao, vbo, ebo;
} boxdata;

struct Box boxes[NUM_BOXES];

static void BoxesInitialize() {
  glGenVertexArrays(1, &boxdata.vao);
  glGenBuffers(1, &boxdata.vbo);
  glGenBuffers(1, &boxdata.ebo);

  float w = 200.0f;
  float h = 200.0f;

  for (int i=0; i<NUM_BOXES; i++) {
    Box *box = &boxes[i];

    box->x = 0.0f;
    box->y = 0.0f;

    box->width = 100.0f;
    box->height = 100.0f;
  }

  boxes[1].width = 200.0f;
  boxes[1].height = 100.0f;

  float vertices[4 * NUM_BOXES][2];
  float indices[2 * NUM_BOXES][3];
  for (int i=0; i<NUM_BOXES; i++) {
    Box *box = &boxes[i];

    float box_vertices[4][2] = {
      0.0f, 0.0f,
      box->width, 0.0f,
      box->width, box->height,
      0.0f, box->height
    };

    unsigned int offset = i*2;

    unsigned int box_indices[2][3] = {
      offset+0, offset+1, offset+2,
      offset+0, offset+3, offset+2,
    };

    memcpy(&vertices[i*4], box_vertices, sizeof box_vertices);
    memcpy(&indices[i*2], box_indices, sizeof box_indices);
  }

  glBindVertexArray(boxdata.vao);

  glBindBuffer(GL_ARRAY_BUFFER, boxdata.vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, boxdata.ebo);
  glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

  glVertexAttribPointer(0, 2, GL_FLOAT, GL_FALSE, 2 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);

  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);
}

static void BoxesUpdate() {
  glBindVertexArray(boxdata.vao);
  boxes[0].x = 200.0f;
  boxes[1].y = 200.0f;
  for (int i=0; i<NUM_BOXES; i++) {
    Box *box = &boxes[i];
    model = glm::mat4();
    model = glm::translate(model, glm::vec3(box->x, box->y, 0.0f));
    glUniformMatrix4fv(uni.model, 1, GL_FALSE, glm::value_ptr(model));
    glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, (void*)(i * 2 * sizeof(unsigned int)));
  }
  glBindVertexArray(0);
}

struct Button {
  float width;
  float height;
};

struct Button buttons[10];

static struct {
  float speed;
  glm::vec3 position;
  float width;
  float height;
  bool mouseCollision;
  glm::vec3 defaultColor;
  glm::vec3 color;
  glm::vec3 collisionColor;
} object = {
  0.2f, // speed
  glm::vec3(0.0f, 0.0f, 0.0f), // position
  100.0f, // width
  100.0f, // height
  false, // mousecollision
  glm::vec3(1.0f, 0.0f, 0.0f), // defaultColor
  glm::vec3(1.0f, 0.0f, 0.0f), // color
  glm::vec3(0.0f, 1.0f, 0.0f), // collisionColor
};

static void check_collision() {
  if (mouseX > object.position.x && mouseX < object.position.x + object.width && mouseY > object.position.y && mouseY < object.position.y + object.height) {
    object.mouseCollision = true;
  } else {
    object.mouseCollision = false;
  }
}

static unsigned int vao, vbo;
static int vertices[] = {
  0, 0,
  0, (int)object.height,
  (int)object.width, (int)object.height,

  0, 0,
  (int)object.width, 0,
  (int)object.width, (int)object.height,

  -1, -1,
  0, 1,
  1, -1,
};

Menu::Menu(Window &window) {
  shader = new Shader("data/shaders/menu");

  shader->bind();

  uni.model = glGetUniformLocation(shader->GetProgram(), "model");
  uni.view = glGetUniformLocation(shader->GetProgram(), "view");
  uni.projection = glGetUniformLocation(shader->GetProgram(), "projection");
  uni.color = glGetUniformLocation(shader->GetProgram(), "color");

  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);

  glBindVertexArray(vao);
  glBindBuffer(GL_ARRAY_BUFFER, vbo);

  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  glVertexAttribPointer(0, 2, GL_INT, GL_FALSE, 2 * sizeof(int), (void*)0);
  glEnableVertexAttribArray(0);

  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);

  p_window = &window;

  projection = glm::ortho(0.0f, p_window->getWidth(), 0.0f, p_window->getHeight(), -1.0f, 1.0f);

  p_window->setMouseMotion(mousemove);
  p_window->setMouseButtonDownCallback(mouseButtonDownCallback);

  BoxesInitialize();
  Button01Initialize();

  // createMenuItem(0, 0, 100, 100, "button 1");
  // generate vertices
  // 
}

Menu::~Menu() {
  Button01Destroy();
}

void Menu::update() {
  shader->bind();
  glBindVertexArray(vao);

  if (p_window->keys[WINDOW_KEY_W]) {
    object.position.y += object.speed;
  }
  if (p_window->keys[WINDOW_KEY_A]) {
    object.position.x -= object.speed;
  }
  if (p_window->keys[WINDOW_KEY_S]) {
    object.position.y -= object.speed;
  }
  if (p_window->keys[WINDOW_KEY_D]) {
    object.position.x += object.speed;
  }

  model = glm::mat4();
  model = glm::translate(model, object.position);

  glUniformMatrix4fv(uni.model, 1, GL_FALSE, glm::value_ptr(model));
  glUniformMatrix4fv(uni.view, 1, GL_FALSE, glm::value_ptr(view));
  glUniformMatrix4fv(uni.projection, 1, GL_FALSE, glm::value_ptr(projection));

  if (object.mouseCollision) {
    glUniform3fv(uni.color, 1, glm::value_ptr(object.collisionColor));
  } else {
    glUniform3fv(uni.color, 1, glm::value_ptr(object.color));
  }

  glDrawArrays(GL_TRIANGLES, 0, 6);
  //glDrawArrays(GL_TRIANGLES, 6, 3);

  glBindVertexArray(0);

  BoxesUpdate();
  Button01Update();

  // printf("WINDOW: [%.2f, %.2f].\n", p_window->getWidth(), p_window->getHeight());
}
