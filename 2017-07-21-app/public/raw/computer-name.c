int WINAPI wWinMain (HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow)
{
  /* get computer name */
  wchar_t computerName[MAX_COMPUTERNAME_LENGTH + 1];
  DWORD size = sizeof(computerName) / sizeof(computerName[0]);
  int check = GetComputerNameW(computerName, &size);

  if (check == 0)
  {
    wprintf(L"Failed to get computer name %ld.\n", GetLastError());
    return -1;
  }

  wprintf(L"Computer name: %ls.\n", computerName);

  return 0;
}
