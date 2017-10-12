while (!glfwWindowShouldClose(window)) {
  if(glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS)
    glfwSetWindowShouldClose(window, true);

  glClear(GL_COLOR_BUFFER_BIT);

  glfwPollEvents();
  glfwSwapBuffers(window);
}
