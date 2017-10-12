int WINAPI wWinMain (HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow)
{

  wchar_t buffer[MAX_PATH];

  DWORD check;

  check = GetCurrentDirectoryW(MAX_PATH, buffer);

  if (check == 0)
  {
    wprintf(L"Failed to get directory. %ld\n", GetLastError());
    return -1;
  }

  if (check > MAX_PATH)
  {
    wprintf(L"Buffer is too small; needs %d characters.\n", check);
    return -1;
  }

  wprintf(L"Current directory is %ls.\n", buffer);

  printf("Press ENTER key to Continue\n");  
  getchar(); 

  return 0;
}
