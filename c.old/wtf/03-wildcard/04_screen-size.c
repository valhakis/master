#include <windows.h>
#include <wchar.h>

int wmain()
{
  int x = GetSystemMetrics(SM_CXSCREEN);
  int y = GetSystemMetrics(SM_CYSCREEN);

  wprintf(L"The screen size is %dx%d.\n", x, y);

  return 0;
}
