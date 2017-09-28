GLFWwindow* window;

window = glfwCreateWindow(width, height, "program-01", NULL, NULL);

if (window == NULL) {
  fprintf(stderr, "Failed to create window.\n");
  glfwTerminate();
  return -1;
}

glfwMakeContextCurrent(window);
