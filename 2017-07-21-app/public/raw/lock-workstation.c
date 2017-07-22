int WINAPI wWinMain (HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow)
{
  int r = LockWorkStation();

  if (r == 0) {
    wprintf(L"Failed to lock work station.\n", GetLastError());
    return -1;
  }

  return 0;
}
