#ifndef UNICODE
#define UNICODE
#endif

#include <windows.h>
#include <wchar.h>
#include <GL/gl.h>

/* PANELS
 * =======================
 * red panel
 * blue panel
 * opengl panel
 *
 */

HDC hdc;

void CenterWindow(HWND hwnd);
void RegisterRedPanelClass();
void RegisterBluePanelClass();
void RegisterOpenGLPanelClass();

LRESULT CALLBACK OpenGLPanelProc (
    HWND hwnd, /* handle to the window */
    UINT msg, /* list for system-provided messages */
    WPARAM wParam, /* additional message information */
    LPARAM lParam /* additional message information */
    );

LRESULT CALLBACK PanelProc(
    HWND hwnd, /* handle to the window */
    UINT msg, /* list for system-provided messages */
    WPARAM wParam, /* additional message information */
    LPARAM lParam /* additional message information */
    );

LRESULT CALLBACK WndProc(
    HWND hwnd, /* handle to the window */
    UINT msg, /* list for system-provided messages */
    WPARAM wParam, /* additional message information */
    LPARAM lParam /* additional message information */
    );

int WINAPI wWinMain (
    HINSTANCE hInstance, /* handle to current instance of the application */
    HINSTANCE hPrevInstance, /* handle to previous instance */
    PWSTR pCmdLine,  /* command line for the application */
    int nCmdShow /* controls how the window is to be shown */
    )
{
#if 1 == 0
  // TODO Put this somewhere else
  MessageBoxW(
      NULL, /* hwnd */
      L"Text", /* text */
      L"Caption", /* caption */
      MB_OK/* type */
      );
#endif

  HBRUSH hbrush = CreateSolidBrush(RGB(20, 20, 20));

  MSG msg;
  HWND hwnd;
  WNDCLASSW wc = {
    CS_HREDRAW|CS_VREDRAW, /* style */
    WndProc, /* pointer to window procedure */
    0, /* number of extra bytes to allocate after window-class structure */
    0, /* number of extra bytes to allocate after window instance */
    hInstance, /* a handle to instance that contains window procedure */
    LoadIcon(NULL, IDI_APPLICATION), /* handle to class icon */
    LoadCursor(NULL, IDC_ARROW), /* handle to class cursor */
    // GetSysColorBrush(COLOR_3DFACE), /* handle to class background brush */
    hbrush, /* handle to class background brush */
    NULL, /* resource name of the class menu */
    L"Windows"/* pointer to null-terminated string */
  };

  RegisterClassW(&wc);

  hwnd = CreateWindowW(
      wc.lpszClassName, /* null-terminated string */
      L"Windows", /* window name */
      WS_OVERLAPPEDWINDOW|WS_VISIBLE,/* style of the window */
      0, /* x position */
      0, /* y position */
      800, /* window width */
      600, /* window height */
      NULL, /* handle to parent window */
      NULL, /* handle to menu */
      hInstance, /* handle to the instance of the module associated with the window */
      NULL /* pointer to the value to be passed to window  */
      );

  ShowWindow(hwnd, nCmdShow);
  UpdateWindow(hwnd);

  while (GetMessage(&msg, NULL, 0, 0))
  {
    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);
    glFlush();
    SwapBuffers(hdc);

    TranslateMessage(&msg);
    DispatchMessage(&msg);
  }

  return (int) msg.wParam;
}

LRESULT CALLBACK WndProc(
    HWND hwnd, /* handle to the window */
    UINT msg, /* list for system-provided messages */
    WPARAM wParam, /* additional message information */
    LPARAM lParam /* additional message information */
    )
{
  switch (msg) 
  {
    case WM_CREATE:
      // CenterWindow(hwnd);

      RegisterRedPanelClass();
      CreateWindowW(
          L"RedPanelClass", /* null-terminated string */
          NULL, /* window name */
          WS_CHILD|WS_VISIBLE,/* style of the window */
          20, /* x position */
          20, /* y position */
          80, /* window width */
          80, /* window height */
          hwnd, /* handle to parent window */
          (HMENU) 1, /* handle to menu */
          NULL, /* handle to the instance of the module associated with the window */
          NULL /* pointer to the value to be passed to window  */
          );

      RegisterBluePanelClass();
      CreateWindowW(
          L"BluePanelClass", /* null-terminated string */
          NULL, /* window name */
          WS_CHILD|WS_VISIBLE,/* style of the window */
          120, /* x position */
          20, /* y position */
          80, /* window width */
          80, /* window height */
          hwnd, /* handle to parent window */
          (HMENU) 2, /* handle to menu */
          NULL, /* handle to the instance of the module associated with the window */
          NULL /* pointer to the value to be passed to window  */
          );

      RegisterOpenGLPanelClass();
      CreateWindowW(
          L"OpenGLPanelClass", /* null-terminated string */
          NULL, /* window name */
          WS_CHILD|WS_VISIBLE,/* style of the window */
          220, /* x position */
          20, /* y position */
          500, /* window width */
          500, /* window height */
          hwnd, /* handle to parent window */
          (HMENU) 2, /* handle to menu */
          NULL, /* handle to the instance of the module associated with the window */
          NULL /* pointer to the value to be passed to window  */
          );

      break;

    case WM_DESTROY:
      PostQuitMessage(0);
      break;
  }

  return DefWindowProcW(hwnd, msg, wParam, lParam);
}

void CenterWindow(HWND hwnd)
{
  RECT rc = {
    0, /* left */
    0, /* top */
    0, /* right */
    0, /* bottom */
  };

  GetWindowRect(hwnd, &rc);
  int win_w = rc.right - rc.left;
  int win_h = rc.bottom - rc.top;

  int screen_w = GetSystemMetrics(SM_CXSCREEN);
  int screen_h = GetSystemMetrics(SM_CYSCREEN);

  SetWindowPos(
      hwnd, /* a handle to window */
      HWND_TOP, /* handle to the window to precede the position window in the Z order */
      (screen_w - win_w)/2, /* position x */
      (screen_h - win_h)/2, /* position y */
      0, /* new width of the window */
      0,  /* new height of the window */
      SWP_NOSIZE /* window size and positioning flags */
      );
}

LRESULT CALLBACK PanelProc(
    HWND hwnd, /* handle to the window */
    UINT msg, /* list for system-provided messages */
    WPARAM wParam, /* additional message information */
    LPARAM lParam /* additional message information */
    )
{
  switch (msg)
  {
    case WM_LBUTTONUP:
      MessageBeep(MB_OK);
      break;
  }

  return DefWindowProcW(hwnd, msg, wParam, lParam);
}

LRESULT CALLBACK OpenGLPanelProc (
    HWND hwnd, /* handle to the window */
    UINT msg, /* list for system-provided messages */
    WPARAM wParam, /* additional message information */
    LPARAM lParam /* additional message information */
    )
{
  switch (msg)
  {
    case WM_LBUTTONUP:
      MessageBeep(MB_OK);
      break;

    case WM_CREATE:
      {
        PIXELFORMATDESCRIPTOR pfd = {
          sizeof(PIXELFORMATDESCRIPTOR),
          1,
          PFD_DRAW_TO_WINDOW|PFD_SUPPORT_OPENGL|PFD_DOUBLEBUFFER,
          32,
          0, 0, 0, 0, 0, 0,
          0,
          0,
          0,
          0, 0, 0, 0,
          24,
          8,
          0,
          PFD_MAIN_PLANE,
          0,
          0, 0, 0
        };

        hdc = GetDC(hwnd);
        int pixelFormat = ChoosePixelFormat(hdc, &pfd);
        SetPixelFormat(hdc, pixelFormat, &pfd);

        HGLRC context = wglCreateContext(hdc);
        wglMakeCurrent(hdc, context);

#if 1 == 2
        MessageBoxA(0,(char*)glGetString(GL_VERSION), "OPENGL VERSION",0);
        wprintf(L"OpenGL Version: %s.\n", glGetString(GL_VERSION));
#endif
      }
      break;
  }

  return DefWindowProcW(hwnd, msg, wParam, lParam);
}

void RegisterRedPanelClass()
{
  HBRUSH hbrush = CreateSolidBrush(RGB(255, 0, 0));

  WNDCLASSW rwc = {
    0, /* style */
    PanelProc, /* pointer to window procedure */
    0, /* number of extra bytes to allocate after window-class structure */
    0, /* number of extra bytes to allocate after window instance */
    0, /* a handle to instance that contains window procedure */
    0, /* handle to class icon */
    LoadCursor(NULL, IDC_ARROW), /* handle to class cursor */
    hbrush, /* handle to class background brush */
    0, /* resource name of the class menu */
    L"RedPanelClass"/* class-name | pointer to null-terminated string */
  };

  RegisterClassW(&rwc);
}

void RegisterBluePanelClass()
{
  HBRUSH hbrush = CreateSolidBrush(RGB(0, 0, 255));

  WNDCLASSW rwc = {
    0, /* style */
    PanelProc, /* pointer to window procedure */
    0, /* number of extra bytes to allocate after window-class structure */
    0, /* number of extra bytes to allocate after window instance */
    0, /* a handle to instance that contains window procedure */
    0, /* handle to class icon */
    LoadCursor(NULL, IDC_ARROW), /* handle to class cursor */
    hbrush, /* handle to class background brush */
    0, /* resource name of the class menu */
    L"BluePanelClass"/* class-name | pointer to null-terminated string */
  };

  RegisterClassW(&rwc);
}

void RegisterOpenGLPanelClass()
{
  HBRUSH hbrush = CreateSolidBrush(RGB(255, 255, 0));

  WNDCLASSW rwc = {
    CS_OWNDC, /* style */
    OpenGLPanelProc, /* pointer to window procedure */
    0, /* number of extra bytes to allocate after window-class structure */
    0, /* number of extra bytes to allocate after window instance */
    0, /* a handle to instance that contains window procedure */
    0, /* handle to class icon */
    LoadCursor(NULL, IDC_ARROW), /* handle to class cursor */
    hbrush, /* handle to class background brush */
    0, /* resource name of the class menu */
    L"OpenGLPanelClass"/* class-name | pointer to null-terminated string */
  };

  RegisterClassW(&rwc);
}
