#include <windows.h>
#include <wchar.h>

int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR szCmdLine, int CmdShow)
{
  wchar_t buffer[100] = {0};

  int x = GetSystemMetrics(SM_CXSCREEN);
  int y = GetSystemMetrics(SM_CYSCREEN);

  wprintf(L"The screen size is %d x %d.\n", x, y);

  wsprintfW(buffer, L"%lu x %lu", x, y);
  MessageBoxW(NULL, buffer, L"Screen Size", MB_OK);

  //RESULT result = StringCchGetsW(buffer, ARRAYSIZE(buffer));   

  //if (SUCCEEDED(result)) {
    //wprintf(L"You have enetered:%ls.\n", buffer);
  //} else {
    //wprintf(L"Failed to get ur input.\n");
    //return 1;
  //}

  return 0;
}
