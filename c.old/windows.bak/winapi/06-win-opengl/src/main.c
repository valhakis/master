#include <windows.h>
#include <wchar.h>
#include <wingdi.h>
#include <stdbool.h>
#include <GL/glew.h>
#include <GL/gl.h>

#pragma comment (lib, "opengl32.lib")
#pragma comment (lib, "glew32.lib")

LRESULT CALLBACK WndProc(HWND, UINT, WPARAM, LPARAM);

HDC _HDC;
HGLRC _HRC;

int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow)
{
  MSG msg = {0};
  HWND hwnd;
  WNDCLASSW wc = {0};

  //wc.style = CS_HREDRAW|CS_VREDRAW;
  wc.style = CS_OWNDC;
  wc.cbClsExtra = 0;
  wc.cbWndExtra = 0;
  wc.lpszClassName = L"Window";
  wc.hInstance = hInstance;
  //wc.hbrBackground = GetSysColorBrush(COLOR_3DFACE);
  wc.hbrBackground = (HBRUSH)(COLOR_BACKGROUND);
  wc.lpszMenuName = NULL;
  wc.lpfnWndProc = WndProc;
  wc.hCursor = LoadCursor(NULL, IDC_ARROW);
  wc.hIcon = LoadIcon(NULL, IDI_APPLICATION);

  RegisterClassW(&wc);
  hwnd = CreateWindowW(wc.lpszClassName, L"Window", WS_OVERLAPPEDWINDOW|WS_VISIBLE, 100, 100, 350, 250, NULL, NULL, hInstance, NULL);

  ShowWindow(hwnd, nCmdShow);
  UpdateWindow(hwnd);

  while (GetMessage(&msg, NULL, 0, 0))
  {
    glClearColor(1.0f, 0.0f, 0.0f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);
    glFlush();
    SwapBuffers(_HDC);
    DispatchMessage(&msg);
  }

  return (int) msg.wParam;
}

void SetupPixelFormat(HDC _HDC)
{
  int nPixelFormat;

  static PIXELFORMATDESCRIPTOR pfd = {
    sizeof(PIXELFORMATDESCRIPTOR),          //size of structure
    1,                                      //default version
    PFD_DRAW_TO_WINDOW |                    //window drawing support
      PFD_SUPPORT_OPENGL |                    //opengl support
      PFD_DOUBLEBUFFER,                       //double buffering support
    PFD_TYPE_RGBA,                          //RGBA color mode
    32,                                     //32 bit color mode
    0, 0, 0, 0, 0, 0,                       //ignore color bits
    0,                                      //no alpha buffer
    0,                                      //ignore shift bit
    0,                                      //no accumulation buffer
    0, 0, 0, 0,                             //ignore accumulation bits
    16,                                     //16 bit z-buffer size
    0,                                      //no stencil buffer
    0,                                      //no aux buffer
    PFD_MAIN_PLANE,                         //main drawing plane
    0,                                      //reserved
    0, 0, 0 };                              //layer masks ignored

  /*      Choose best matching format*/
  nPixelFormat = ChoosePixelFormat(_HDC, &pfd);

  /*      Set the pixel format to the device context*/
  SetPixelFormat(_HDC, nPixelFormat, &pfd);
}

LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam)
{
  switch (msg) 
  {
    case WM_CREATE:
      /* get current device context */
      _HDC = GetDC(hwnd);
      SetupPixelFormat(_HDC);
      _HRC = wglCreateContext(_HDC);
      wglMakeCurrent(_HDC, _HRC);
      return 0;

      break;
    case WM_DESTROY:
      PostQuitMessage(0);
      break;
    case WM_KEYUP:
      wprintf(L"WM_KEYUP: 0x%x.\n", wParam);
      if (wParam == 0x1b) {
        PostQuitMessage(0);
      }

      if (wParam == 0x51) {
        MessageBoxW(NULL, L"My first Program.", L"Box", MB_OK);
      }
      break;
    default: break;
  }

  return DefWindowProcW(hwnd, msg, wParam, lParam);
}
