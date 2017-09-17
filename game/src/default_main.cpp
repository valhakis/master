#include <app/main.h>

#include <app/window.h>
#include <app/share.h>
#include <app/shader.h>
#include <app/mesh.h>
#include <app/texture.h>
#include <app/menu.h>
#include <app/transform.h>
#include <app/text.h>
#include <app/WAY.h>

static const char *image = "data/brick-wall.jpg";

int default_main (int argc, char *argv[]) {

  Window window(argc, argv, 800, 600, "Window");
  Shader shader("data/default");

  Menu menu(window);

  Shader textShader("data/text");
  Text text(textShader);

  Texture texture(image);
  Transform transform;

  float counter = 0.0f;

  Vertex vertices[] = {
    Vertex(glm::vec3(-0.5f, -0.5f, 0.0f), glm::vec2(0.0f, 0.0f)),
    Vertex(glm::vec3(+0.5f, -0.5f, 0.0f), glm::vec2(1.0f, 0.0f)),
    Vertex(glm::vec3(+0.0f, +0.5f, 0.0f), glm::vec2(0.5f, 1.0f)),
  };

  Mesh mesh(vertices, sizeof(vertices) / sizeof(vertices[0]));

  while (!window.isClosed()) {
    window.clear(0.1f, 0.1f, 0.1f, 1.0f);
    text.render("this is very text like", 25.0f, 25.0f, 1.0f, glm::vec3(0.5, 0.8f, 0.2f));
    text.render("where is the menu", 440.0f, 570.0f, 0.5f, glm::vec3(0.3, 0.7f, 0.9f));

    float sinCounter = sinf(counter);
    float cosCounter = cosf(counter);

    transform.GetPos().x = sinf(counter);
    // transform.GetRot().z = counter / 2;
    // share::printf("%.2f", cosCounter + 1.0);
    // transform.SetScale(glm::vec3(cosCounter, cosCounter, sinCounter));

    shader.Bind();
    texture.Bind(0);

    shader.Update(transform);
    mesh.Draw();

    menu.update();

    window.Update();

    counter += 0.001f;
  }

} // int default_main() |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|
