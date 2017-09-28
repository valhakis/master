#include <stdio.h>

class Person {
  public:
    Person() {
      this->enabled = false;
    }
  protected:
  private:
    bool enabled;
};

int main(int argc, char *argv[]) {

  std::cout << "demo" << std::endl;

  return 0;
}
