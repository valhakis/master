#include <app/window.h>

static HBITMAP hBitmap;
static HWND hsti;

#if 1 == 0
struct RECT {
	LONG left;
	LONG top;
	LONG right;
	LONG bottom;
};
#endif

void ImageLoad(HWND hwnd)
{
	hBitmap = LoadImageW(NULL, L"C:\\image.bmp", IMAGE_BITMAP, 0, 0, LR_LOADFROMFILE);

	hsti = CreateWindowW(L"Static", L"", WS_CHILD|WS_VISIBLE|SS_BITMAP, 5, 5, 50, 50, hwnd, (HMENU) 1, NULL, NULL);

	SendMessage(hsti, STM_SETIMAGE, (WPARAM) IMAGE_BITMAP, (LPARAM) hBitmap);
}
