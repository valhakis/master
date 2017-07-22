#ifndef UNICODE
#define UNICODE
#endif

#include <windows.h>

LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam);

int WINAPI wWinMain (HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow)
{

  /* register window class */
  const wchar_t EXAMPLE[] = L"Example Window Class";

  WNDCLASS wc = {};

  wc.lpfnWndProc = WindowProc;
  wc.hInstance = hInstance;
  wc.lpszClassName = EXAMPLE;

  RegisterClass(&wc);

  /* create window */
  HWND hwnd = CreateWindowEx(
      0,                      /* optional window styles */
      EXAMPLE,                /* window class */
      L"Learn Windows Api",   /* window text */
      WS_OVERLAPPEDWINDOW,    /* window style */

      /* size and position */
      CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT,

      NULL,       /* parent window */
      NULL,       /* menu */
      hInstance,  /* Instance handle */
      NULL        /* additional application data */
      );

  if (hwnd == NULL)
  {
    return 0;
  }

  ShowWindow(hwnd, nCmdShow);

  /* run the message loop */

  MSG msg = { };

  while (GetMessage(&msg, NULL, 0, 0))
  {
    TranslateMessage(&msg);
    DispatchMessage(&msg);
  }

  return 0;
}

LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam)
{
  switch (uMsg)
  {
    case WM_DESTROY:
      PostQuitMessage(0);
      return 0;

    case WM_PAINT:
      {
        PAINTSTRUCT ps;
        HDC hdc = BeginPaint(hwnd, &ps);
        FillRect(hdc, &ps.rcPaint, (HBRUSH) (COLOR_WINDOW+1));
        EndPaint(hwnd, &ps);
      }
      return 0;
  }

  return DefWindowProc(hwnd, uMsg, wParam, lParam);
}
