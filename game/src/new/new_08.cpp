#include <time.h>
#include <glad/glad.h>
#include <gsl/gsl_sf_bessel.h>
#include <stdio.h>
#include <stdlib.h>
#include <linmath.h>
#include <stb_image.h>
#include <app/new.h>
#include <math.h>

#include <string.h>

#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>

static const float WIDTH = 1200.0f;
static const float HEIGHT = 700.0f;

static int modelLoc;
static int viewLoc;
static int projectionLoc;

static struct {
  unsigned int vao, vbo, ebo;
  float vertices[4][5];
  unsigned int indices[2][3];
} plane;

static NewWindow window;

static MiscMonster monster;

static float mouseX = 0.0f;
static float mouseY = 0.0f;

static vec3 camPos = {0.0f, 0.0f, 3.0f};
static vec3 camFront = {0.0f, 0.0f, -1.0f};
static vec3 camUp = {0.0f, 1.0f, 0.0f};

static float deltaTime = 0.0f;
static float lastFrame = 0.0f;

static mat4x4 model = {0.0f};
static mat4x4 projection = {0.0f};
static mat4x4 view = {0.0f};

static float sensitivity = 0.1f;
static bool firstMouse = true;
static float yaw = -90.0f;
static float pitch = 0.0f;
static float lastX = WIDTH / 2.0f;
static float lastY = HEIGHT / 2.0f;
static float fov = 45.0f;

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods) {
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) {
    glfwSetWindowShouldClose(window, true);
  }
}

static void do_camera_movement() {
  float camSpeed = 8.5 * deltaTime; // <++>
  if (glfwGetKey(window._window, GLFW_KEY_W) == GLFW_PRESS) {
    vec3 res = {
      camSpeed * camFront[0],
      camSpeed * camFront[1],
      camSpeed * camFront[2],
    };
    vec3_add(camPos, camPos, res);
  }
  if (glfwGetKey(window._window, GLFW_KEY_S) == GLFW_PRESS) {
    vec3 res = {
      camSpeed * camFront[0],
      camSpeed * camFront[1],
      camSpeed * camFront[2],
    };
    vec3_sub(camPos, camPos, res);
  }
  if (glfwGetKey(window._window, GLFW_KEY_A) == GLFW_PRESS) {
    vec3 crossed;
    vec3_mul_cross(crossed, camFront, camUp);

    vec3 normalized;
    vec3_norm(normalized, crossed);

    vec3 res = {
      camSpeed * normalized[0],
      camSpeed * normalized[1],
      camSpeed * normalized[2],
    };

    vec3_sub(camPos, camPos, res);
  }

  if (glfwGetKey(window._window, GLFW_KEY_D) == GLFW_PRESS) {
    vec3 crossed;
    vec3_mul_cross(crossed, camFront, camUp);

    vec3 normalized;
    vec3_norm(normalized, crossed);

    vec3 res = {
      camSpeed * normalized[0],
      camSpeed * normalized[1],
      camSpeed * normalized[2],
    };

    vec3_add(camPos, camPos, res);
  }

  if (glfwGetKey(window._window, GLFW_KEY_SPACE) == GLFW_PRESS) {
    camPos[1] += camSpeed;
  }

  if (glfwGetKey(window._window, 340) == GLFW_PRESS) {
    camPos[1] -= camSpeed;
  }

}

static void scroll(GLFWwindow* window, double offsetX, double offsetY) {
  if (fov >= 1.0f && fov <= 45.0f) {
    fov -= offsetY/5;
  }

  if (fov <= offsetY) {
    fov = 1.0f;
  }

  if (fov >= 45.0f) {
    fov = 45.0f;
  }
}

static void mousemove(GLFWwindow* window,  double mouseX, double mouseY) {
  if (firstMouse) {
    lastX = mouseX;
    lastY = mouseY;
    firstMouse = false;
  }

  float offsetX = mouseX - lastX;
  float offsetY = lastY - mouseY;

  lastX = mouseX;
  lastY = mouseY;

  offsetX *= sensitivity;
  offsetY *= sensitivity;

  yaw += offsetX;
  pitch += offsetY;

  if (pitch > 89.0f) {
    pitch = 89.0f;
  }
  if (pitch < -89.0f) {
    pitch = -89.0f;
  }

  vec3 front = { 0.0f };
  front[0] = cosf(NewMiscRadians(yaw)) * cosf(NewMiscRadians(pitch));
  front[1] = sinf(NewMiscRadians(pitch));
  front[2] = sinf(NewMiscRadians(yaw)) * cosf(NewMiscRadians(pitch));

  vec3_norm(camFront, front);
}

// SIN WAVE
// ==================================================================
static struct {
  unsigned int vao, vbo;
  vec3 pos;
} sin_wave;

static void initialize_sin_wave() {
  sin_wave.pos[0] = 0.0f;
  sin_wave.pos[1] = 0.0f;
  sin_wave.pos[2] = -25.0f;

  glGenVertexArrays(1, &sin_wave.vao);
  glGenBuffers(1, &sin_wave.vbo);

  float vertices[629][5];

  int i;
  float angle;
  float offsetX = -0.5f;
  for (i=0; i < 629; i+=1) {
    angle += 0.01f;
    float x = angle / (M_PI*2);
    float y = sinf(angle) / (M_PI*2);

    float vertex[5] = {x + offsetX, y, 0.0f, 0.0f, 0.0f};
    memcpy(vertices[i], vertex, sizeof(vertex));
  }

  glBindVertexArray(sin_wave.vao);
  glBindBuffer(GL_ARRAY_BUFFER, sin_wave.vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  // position attribute
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);

  // texture coord attribute
  glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)(3 * sizeof(float)));
  glEnableVertexAttribArray(1);

  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);
}

static void update_sin_wave() {
  glBindVertexArray(sin_wave.vao);

  mat4x4_identity(model);
  mat4x4_translate(model, sin_wave.pos[1], sin_wave.pos[0], sin_wave.pos[2]);
  mat4x4_scale_aniso(model, model, 10.0f, 10.0f, 10.0f);

  // mat4x4_identity(view);
  // mat4x4_identity(projection);

  glUniformMatrix4fv(modelLoc, 1, GL_FALSE, (const float*)model);
  // glUniformMatrix4fv(viewLoc, 1, GL_FALSE, (const float*)view);
  // glUniformMatrix4fv(projectionLoc, 1, GL_FALSE, (const float*)projection);

  glPointSize(5.0f);
  glDrawArrays(GL_POINTS, 0, 629);
  glPointSize(1.0f);

  glBindVertexArray(0);

}

// RANDOM LINES
// ==================================================================

static struct {
  unsigned int vbo, vao;
  vec3 pos;
} random_lines;

static void initialize_random_lines() {
  glGenVertexArrays(1, &random_lines.vao);
  glGenBuffers(1, &random_lines.vbo);

  random_lines.pos[0] = 3.0f;
  random_lines.pos[1] = 0.0f;
  random_lines.pos[2] = -20.0f;

  float vertices[100][5];

  for (int i = 0; i < 100; i++) {
    float x = (float)rand()/RAND_MAX*2.0-1.0; // float in range -1 to +1
    float y = (float)rand()/RAND_MAX*2.0-1.0; // float in range -1 to +1

    float vertex[5] = { x, y, 0.0f, 0.0f, 0.0f };
    memcpy(vertices[i], vertex, sizeof(vertex));
  }

  glBindVertexArray(random_lines.vao);
  glBindBuffer(GL_ARRAY_BUFFER, random_lines.vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  // position attribute
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);

  // texture coord attribute
  glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)(3 * sizeof(float)));
  glEnableVertexAttribArray(1);

  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);

  // min: -1.0f
  // max: +1.0f
}

static void update_random_lines() {
  glBindVertexArray(random_lines.vao);

  mat4x4_identity(model);
  mat4x4_translate(model, random_lines.pos[1], random_lines.pos[0], random_lines.pos[2]);
  mat4x4_scale_aniso(model, model, 10.0f, 10.0f, 10.0f);

  // mat4x4_identity(view);
  // mat4x4_identity(projection);

  glUniformMatrix4fv(modelLoc, 1, GL_FALSE, (const float*)model);
  // glUniformMatrix4fv(viewLoc, 1, GL_FALSE, (const float*)view);
  // glUniformMatrix4fv(projectionLoc, 1, GL_FALSE, (const float*)projection);

  glDrawArrays(GL_LINES, 0, 100);

  glBindVertexArray(0);
}

// RANDOM CIRCLE
// ==================================================================

static struct {
  unsigned int vao, vbo;
  vec3 pos;
} circle;

static void InitializeCircle() {
  circle.pos[0] = 0.0f;
  circle.pos[1] = 0.0f;
  circle.pos[2] = -12.0f;

  glGenVertexArrays(1, &circle.vao);
  glGenBuffers(1, &circle.vbo);

  float vertices[300][5];

  for (int i=0; i<300; i++) {
    float angle = 2 * M_PI * i / (300-1);
    float x = cosf(angle);
    float y = sinf(angle);

    vertices[i][0] = x;
    vertices[i][1] = y;
    vertices[i][2] = 0.0f;
    vertices[i][3] = 1.0f;
    vertices[i][4] = 1.0f;
  }

  glBindVertexArray(circle.vao);
  glBindBuffer(GL_ARRAY_BUFFER, circle.vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  // position attribute
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);

  // texture coord attribute
  glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)(3 * sizeof(float)));
  glEnableVertexAttribArray(1);

  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);
}

static void UpdateCircle() {
  glBindVertexArray(circle.vao);

  mat4x4_identity(model);
  mat4x4_translate(model, circle.pos[1], circle.pos[0], circle.pos[2]);

  glUniformMatrix4fv(modelLoc, 1, GL_FALSE, (const float*)model);
  // glUniformMatrix4fv(viewLoc, 1, GL_FALSE, (const float*)view);
  // glUniformMatrix4fv(projectionLoc, 1, GL_FALSE, (const float*)projection);

  glDrawArrays(GL_TRIANGLE_FAN, 0, 300);

  glBindVertexArray(0);
}

int _New_08(int argc, char *argv[]) { // <++>
  srand(time(NULL));

  window = NewWindowCreateWSize((int)WIDTH, (int)HEIGHT);
  glfwSetCursorPosCallback(window._window, mousemove);
  glfwSetKeyCallback(window._window, keyboard);
  glfwSetScrollCallback(window._window, scroll);
  glfwSetInputMode(window._window, GLFW_CURSOR, GLFW_CURSOR_DISABLED);
  // glfwSetWindowPos(window._window, 0, 0);
  // glfwSetWindowMonitor(window._window, monitor, );

  GLFWmonitor* primary = glfwGetPrimaryMonitor();

  int count;
  GLFWmonitor** monitors = glfwGetMonitors(&count);

  // glfwSetWindowSize(window._window, (int) WIDTH, (int) HEIGHT);
  int program = NewProgramCreate("default");

  int posX, posY;
  glfwGetMonitorPos(primary, &posX, &posY);

  // printf("NUM MONITORS: '%d' | {%d, %d}.\n", count, posX, posY);

  glUseProgram(program);

  MiscInitExample01(program);
  MiscInitExample02(program);
  MiscInitExample03(program);
  MiscInitExample04(program);
  MiscCenterDotInitialize(program);

  monster = MiscMonsterInitialize(program);
  InitializeCircle();
  initialize_random_lines();
  initialize_sin_wave();

  {
    glGenVertexArrays(1, &plane.vao);
    glGenBuffers(1, &plane.vbo);
    glGenBuffers(1, &plane.ebo);

    float vertices[4][5] = {
      -0.5f, -0.5f, 0.0f,   0.0f, 0.0f,
      +0.5f, -0.5f, 0.0f,   1.0f, 0.0f,
      +0.5f, +0.5f, 0.0f,   1.0f, 1.0f,
      -0.5f, +0.5f, 0.0f,   0.0f, 1.0f,
    };
    memcpy(plane.vertices, vertices, sizeof(vertices));

    unsigned int indices[2][3] = {
      0, 1, 2,
      0, 3, 2
    };
    memcpy(plane.indices, indices, sizeof(indices));

    glBindVertexArray(plane.vao);
    glBindBuffer(GL_ARRAY_BUFFER, plane.vbo);
    glBufferData(GL_ARRAY_BUFFER, sizeof(plane.vertices), plane.vertices, GL_STATIC_DRAW);

    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, plane.ebo);
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(plane.indices), plane.indices, GL_STATIC_DRAW);

    // position attribute
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)0);
    glEnableVertexAttribArray(0);
    // texture coord attribute
    glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)(3 * sizeof(float)));
    glEnableVertexAttribArray(1);

    glBindBuffer(GL_ARRAY_BUFFER, 0);
    glBindVertexArray(0);
  }

  float vertices[36][5] = {
    -0.5f, -0.5f, -0.5f,  0.0f, 0.0f,
    0.5f, -0.5f, -0.5f,  1.0f, 0.0f,
    0.5f,  0.5f, -0.5f,  1.0f, 1.0f,
    0.5f,  0.5f, -0.5f,  1.0f, 1.0f,
    -0.5f,  0.5f, -0.5f,  0.0f, 1.0f,
    -0.5f, -0.5f, -0.5f,  0.0f, 0.0f,

    -0.5f, -0.5f,  0.5f,  0.0f, 0.0f,
    0.5f, -0.5f,  0.5f,  1.0f, 0.0f,
    0.5f,  0.5f,  0.5f,  1.0f, 1.0f,
    0.5f,  0.5f,  0.5f,  1.0f, 1.0f,
    -0.5f,  0.5f,  0.5f,  0.0f, 1.0f,
    -0.5f, -0.5f,  0.5f,  0.0f, 0.0f,

    -0.5f,  0.5f,  0.5f,  1.0f, 0.0f,
    -0.5f,  0.5f, -0.5f,  1.0f, 1.0f,
    -0.5f, -0.5f, -0.5f,  0.0f, 1.0f,
    -0.5f, -0.5f, -0.5f,  0.0f, 1.0f,
    -0.5f, -0.5f,  0.5f,  0.0f, 0.0f,
    -0.5f,  0.5f,  0.5f,  1.0f, 0.0f,

    0.5f,  0.5f,  0.5f,  1.0f, 0.0f,
    0.5f,  0.5f, -0.5f,  1.0f, 1.0f,
    0.5f, -0.5f, -0.5f,  0.0f, 1.0f,
    0.5f, -0.5f, -0.5f,  0.0f, 1.0f,
    0.5f, -0.5f,  0.5f,  0.0f, 0.0f,
    0.5f,  0.5f,  0.5f,  1.0f, 0.0f,

    -0.5f, -0.5f, -0.5f,  0.0f, 1.0f,
    0.5f, -0.5f, -0.5f,  1.0f, 1.0f,
    0.5f, -0.5f,  0.5f,  1.0f, 0.0f,
    0.5f, -0.5f,  0.5f,  1.0f, 0.0f,
    -0.5f, -0.5f,  0.5f,  0.0f, 0.0f,
    -0.5f, -0.5f, -0.5f,  0.0f, 1.0f,

    -0.5f,  0.5f, -0.5f,  0.0f, 1.0f,
    0.5f,  0.5f, -0.5f,  1.0f, 1.0f,
    0.5f,  0.5f,  0.5f,  1.0f, 0.0f,
    0.5f,  0.5f,  0.5f,  1.0f, 0.0f,
    -0.5f,  0.5f,  0.5f,  0.0f, 0.0f,
    -0.5f,  0.5f, -0.5f,  0.0f, 1.0f
  };

  float positions[10][3] = {
    { 4.0f,  0.0f,  0.0f },
    { 2.0f,  5.0f, -15.0f },
    { -1.5f, -2.2f, -2.5f },
    { -3.8f, -2.0f, -12.3f },
    { 2.4f, -0.4f, -3.5f },
    { -1.7f,  3.0f, -7.5f },
    { 1.3f, -2.0f, -2.5f },
    { 1.5f,  2.0f, -2.5f },
    { 1.5f,  0.2f, -1.5f },
    { -1.3f,  1.0f, -1.5f }
  };

  unsigned int vbo, vao;

  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);

  glBindVertexArray(vao); // <++>

  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  // position attribute
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);

  // texture coord attribute
  glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)(3 * sizeof(float)));
  glEnableVertexAttribArray(1);

  // uniform locations
  modelLoc = glGetUniformLocation(program, "model");
  viewLoc = glGetUniformLocation(program, "view");
  projectionLoc = glGetUniformLocation(program, "projection");

  // texture 1
  unsigned int texture1;
  NewMiscLoadTexture(&texture1, "/home/viktor/master/game/data/container.jpg");

  // texture 2
  unsigned int texture2;
  NewMiscLoadTexture(&texture2, "/home/viktor/master/game/data/wall.jpg");

  // texture 3
  unsigned int texture3;
  NewMiscLoadTexture(&texture3, "/home/viktor/master/game/data/brick-wall-2.jpg");

  // attribute locations
  int texture1Loc = glGetAttribLocation(program, "texture1");
  glUniform1i(texture1Loc, 0);

  // enable extensions
  glEnable(GL_DEPTH_TEST);

  while (NewWindowOpen(&window)) { // <++>
    float currentFrame = glfwGetTime();

    deltaTime = currentFrame - lastFrame;
    lastFrame = currentFrame;

    do_camera_movement();

    glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT); // <++>

    glActiveTexture(GL_TEXTURE0);
    glBindTexture(GL_TEXTURE_2D, texture1);

    mat4x4_identity(projection);
    mat4x4_perspective(projection, fov, WIDTH/HEIGHT, 0.1f, 100.0f);
    glUniformMatrix4fv(projectionLoc, 1, GL_FALSE, (const float*)projection);

    mat4x4_identity(view);
    vec3 center;
    vec3_add(center, camPos, camFront);
    mat4x4_look_at(view, camPos, center, camUp);

    glUniformMatrix4fv(viewLoc, 1, GL_FALSE, (const float*)view);

    glBindVertexArray(vao);
    for (int i=0; i<10; i++) {
      mat4x4_identity(model);
      mat4x4_translate(model, positions[i][1], positions[i][0], positions[i][2]);

      glUniformMatrix4fv(modelLoc, 1, GL_FALSE, (const float*)model);

      glDrawArrays(GL_TRIANGLES, 0, 36);
    }
    glBindVertexArray(0);

    glBindTexture(GL_TEXTURE_2D, texture2);
    glBindVertexArray(plane.vao);

    // bottom plane
    mat4x4_identity(model);
    mat4x4_translate(model, 0.0f, -5.5f, 2.0f);
    mat4x4_rotate(model, model, 1.0f, 0.0f, 0.0f, NewMiscRadians(90.0f));
    mat4x4_scale_aniso(model, model, 30.0f, 30.0f, 30.0f);

    glUniformMatrix4fv(modelLoc, 1, GL_FALSE, (const float*)model);

    glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);

    // top plane
    mat4x4_identity(model);
    mat4x4_translate(model, 0.0f, +5.0f, 2.0f);
    mat4x4_rotate(model, model, 1.0f, 0.0f, 0.0f, NewMiscRadians(90.0f));
    mat4x4_scale_aniso(model, model, 30.0f, 30.0f, 30.0f);

    glUniformMatrix4fv(modelLoc, 1, GL_FALSE, (const float*)model);

    glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);

    glBindVertexArray(0);

    glBindTexture(GL_TEXTURE_2D, texture3);
    MiscUpdateMonster(&monster);

    glBindTexture(GL_TEXTURE_2D, texture3);
    UpdateCircle();
    update_random_lines();
    update_sin_wave();
    MiscUpdateExample01();
    MiscUpdateExample02();
    MiscUpdateExample03();
    MiscUpdateExample04();
    MiscCenterDotUpdate();

    NewWindowEvents(&window);
    NewWindowSwap(&window);
  }

  NewWindowTerminate(&window);

  return 0;
}
