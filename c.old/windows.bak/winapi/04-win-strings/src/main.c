#include <windows.h>
#include <shlwapi.h>
#include <wchar.h>
#include <stdbool.h>

#pragma comment(lib, "shlwapi.lib")

int wmain(void)
{
  wchar_t string[] = L"William";

  wprintf(L"The length of '%s' is %ld characters.\n", string, wcslen(string));

  wchar_t buffer[20];
  wcscpy(buffer, L"William");
  wcscat(buffer, L" Valhakis.");

  wprintf(L"Buffer: '%s'.\n", buffer);

  if (wcscmp(L"William", L"William") == 0)
  {
    wprintf(L"William is equal to William.\n");
  } else {
    wprintf(L"William is not equal to William.\n");
  }

  char *name1 = "William";
  wchar_t *name2 = L"William";

  wprintf(L"Name1 length: %d.\n", lstrlenA(name1));
  wprintf(L"Name2 length: %d.\n", lstrlenW(name2));

  /* removes 'trim' characters from 'sample' */
  wchar_t sample[] = L"23W32i2ll25i1a6m";
  wchar_t trim[] = L"0123456789";

  // bool r = StrTrimW(sample, trim);
  bool r = false;

  if (r == true)
  {
    wprintf(L"Some characters have been trimmed.\n", buffer);
  } else {
    wprintf(L"No characters were trimmed.\n", buffer);
  }

  wprintf(L"Trimmed string: %ls.\n", buffer);

  return 0;
}
