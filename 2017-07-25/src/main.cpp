#include <stdio.h>
#include <app/window.h>

int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow)
{
	WindowInitialize(hInstance, hPrevInstance, pCmdLine, nCmdShow);

	return 0;
}
