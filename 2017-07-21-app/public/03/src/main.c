#ifndef UNICODE
#define UNICODE
#endif

#define WM_LBUTTONDOWN 0x0201

#include <lmcons.h>
#include <windows.h>
#include <tchar.h>
#include <wchar.h>
#include <shobjidl.h>

LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam);
void OnSize(HWND hwnd, UINT flag, int width, int height);

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
    case WM_CREATE:
      {
        /* create button */
        HWND hwndButton = CreateWindow(
            L"button", /* predefined class */
            L"OK", /* button text */
            WS_TABSTOP|WS_VISIBLE|WS_CHILD|BS_DEFPUSHBUTTON, /* styles */
            10, /* x position */
            10, /* y position */
            100, /* button width */
            100, /* button height */
            hwnd, /* parent window */
            NULL, /* no menu */
            (HINSTANCE)GetWindowLong(hwnd, GWL_HINSTANCE),
            NULL /* pointer not needed */
            );
      }
      break;

    case WM_CLOSE:
      if (MessageBox(hwnd, L"Do you really want to quit?", L"Application", MB_OKCANCEL) == IDOK) 
      {
        DestroyWindow(hwnd);
      }
      return 0;
      break;

    case WM_SIZE: /* handle window resizing */
      {
        int width = LOWORD(lParam);
        int height = HIWORD(lParam);

        wprintf(L"size: |%d, %d|\n", width, height);
        OnSize(hwnd, (UINT)wParam, width, height);
      }
      break;

    case WM_DESTROY:
      PostQuitMessage(0);
      return 0;

    case WM_PAINT:
      {
        PAINTSTRUCT ps;
        HDC hdc = BeginPaint(hwnd, &ps);

        /* all painting occurs here, between BeginPaint and EndPaint */
        TCHAR message[] = L"Lord of the Rings";

        FillRect(hdc, &ps.rcPaint, (HBRUSH) (COLOR_WINDOW+1));
        TextOut(hdc, 200, 200, message, ARRAYSIZE(message));

        EndPaint(hwnd, &ps);
      }
      return 0;
      break;
    case WM_COMMAND:
      break;
  }

  return DefWindowProc(hwnd, uMsg, wParam, lParam);
}

void OnSize(HWND hwnd, UINT flag, int width, int height)
{

}
