#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <stb_image.h>

#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>

#include <string>
#include <fstream>
#include <sstream>
#include <iostream>

#include <stdio.h>
#include <math.h>
#include <stdbool.h>

struct Camera {
  glm::vec3 pos;
  glm::vec3 front;
  glm::vec3 up;
};

// time between current frame and last frame
static float deltaTime = 0.0f;
static float lastFrame = 0.0f;

static glm::mat4 transform;
static glm::mat4 model;
static glm::mat4 view;
static glm::mat4 projection;

static int WIDTH = 800;
static int HEIGHT = 600;
static GLFWwindow* window; 

static GLuint program;
static GLuint vs;
static GLuint fs;

// C _______ D
//   |\    |
//   | \   |
//   |  \  |
//   |   \ |
//   |    \|
//   |_____\
// A         B

static float vertices[] = {
  // 1. triangle

  /* 0 */ -0.9f, -0.9f, 0.0f,   1.0f, 1.0f, 0.0f,   0.0f, 0.0f, // A bottom left
  /* 1 */ -0.1f, -0.9f, 0.0f,   1.0f, 1.0f, 0.0f,   0.0f, 0.0f, // B bottom right
  /* 2 */ -0.9f, +0.9f, 0.0f,   1.0f, 1.0f, 0.0f,   0.0f, 0.0f, // C top left

  // 2. triangle

  /* 3 */ -0.1f, -0.9f, 0.0f,   0.0f, 1.0f, 0.0f,   0.0f, 0.0f, // B bottom right
  /* 4 */ -0.1f, +0.9f, 0.0f,   0.0f, 1.0f, 0.0f,   0.0f, 0.0f, // D top right
  /* 5 */ -0.9f, +0.9f, 0.0f,   0.0f, 1.0f, 0.0f,   0.0f, 0.0f, // C top left

  // 3. rectangle

  /* 6 */ +0.9f, -0.9f, 0.0f,   0.0f, 1.0f, 0.5f,   0.0f, 0.0f, // B bottom right
  /* 7 */ +0.9f, +0.9f, 0.0f,   0.0f, 1.0f, 0.5f,   0.0f, 0.0f, // D top right
  /* 8 */ +0.1f, +0.9f, 0.0f,   0.0f, 1.0f, 0.5f,   0.0f, 0.0f, // C top left
  /* 9 */ +0.1f, -0.9f, 0.0f,   0.0f, 1.0f, 0.5f,   0.0f, 0.0f, // A bottom left

  // 4. triangle

  /* 10 */ -0.5f, -0.5f, 0.0f,  1.0f, 1.0f, 1.0f,   +0.0f, +0.0f, // bottom left
  /* 11 */ +0.5f, -0.5f, 0.0f,  1.0f, 1.0f, 1.0f,   +1.0f, +0.0f, // bottom right
  /* 12 */ +0.0f, +0.5f, 0.0f,  1.0f, 1.0f, 1.0f,   +0.5f, +1.0f, // middle top

  // 5. rectangle

  /* 13 */ +0.2f, +0.2f, 0.0f,  1.0f, 1.0f, 0.0f,   +0.0f, +0.0f, // bottom left
  /* 14 */ +0.8f, +0.2f, 0.0f,  1.0f, 0.0f, 0.0f,   +1.0f, +0.0f, // bottom right
  /* 15 */ +0.8f, +0.8f, 0.0f,  0.0f, 1.0f, 0.0f,   +1.0f, +1.0f, // top right
  /* 16 */ +0.2f, +0.8f, 0.0f,  0.0f, 0.0f, 1.0f,   +0.0f, +1.0f, // top left

  // 6. normal rectangle

  /* 17 */ -0.5f, -0.5f, 0.0f,  1.0f, 1.0f, 0.0f,   +0.0f, +0.0f, // bottom left
  /* 18 */ +0.5f, -0.5f, 0.0f,  1.0f, 0.0f, 0.0f,   +1.0f, +0.0f, // bottom right
  /* 19 */ +0.5f, +0.5f, 0.0f,  0.0f, 1.0f, 0.0f,   +1.0f, +1.0f, // top right
  /* 20 */ -0.5f, +0.5f, 0.0f,  0.0f, 0.0f, 1.0f,   +0.0f, +1.0f, // top left

  // 7. cube vertices

  /* 21 */ -0.5f, -0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +0.0f,
  /* 22 */ +0.5f, -0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +0.0f,
  /* 23 */ +0.5f, +0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +1.0f,
  /* 24 */ +0.5f, +0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +1.0f,
  /* 25 */ -0.5f, +0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +1.0f,
  /* 26 */ -0.5f, -0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +0.0f,

  /* 27 */ -0.5f, -0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +0.0f,
  /* 28 */ +0.5f, -0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +0.0f,
  /* 29 */ +0.5f, +0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +1.0f,
  /* 30 */ +0.5f, +0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +1.0f,
  /* 31 */ -0.5f, +0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +1.0f,
  /* 32 */ -0.5f, -0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +0.0f,

  /* 33 */ -0.5f, +0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +0.0f,
  /* 34 */ -0.5f, +0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +1.0f,
  /* 35 */ -0.5f, -0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +1.0f,
  /* 36 */ -0.5f, -0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +1.0f,
  /* 37 */ -0.5f, -0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +0.0f,
  /* 38 */ -0.5f, +0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +0.0f,

  /* 39 */ +0.5f, +0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +0.0f,
  /* 40 */ +0.5f, +0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +1.0f,
  /* 41 */ +0.5f, -0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +1.0f,
  /* 42 */ +0.5f, -0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +1.0f,
  /* 43 */ +0.5f, -0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +0.0f,
  /* 44 */ +0.5f, +0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +0.0f,

  /* 45 */ -0.5f, -0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +1.0f,
  /* 46 */ +0.5f, -0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +1.0f,
  /* 47 */ +0.5f, -0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +0.0f,
  /* 48 */ +0.5f, -0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +0.0f,
  /* 49 */ -0.5f, -0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +0.0f,
  /* 50 */ -0.5f, -0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +1.0f,

  /* 51 */ -0.5f, +0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +1.0f,
  /* 52 */ +0.5f, +0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +1.0f,
  /* 53 */ +0.5f, +0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +0.0f,
  /* 54 */ +0.5f, +0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +1.0f, +0.0f,
  /* 55 */ -0.5f, +0.5f, +0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +0.0f,
  /* 56 */ -0.5f, +0.5f, -0.5f,  1.0f, 1.0f, 1.0f,  +0.0f, +1.0f
};

static unsigned int indices[] = {
  9, 6, 8,
  6, 8, 7,

  13, 14, 15,
  13, 15, 16,

  17, 18, 19,
  17, 20, 19,
};

static unsigned int vaos[2];
static unsigned int vbos[2];
static unsigned int ebos[2];
static unsigned int textures[2];

static std::string LoadShaderSource (std::string name) {
  std::string code;
  std::ifstream file;
  file.exceptions(std::ifstream::failbit|std::ifstream::badbit);
  try {
    file.open("/home/viktor/master/game/data/shaders/" + name);
    std::stringstream stream;
    stream << file.rdbuf();
    file.close();
    code = stream.str();
  } catch(std::ifstream::failure e) {
    printf("FAILED TO LOAD FILE\n");
  }
  return code;
}

static bool check_compilation(GLuint id, bool isProgram, GLenum type, const char *msg) {
  int success;
  char info[1024];

  if (isProgram) {
    glGetProgramiv(id, type, &success);
  } else {
    glGetShaderiv(id, type, &success);
  }

  if (!success) {
    if (isProgram) {
      glGetProgramInfoLog(id, 1024, NULL, info);
    } else {
      glGetShaderInfoLog(id, 1024, NULL, info);
    }

    printf("ERROR[%s]: %s.\n", msg, info);
    return false;
  }

  return true;
}

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods) {
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) {
    glfwSetWindowShouldClose(window, GLFW_TRUE);
  }
}

static void framebuffer(GLFWwindow* window, int width, int height) {
  glViewport(0, 0, width, height);
}

int _05_transformations(int argc, char *argv[]) {
  int check;

  struct Camera camera = {
    /* pos   */ glm::vec3(0.0f, 0.0f, 3.0f),
    /* front */ glm::vec3(0.0f, 0.0f, -1.0f),
    /* up    */ glm::vec3(0.0f, 1.0f, 0.0f),
  };

  check = glfwInit();

  if (check == GLFW_FALSE) {
    printf("FAILED TO INITIALIZE GLFW.\n");
    return -1;
  }

  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
  glfwWindowHint(GLFW_RESIZABLE, GLFW_FALSE);

#ifdef __APPLE__
  glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE); 
#endif

  window = glfwCreateWindow(WIDTH, HEIGHT, "Window", NULL, NULL);

  if (window == NULL) {
    printf("FAILED TO CREATE WINDOW.\n");
    glfwTerminate();
    return -1;
  }

  glfwSetKeyCallback(window, keyboard);
  glfwSetFramebufferSizeCallback(window, framebuffer);
  glfwMakeContextCurrent(window);

  check = gladLoadGLLoader((GLADloadproc)glfwGetProcAddress);

  if (!check) {
    printf("FAILED TO INITIALIZE GLAD.\n");
    return -1;
  }


  struct {
    glm::vec3 positions[10];
  } cube = {
    glm::vec3(+0.0f, +0.0f, +0.0f),
    glm::vec3(2.0f, 5.0f, -15.0f),
    glm::vec3(-1.0f, -2.2f, -2.5f),
    glm::vec3(-3.8f, -2.0f, -12.3f),
    glm::vec3(2.4f, -0.4f, -3.5f),
    glm::vec3(-1.7f, 3.0f, -7.7f),
    glm::vec3(2.0f, 4.1f, 0.2f),
    glm::vec3(3.3f, 0.2f, -2.5f),
    glm::vec3(-2.2f, 4.2f, -45.3f),
    glm::vec3(1.3f, 1.0f, -2.0f),
  };

  vs = glCreateShader(GL_VERTEX_SHADER);

  std::string vsSource = LoadShaderSource("example.vs");
  std::string fsSource = LoadShaderSource("example.fs");

  glShaderSource(vs, 1, (const char **)&vsSource, NULL);
  glCompileShader(vs);
  check_compilation(vs, false, GL_COMPILE_STATUS, "FAILED TO COMPILE VERTEX SHADER");

  fs = glCreateShader(GL_FRAGMENT_SHADER);
  glShaderSource(fs, 1, (const char **)&fsSource, NULL);
  glCompileShader(fs);
  check_compilation(fs, false, GL_COMPILE_STATUS, "FAILED TO COMPILE FRAGMENT SHADER");

  vsSource.clear();
  fsSource.clear();

  program = glCreateProgram();
  glAttachShader(program, vs);
  glAttachShader(program, fs);
  glLinkProgram(program);
  check_compilation(program, true, GL_LINK_STATUS, "FAILED TO LINK PROGRAM");

  glDeleteShader(vs);
  glDeleteShader(fs);

  glGenVertexArrays(2, vaos);
  glGenBuffers(2, vbos);
  glGenBuffers(2, ebos);

  glBindVertexArray(vaos[0]);

  glBindBuffer(GL_ARRAY_BUFFER, vbos[0]);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebos[0]);
  glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void *)0);
  glEnableVertexAttribArray(0);
  glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void *)(3 * sizeof(float)));
  glEnableVertexAttribArray(1);
  glVertexAttribPointer(2, 2, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void *)(6 * sizeof(float)));
  glEnableVertexAttribArray(2);

  glBindBuffer(GL_ARRAY_BUFFER, 0);

  glBindVertexArray(0);

  glGenTextures(2, textures);

  // texture 1
  // =========================================================
  glBindTexture(GL_TEXTURE_2D, textures[0]);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

  int width, height, nrChannels;
  std::string dir = "/home/viktor/master/game/data";
  stbi_set_flip_vertically_on_load(true);
  unsigned char *data = stbi_load((dir + "/wall.jpg").c_str(), &width, &height, &nrChannels, 0);

  if (!data) {
    printf("FAILED TO LOAD TEXTURE\n");
  } else {
    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, width, height, 0, GL_RGB, GL_UNSIGNED_BYTE, data);
    glGenerateMipmap(GL_TEXTURE_2D);
  }
  stbi_image_free(data);

  // texture 2
  // =========================================================
  glBindTexture(GL_TEXTURE_2D, textures[1]);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

  // make sure the image has alpha channel
  data = stbi_load((dir + "/container.jpg").c_str(), &width, &height, &nrChannels, 0);

  if (!data) {
    printf("FAILED TO LOAD TEXTURE\n");
  } else {
    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, width, height, 0, GL_RGB, GL_UNSIGNED_BYTE, data);
    glGenerateMipmap(GL_TEXTURE_2D);
  }
  stbi_image_free(data);

  glUseProgram(program);
  glUniform1i(glGetUniformLocation(program, "ourTexture1"), 0);
  glUniform1i(glGetUniformLocation(program, "ourTexture2"), 1);

  unsigned int frame = 0;
  int mode = 0;

  while (!glfwWindowShouldClose(window)) {
    float time = glfwGetTime();
    float sinTime = sin(time);

    deltaTime = time - lastFrame;
    lastFrame = time;

    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);

    glUseProgram(program);

    if (frame % 3000 == 0 && frame != 0) {
      mode += 1;
      if (mode > 2) mode = 0;
    }

    switch (mode) {
      case 0: glPolygonMode(GL_FRONT_AND_BACK, GL_FILL); break;
      case 1: glPolygonMode(GL_FRONT_AND_BACK, GL_LINE); break;
      case 2: glPolygonMode(GL_FRONT_AND_BACK, GL_POINT); break;
    }

    model = glm::mat4(1.0f);
    view = glm::mat4(1.0f);
    projection = glm::mat4(1.0f);
    transform = glm::mat4(1.0f);

    glBindVertexArray(vaos[0]);

    float green = sinTime / 2.0f + 0.5f;

    glBindTexture(GL_TEXTURE_2D, textures[0]);

    // bind textures on corresponding texture units
    glActiveTexture(GL_TEXTURE0);
    glBindTexture(GL_TEXTURE_2D, textures[0]);
    glActiveTexture(GL_TEXTURE1);
    glBindTexture(GL_TEXTURE_2D, textures[1]);


    // triangle 1 and triangle 2
    glBindTexture(GL_TEXTURE_2D, 0);
    model = glm::mat4(1.0f);
    view = glm::mat4(1.0f);
    projection = glm::mat4(1.0f);
    glUniform1f(glGetUniformLocation(program, "xOffset"), 0.0f);
    glUniform1f(glGetUniformLocation(program, "yOffset"), 0.0f);
    glUniform1i(glGetUniformLocation(program, "useTexture1"), false);
    glUniform1i(glGetUniformLocation(program, "useBothTextures"), false);
    glUniform1i(glGetUniformLocation(program, "useCustomColor"), true);
    glUniform1i(glGetUniformLocation(program, "useVertexColor"), false);
    glUniform3f(glGetUniformLocation(program, "InColor"), 1.0f, green, 0.0f);
    glUniformMatrix4fv(glGetUniformLocation(program, "transform"), 1, GL_FALSE, glm::value_ptr(transform));
    glUniformMatrix4fv(glGetUniformLocation(program, "model"), 1, GL_FALSE, glm::value_ptr(model));
    glUniformMatrix4fv(glGetUniformLocation(program, "view"), 1, GL_FALSE, glm::value_ptr(view));
    glUniformMatrix4fv(glGetUniformLocation(program, "projection"), 1, GL_FALSE, glm::value_ptr(projection));
    glDrawArrays(GL_TRIANGLES, 0, 6);

    // rectangle 3
    transform = glm::mat4(1.0f);
    glBindTexture(GL_TEXTURE_2D, 0);
    model = glm::mat4(1.0f);
    view = glm::mat4(1.0f);
    projection = glm::mat4(1.0f);
    glUniform1f(glGetUniformLocation(program, "xOffset"), 0.0f);
    glUniform1f(glGetUniformLocation(program, "yOffset"), 0.0f);
    glUniform1i(glGetUniformLocation(program, "useCustomColor"), false);
    glUniform1i(glGetUniformLocation(program, "useBothTextures"), false);
    glUniform1i(glGetUniformLocation(program, "useVertexColor"), false);
    glUniform1i(glGetUniformLocation(program, "useTexture1"), false);
    glUniformMatrix4fv(glGetUniformLocation(program, "transform"), 1, GL_FALSE, glm::value_ptr(transform));
    glUniformMatrix4fv(glGetUniformLocation(program, "model"), 1, GL_FALSE, glm::value_ptr(model));
    glUniformMatrix4fv(glGetUniformLocation(program, "view"), 1, GL_FALSE, glm::value_ptr(view));
    glUniformMatrix4fv(glGetUniformLocation(program, "projection"), 1, GL_FALSE, glm::value_ptr(projection));
    glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, (void*)0);

    // triangle 4
    glBindTexture(GL_TEXTURE_2D, 0);
    transform = glm::mat4(1.0f);
    model = glm::mat4(1.0f);
    view = glm::mat4(1.0f);
    projection = glm::mat4(1.0f);
    transform = glm::rotate(transform, time, glm::vec3(0.0f, 0.0f, 1.0f));
    glUniform1f(glGetUniformLocation(program, "xOffset"), 0.0f);
    glUniform1f(glGetUniformLocation(program, "yOffset"), 0.0f);
    glUniform1i(glGetUniformLocation(program, "useCustomColor"), false);
    glUniform1i(glGetUniformLocation(program, "useBothTextures"), false);
    glUniform1i(glGetUniformLocation(program, "useVertexColor"), false);
    glUniform1i(glGetUniformLocation(program, "useTexture1"), true);
    glUniformMatrix4fv(glGetUniformLocation(program, "transform"), 1, GL_FALSE, glm::value_ptr(transform));
    glUniformMatrix4fv(glGetUniformLocation(program, "model"), 1, GL_FALSE, glm::value_ptr(model));
    glUniformMatrix4fv(glGetUniformLocation(program, "view"), 1, GL_FALSE, glm::value_ptr(view));
    glUniformMatrix4fv(glGetUniformLocation(program, "projection"), 1, GL_FALSE, glm::value_ptr(projection));
    glDrawArrays(GL_TRIANGLES, 10, 3);

    // rectangle 5 (1)
    transform = glm::mat4(1.0f);
    model = glm::mat4(1.0f);
    view = glm::mat4(1.0f);
    projection = glm::mat4(1.0f);
    glUniform1f(glGetUniformLocation(program, "xOffset"), 0.0f);
    glUniform1f(glGetUniformLocation(program, "yOffset"), 0.0f);
    glUniform1i(glGetUniformLocation(program, "useCustomColor"), false);
    glUniform1i(glGetUniformLocation(program, "useVertexColor"), false);
    glUniform1i(glGetUniformLocation(program, "useBothTextures"), false);
    glUniform1i(glGetUniformLocation(program, "useTexture1"), true);
    glUniformMatrix4fv(glGetUniformLocation(program, "transform"), 1, GL_FALSE, glm::value_ptr(transform));
    glUniformMatrix4fv(glGetUniformLocation(program, "model"), 1, GL_FALSE, glm::value_ptr(model));
    glUniformMatrix4fv(glGetUniformLocation(program, "view"), 1, GL_FALSE, glm::value_ptr(view));
    glUniformMatrix4fv(glGetUniformLocation(program, "projection"), 1, GL_FALSE, glm::value_ptr(projection));
    glActiveTexture(GL_TEXTURE0);
    glBindTexture(GL_TEXTURE_2D, textures[1]);
    glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, (void *)(sizeof(unsigned int) * 6));

    // rectangle 5 (2)
    model = glm::mat4(1.0f);
    view = glm::mat4(1.0f);
    projection = glm::mat4(1.0f);
    glUniform1f(glGetUniformLocation(program, "xOffset"), -1.0f);
    glUniform1f(glGetUniformLocation(program, "yOffset"), 0.0f);
    glUniform1i(glGetUniformLocation(program, "useCustomColor"), false);
    glUniform1i(glGetUniformLocation(program, "useBothTextures"), false);
    glUniform1i(glGetUniformLocation(program, "useVertexColor"), true);
    glUniform1i(glGetUniformLocation(program, "useTexture1"), true);
    glUniformMatrix4fv(glGetUniformLocation(program, "transform"), 1, GL_FALSE, glm::value_ptr(transform));
    glUniformMatrix4fv(glGetUniformLocation(program, "model"), 1, GL_FALSE, glm::value_ptr(model));
    glUniformMatrix4fv(glGetUniformLocation(program, "view"), 1, GL_FALSE, glm::value_ptr(view));
    glUniformMatrix4fv(glGetUniformLocation(program, "projection"), 1, GL_FALSE, glm::value_ptr(projection));
    glActiveTexture(GL_TEXTURE1);
    glBindTexture(GL_TEXTURE_2D, 0);
    glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, (void *)(sizeof(unsigned int) * 6));

    // rectangle 5 (3)
    model = glm::mat4(1.0f);
    view = glm::mat4(1.0f);
    projection = glm::mat4(1.0f);

    model = glm::rotate(model, time, glm::vec3(1.0f, 0.0f, 0.0f));
    view = glm::translate(view, glm::vec3(0.0f, 0.0f, -3.0f));
    projection = glm::perspective(glm::radians(45.0f), (float)WIDTH/(float)HEIGHT, 0.1f, 100.0f);

    glBindTexture(GL_TEXTURE_2D, 0);
    glUniform1f(glGetUniformLocation(program, "xOffset"), -1.0f);
    glUniform1f(glGetUniformLocation(program, "yOffset"), -1.0f);
    glUniform1i(glGetUniformLocation(program, "useCustomColor"), false);
    glUniform1i(glGetUniformLocation(program, "useVertexColor"), false);
    glUniform1i(glGetUniformLocation(program, "useBothTextures"), true);
    glUniform1i(glGetUniformLocation(program, "useTexture1"), false);
    glUniformMatrix4fv(glGetUniformLocation(program, "transform"), 1, GL_FALSE, glm::value_ptr(transform));
    glActiveTexture(GL_TEXTURE0);
    glBindTexture(GL_TEXTURE_2D, textures[0]);
    glActiveTexture(GL_TEXTURE1);
    glBindTexture(GL_TEXTURE_2D, textures[1]);
    glUniformMatrix4fv(glGetUniformLocation(program, "model"), 1, GL_FALSE, glm::value_ptr(model));
    glUniformMatrix4fv(glGetUniformLocation(program, "view"), 1, GL_FALSE, glm::value_ptr(view));
    glUniformMatrix4fv(glGetUniformLocation(program, "projection"), 1, GL_FALSE, glm::value_ptr(projection));
    glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, (void *)(sizeof(unsigned int) * 6));

    // NORMAL RECTANGLE
    transform = glm::mat4(1.0f);
    model = glm::mat4(1.0f);
    view = glm::mat4(1.0f);
    projection = glm::mat4(1.0f);

    model = glm::scale(model, glm::vec3(0.5f, 0.5f, 0.5f));
    model = glm::translate(model, glm::vec3(1.0f, -0.8f, 0.0f));
    model = glm::rotate(model, glm::radians(-45.0f), glm::vec3(1.0f, 0.0f, 0.0f));
    view = glm::translate(view, glm::vec3(0.0f, 0.0f, -3.0f));
    projection = glm::perspective(glm::radians(45.0f), (float)WIDTH/(float)HEIGHT, 0.1f, 100.0f);

    glUniform1f(glGetUniformLocation(program, "xOffset"), 0.0f);
    glUniform1f(glGetUniformLocation(program, "yOffset"), 0.0f);
    glUniform1i(glGetUniformLocation(program, "useCustomColor"), false);
    glUniform1i(glGetUniformLocation(program, "useVertexColor"), false);
    glUniform1i(glGetUniformLocation(program, "useBothTextures"), false);
    glUniform1i(glGetUniformLocation(program, "useTexture1"), true);
    glUniformMatrix4fv(glGetUniformLocation(program, "transform"), 1, GL_FALSE, glm::value_ptr(transform));
    glActiveTexture(GL_TEXTURE0);
    glBindTexture(GL_TEXTURE_2D, textures[1]);
    glUniformMatrix4fv(glGetUniformLocation(program, "model"), 1, GL_FALSE, glm::value_ptr(model));
    glUniformMatrix4fv(glGetUniformLocation(program, "view"), 1, GL_FALSE, glm::value_ptr(view));
    glUniformMatrix4fv(glGetUniformLocation(program, "projection"), 1, GL_FALSE, glm::value_ptr(projection));
    glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, (void *)(sizeof(unsigned int) * 3 * 4));

    // DEFAULT CUBE
    glEnable(GL_DEPTH_TEST);
    transform = glm::mat4(1.0f);
    model = glm::mat4(1.0f);
    view = glm::mat4(1.0f);
    projection = glm::mat4(1.0f);

    model = glm::scale(model, glm::vec3(0.5f, 0.5f, 0.5f));
    model = glm::translate(model, glm::vec3(1.0f, -0.8f, 0.0f));
    model = glm::rotate(model, time, glm::vec3(1.0f, 0.0f, 0.0f));
    view = glm::translate(view, glm::vec3(0.0f, 0.0f, -3.0f));
    projection = glm::perspective(glm::radians(45.0f), (float)WIDTH/(float)HEIGHT, 0.1f, 100.0f);

    glUniform1f(glGetUniformLocation(program, "xOffset"), 0.0f);
    glUniform1f(glGetUniformLocation(program, "yOffset"), 0.0f);
    glUniform1i(glGetUniformLocation(program, "useCustomColor"), false);
    glUniform1i(glGetUniformLocation(program, "useVertexColor"), false);
    glUniform1i(glGetUniformLocation(program, "useBothTextures"), false);
    glUniform1i(glGetUniformLocation(program, "useTexture1"), true);
    glUniformMatrix4fv(glGetUniformLocation(program, "transform"), 1, GL_FALSE, glm::value_ptr(transform));
    glActiveTexture(GL_TEXTURE0);
    glBindTexture(GL_TEXTURE_2D, textures[1]);
    glUniformMatrix4fv(glGetUniformLocation(program, "model"), 1, GL_FALSE, glm::value_ptr(model));
    glUniformMatrix4fv(glGetUniformLocation(program, "view"), 1, GL_FALSE, glm::value_ptr(view));
    glUniformMatrix4fv(glGetUniformLocation(program, "projection"), 1, GL_FALSE, glm::value_ptr(projection));
    glDrawArrays(GL_TRIANGLES, 21, 36);

    view = glm::lookAt(camera.pos, camera.pos + camera.front, camera.up);
    glUniformMatrix4fv(glGetUniformLocation(program, "view"), 1, GL_FALSE, glm::value_ptr(view));
    // view = glm::translate(view, glm::vec3(0.0f, 0.0f, -20.0f));
    for (unsigned int i=0; i<10; i++) {
      glm::mat4 model;
      glm::mat4 perspective;
      projection = glm::perspective(glm::radians(45.0f), (float)WIDTH/(float)HEIGHT, 0.1f, 100.0f);
      model = glm::translate(model, cube.positions[i]);
      glUniformMatrix4fv(glGetUniformLocation(program, "model"), 1, GL_FALSE, glm::value_ptr(model));
      glUniformMatrix4fv(glGetUniformLocation(program, "projection"), 1, GL_FALSE, glm::value_ptr(projection));
      glDrawArrays(GL_TRIANGLES, 21, 36);
    }

    glDisable(GL_DEPTH_TEST);

    glfwPollEvents();
    glfwSwapBuffers(window);

    if (glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS) {
      glfwSetWindowShouldClose(window, true);
    }

    float cameraSpeed = 2.5 * deltaTime;

    if (glfwGetKey(window, GLFW_KEY_W) == GLFW_PRESS) {
      camera.pos += cameraSpeed * camera.front;
    }
    if (glfwGetKey(window, GLFW_KEY_A) == GLFW_PRESS) {
      camera.pos -= glm::normalize(glm::cross(camera.front, camera.up)) * cameraSpeed;
    }
    if (glfwGetKey(window, GLFW_KEY_S) == GLFW_PRESS) {
      camera.pos -= cameraSpeed * camera.front;
    }
    if (glfwGetKey(window, GLFW_KEY_D) == GLFW_PRESS) {
      camera.pos += glm::normalize(glm::cross(camera.front, camera.up)) * cameraSpeed;
    }

    frame += 1;
  }

  glDeleteVertexArrays(2, vaos);
  glDeleteBuffers(2, vbos);
  glDeleteBuffers(2, ebos);
  glDeleteTextures(2, textures);
  glfwTerminate();

  return 0;
}
