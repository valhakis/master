#include <app/main.h>

#include <app/window.h>
#include <app/share.h>
#include <app/shader.h>
#include <app/mesh.h>
#include <app/texture.h>
#include <app/transform.h>
#include <app/WAY.h>

static const char *image = "data/brick-wall.jpg";

int default_main () {

	Window window(800, 600, "Window");
	Shader shader("data/default");
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

		window.Update();

		counter += 0.001f;
	}

} // int default_main() |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|
