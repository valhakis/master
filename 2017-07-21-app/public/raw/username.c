int WINAPI wWinMain (HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow)
{
  /* username */
  wchar_t username[UNLEN+1];
  DWORD len = sizeof(username) / sizeof(wchar_t);

  int check = GetUserNameW(username, &len);

  if (check == 0) 
  {
    wprintf(L"Failed to get username %ld.\n", GetLastError());
    return -1;
  }

  wprintf(L"username: %ls.\n", username);

  return 0;
}
