#include <windows.h>
#include <stdio.h>

const int ESCAPE = 27;

LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam) ;
void RegisterDialogClass(HWND hwnd);
LRESULT CALLBACK DialogProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam);
void CreateDialogBox(HWND hwnd);

struct {
  HINSTANCE hInstance;
} global;

int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow) 
{
  setbuf(stdout, NULL);

  MSG  msg;    
  HWND hwnd;
  WNDCLASSW wc;

  wc.style         = CS_HREDRAW | CS_VREDRAW;
  wc.cbClsExtra    = 0;
  wc.cbWndExtra    = 0;
  wc.lpszClassName = L"Window";
  wc.hInstance     = hInstance;
  wc.hbrBackground = GetSysColorBrush(COLOR_3DFACE);
  wc.lpszMenuName  = NULL;
  wc.lpfnWndProc   = WndProc;
  wc.hCursor       = LoadCursor(NULL, IDC_ARROW);
  wc.hIcon         = LoadIcon(NULL, IDI_APPLICATION);

  RegisterClassW(&wc);
  hwnd = CreateWindowW(wc.lpszClassName, L"Window", WS_OVERLAPPEDWINDOW | WS_VISIBLE, 100, 100, 350, 250, NULL, NULL, hInstance, NULL);  

  global.hInstance = hInstance;

  ShowWindow(hwnd, nCmdShow);
  UpdateWindow(hwnd);

  while (GetMessage(&msg, NULL, 0, 0)) {
    TranslateMessage(&msg);
    DispatchMessage(&msg);
  }

  return (int) msg.wParam;
}

// CreateWindowW(lpClassName, lpWindowName, dwStyle, x, y, nWidth, nHeight, hWndParent, hMenu, hInstance, lpParam);
// SetPixel(hdc, x, y, color);

LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam) 
{

  switch(msg) {

    case WM_CREATE:
      RegisterDialogClass(hwnd);
      // HWND hwndButton = CreateWindow(L"button", L"OK", WS_TABSTOP|WS_VISIBLE|WS_CHILD|WS_DEPUSHBUTTON, 10, 10, 100, 100, hwnd, NULL, (HINSTANCE)GetWindowLong(hwnd), NULL);
      // CreateWindowW(L"button", L"Show Dialog", WS_VISIBLE|WS_CHILD, 0, 0, 100, 25, hwnd, (HMENU) 1, NULL, NULL);
      // CreateWindowW(L"static", L"okei", WS_CHILD|WS_VISIBLE, 0, 25, 100, 25, hwnd, (HMENU) 1, NULL, NULL);
      break;
    case WM_COMMAND:
      CreateDialogBox(hwnd);
      break;
    case WM_DESTROY:
      PostQuitMessage(0);
      break;
    case WM_KEYDOWN:
      if (wParam == ESCAPE) 
      {
        PostQuitMessage(0);
      }
      break;
    default: break;
  }

  return DefWindowProcW(hwnd, msg, wParam, lParam);
}

void RegisterDialogClass(HWND hwnd)
{
  WNDCLASSEXW wc = {0};
  wc.cbSize           = sizeof(WNDCLASSEXW);
  wc.lpfnWndProc      = (WNDPROC) DialogProc;
  wc.hInstance        = global.hInstance;
  wc.hbrBackground    = GetSysColorBrush(COLOR_3DFACE);
  wc.lpszClassName    = L"DialogClass";
  RegisterClassExW(&wc);
}

LRESULT CALLBACK DialogProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam)
{
  switch(msg) {

    case WM_CREATE:
      CreateWindowW(L"button", L"Ok",    
          WS_VISIBLE | WS_CHILD ,
          50, 50, 80, 25, hwnd, (HMENU) 1, NULL, NULL);  
      break;

    case WM_COMMAND:
      DestroyWindow(hwnd);
      break;

    case WM_CLOSE:
      DestroyWindow(hwnd);
      break;

  }

  return (DefWindowProcW(hwnd, msg, wParam, lParam));
}

void CreateDialogBox(HWND hwnd) 
{
  CreateWindowExW(WS_EX_DLGMODALFRAME | WS_EX_TOPMOST,  L"DialogClass", L"Dialog Box", WS_VISIBLE | WS_SYSMENU | WS_CAPTION , 100, 100, 200, 150, NULL, NULL, global.hInstance,  NULL);
}
