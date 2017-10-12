#include <app/example.h>

int Example01Main() {
	LWindow window(800, 600);
	LShader shader("data/default");
	LPerson person("William Valhakis");

	while (window.isOpen()) {
		window.clear(0.1f, 0.1f, 0.1f, 1.0f);

		shader.use();

		window.pollevents();
		window.swapbuffers();
	}

}
