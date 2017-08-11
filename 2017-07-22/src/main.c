#include <app/window.h>

bool is_open = true;

int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine,  int nCmdShow)
{

	WindowInitialize(hInstance, hPrevInstance, pCmdLine, nCmdShow);

	while (is_open)
	{
		if (WindowEvents() == false)
		{
			is_open = false;
		}
	}

	return 0;
}
