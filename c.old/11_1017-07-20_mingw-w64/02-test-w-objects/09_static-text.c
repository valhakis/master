#include <windows.h>
LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam);

int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR lpCmdLine, int nCmdShow)
{
  MSG msg;
  WNDCLASSW wc = {0};

  wc.lpszClassName = L"Window";
  wc.hInstance = hInstance;
  wc.hbrBackground = GetSysColorBrush(COLOR_3DFACE);
  wc.lpfnWndProc = WndProc;
  wc.hCursor = LoadCursor(0, IDC_ARROW);

  RegisterClassW(&wc);
  CreateWindowW(wc.lpszClassName, L"Window", WS_OVERLAPPEDWINDOW|WS_VISIBLE, 0, 0, 800, 600, 0, 0, hInstance, 0);

  while (GetMessage(&msg, NULL, 0, 0))
  {
    TranslateMessage(&msg);
    DispatchMessage(&msg);
  }

  return (int) msg.wParam;
}

LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam)
{
  static wchar_t *text = L"this is text\nthis is text\nthis is text\n";

  switch (msg) 
  {
    case WM_CREATE:
      CreateWindowW(L"Text", text, WS_CHILD|WS_VISIBLE|SS_LEFT, 20, 20, 700, 500, hwnd, (HMENU) 1, NULL, NULL);
      break;
    case WM_DESTROY:
      PostQuitMessage(0);
      break;
    default: break;
  }

  return DefWindowProcW(hwnd, msg, wParam, lParam);
}
