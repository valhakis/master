#include <glad/glad.h>
#include <gsl/gsl_sf_bessel.h>
#include <stdio.h>
#include <linmath.h>
#include <stb_image.h>
#include <app/new.h>
#include <math.h>

#include <string.h>

#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>

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
static float lastX = 800.0f / 2.0f;
static float lastY = 600.0f / 2.0f;
static float fov = 45.0f;

static void do_camera_movement() {
  float camSpeed = 2.5 * deltaTime; // <++>
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

int _New_07(int argc, char *argv[]) { // <++>

  window = NewWindowCreate();
  glfwSetCursorPosCallback(window._window, mousemove);
  glfwSetScrollCallback(window._window, scroll);
  glfwSetInputMode(window._window, GLFW_CURSOR, GLFW_CURSOR_DISABLED);
  int program = NewProgramCreate("default");

  glUseProgram(program);

  monster = MiscMonsterInitialize(program);

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
    { 0.0f,  0.0f,  0.0f },
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
  int modelLoc = glGetUniformLocation(program, "model");
  int viewLoc = glGetUniformLocation(program, "view");
  int projectionLoc = glGetUniformLocation(program, "projection");

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
    mat4x4_perspective(projection, fov, 800.0f/600.0f, 0.1f, 100.0f);
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

    NewWindowEvents(&window);
    NewWindowSwap(&window);
  }

  NewWindowTerminate(&window);

  return 0;
}
