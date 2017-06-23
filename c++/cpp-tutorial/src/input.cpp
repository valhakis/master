#include <iostream>
#include <stdlib.h>
#include <string>
#include "includes/todo.h"

static int running = true;
static std::string input;

static int ProcessInput();

int InputLoop()
{
  while (running)
  {
    std::cout << "> ";
    getline(std::cin, input);
    ProcessInput();
  }
}

static int ProcessInput()
{
  if (input == "exit") {
    exit(EXIT_SUCCESS);
  }

  if (input == "quit") {
    exit(EXIT_SUCCESS);
  }

  if (input == "todos") {
    TodosShowAll();
  }
}
