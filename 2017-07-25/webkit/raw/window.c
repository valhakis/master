#include <app/window.h>

static MSG msg;
static HWND hwnd;

LRESULT CALLBACK WndProc(
		HWND hwnd, /* handle to the window */
		UINT msg, /* list for system-provided messages */
		WPARAM wParam, /* additional message information */
		LPARAM lParam /* additional message information */
		);

int WindowInitialize(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow)
{
	WNDCLASSW wc = {
		CS_HREDRAW|CS_VREDRAW, /* style | whenever there is movement adjust to size */
		WndProc, /* pointer to window procedure */
		/* we do not use additional bytes */
		0, /* number of extra bytes to allocate after window-class structure */
		0, /* number of extra bytes to allocate after window instance */
		hInstance, /* a handle to instance that contains window procedure */
		LoadIcon(NULL, IDI_APPLICATION), /* handle to class icon */
		LoadCursor(NULL, IDC_ARROW), /* handle to class cursor */
		/* color to paint the client area */
		GetSysColorBrush(COLOR_3DFACE), /* handle to class background brush */
		NULL, /* resource name of the class menu | we do not create menu */
		/* class name for particular window type */
		L"Window"/* pointer to null-terminated string */
	};

	RegisterClassW(&wc);

	hwnd = CreateWindowW(
			wc.lpszClassName, /* null-terminated string */
			L"Window", /* window name */
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
		DispatchMessage(&msg);
	}

	return (int) msg.wParam;
}

LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam)
{
	switch (msg) 
	{
		case WM_DESTROY:
			PostQuitMessage(0);
			break;
	}

	return DefWindowProcW(hwnd, msg, wParam, lParam);
}
