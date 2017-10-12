#include <app/window.h>

static MSG msg;
static HWND hwnd;
static WNDCLASSW wc;

static LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam);

int WindowInitialize(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine,  int nCmdShow)
{
	wc.style = CS_HREDRAW|CS_VREDRAW;
	wc.lpfnWndProc = WndProc;
	wc.cbClsExtra = 0;
	wc.cbWndExtra = 0;
	wc.hInstance = hInstance;
	wc.hIcon = LoadIcon(NULL, IDI_APPLICATION);
	wc.hCursor = LoadCursor(NULL, IDC_ARROW);
	wc.hbrBackground = GetSysColorBrush(COLOR_3DFACE);
	wc.lpszMenuName = NULL;
	wc.lpszClassName = L"Window";

	RegisterClassW(&wc);

	hwnd = CreateWindowW(wc.lpszClassName, L"Window", WS_OVERLAPPEDWINDOW|WS_VISIBLE, 0, 0, 800, 600, NULL, NULL, hInstance, NULL);

	ShowWindow(hwnd, nCmdShow);
	UpdateWindow(hwnd);
}

bool WindowEvents()
{
	if (!GetMessage(&msg, NULL, 0, 0))
	{
		return false;
	}

	TranslateMessage(&msg);
	DispatchMessage(&msg);

	return true;
}

static LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam)
{
	switch (msg)
	{
		case WM_CREATE:
			ImageLoad(hwnd);
			break;


		case WM_KEYDOWN:
			if (wParam == 27) {
				PostQuitMessage(0);
			}
			break;

		case WM_DESTROY:
			PostQuitMessage(0);
			break;
	}

	return DefWindowProcW(hwnd, msg, wParam, lParam);
}
