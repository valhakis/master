#include <app/window.h>
#include <app/share.h>
#include <GL/glew.h>

// _________$$$___$$$
// ______ __$$$___$$$
// _____$$$$$$$$$$$$$$$
// ___$$$ $$$$$$$$$$$$$$$$
// __$$$$$_$$$___$$$__$$$$
// _$$$$$__$$$___$$$
// _$$$$$__$$$___$$$
// _ $$$$$__$$$___$$$
// ___$$$$$$$$$$$$$$$$$$$
// _____$$$$$ $$$$$$$$$$$$$$
// ________ $$$___$$$___$$$$$
// ________$$$___$$$____$$$$$
// ________$$$ ___$$$____$$$$$
// _$$$$__ _$$$___$$$___$$$$$
// __$$$$$$$$$$$$$$$$$$$$$$
// ____$$$$$$$$ $$$$$$$$$$
// ________$$$_ __$$$
// ________$$$__ _$$$

// Window::mouseButtonDownCallback = NULL;
Window::Window(int argc, char **argv, int width, int height, const std::string& title) 
  : mouseButtonDownCallback(NULL) ,
  mouseMotionCallback(NULL), 
  keys{false}
{
  // setMouseMotion(NULL);
	share::print("WINDOW CREATION");

	this->argc = argc;
	this->argv = argv;

  keys[WINDOW_KEY_W] = false;
  keys[WINDOW_KEY_A] = false;
  keys[WINDOW_KEY_S] = false;
  keys[WINDOW_KEY_D] = false;

	SDL_Init(SDL_INIT_EVERYTHING);

	SDL_GL_SetAttribute(SDL_GL_RED_SIZE, 8);
	SDL_GL_SetAttribute(SDL_GL_GREEN_SIZE, 8);
	SDL_GL_SetAttribute(SDL_GL_BLUE_SIZE, 8);
	SDL_GL_SetAttribute(SDL_GL_ALPHA_SIZE, 8);
	SDL_GL_SetAttribute(SDL_GL_BUFFER_SIZE, 32);
	SDL_GL_SetAttribute(SDL_GL_DEPTH_SIZE, 16);
	SDL_GL_SetAttribute(SDL_GL_DOUBLEBUFFER, 1);

	m_window = SDL_CreateWindow(title.c_str(), SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, width, height, SDL_WINDOW_OPENGL);

	m_glContext = SDL_GL_CreateContext(m_window);

	GLenum status = glewInit();

	if (status != GLEW_OK) {
		share::error("GLEW Failed To Initialize.");
	}

	m_isClosed = false;

  setMouseMotion(NULL);

  glEnable(GL_DEPTH_TEST);
  glEnable(GL_CULL_FACE);
  glCullFace(GL_BACK);
} // Window::Window |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

Window::Window() {
	share::print("WINDOW CREATION");
} // Window::Window |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

Window::~Window() {
	share::print("WINDOW DESTRUCTION");

	SDL_GL_DeleteContext(m_glContext);
	SDL_DestroyWindow(m_window);

	SDL_Quit();
} // Window::~Window |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

void Window::Update() {
	SDL_GL_SwapWindow(m_window);
	SDL_Event event;

	while (SDL_PollEvent(&event)) {
		if (event.type == SDL_QUIT) {
			m_isClosed = true;
		}
    if (event.type == SDL_KEYDOWN) {
      if (event.key.keysym.sym == 27) {
        m_isClosed = true;
      }
      keys[event.key.keysym.scancode] = true;
      printf("KEY: %d.\n", event.key.keysym.scancode);
    }
    if (event.type == SDL_KEYUP) {
      keys[(int)event.key.keysym.scancode] = false;
    }
    if (event.type == SDL_MOUSEMOTION) {
      if (mouseMotionCallback) {
        mouseMotionCallback(this, (float) event.motion.x, (float) event.motion.y);
      }
      // printf("MOUSE POSITION: '%.2f, %.2f'.\n", (float)event.motion.x, (float)event.motion.y);
    }
    if (event.type == SDL_MOUSEBUTTONDOWN) {
      if (mouseButtonDownCallback) {
        mouseButtonDownCallback(this, (float) event.motion.x, (float) event.motion.y);
      }
      // printf("MOUSE BUTTON DWON [%.2f, %.2f]\n", (float) event.motion.x, (float) event.motion.y);
    }
  }

} // void Window::Update |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

bool Window::isClosed() {
  return m_isClosed;
} // bool Window::isClosed |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

void Window::clear(float r, float g, float b, float a) {
  glClearColor(r, g, b, a);
  glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);
} // void Window::cleaer |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

float Window::getWidth() {
  int width, height;
  SDL_GetWindowSize(m_window, &width, &height);
  return (float)width;
}
float Window::getHeight() {
  int width, height;
  SDL_GetWindowSize(m_window, &width, &height);
  return (float)height;
}

void Window::setMouseMotion(void (*callback)(Window* window, float x, float y)) {
  mouseMotionCallback = callback;
}

void Window::setMouseButtonDownCallback(void (*callback)(Window* window, float x, float y)) {
  mouseButtonDownCallback = callback;
}

void Window::GetDimensions(float *width, float *height) {
  int w, h;

  SDL_GetWindowSize(m_window, &w, &h);

  *width = (float)w;
  *height = (float)h;
}
