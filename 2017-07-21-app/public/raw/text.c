#include <tchar.h>

// -lgdi32

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
