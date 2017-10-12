#include <windows.h>
#include <wchar.h>

#pragma comment(lib, "user32.lib")

int LockScreen()
{
  int r = LockWorkStation();

  if (r == 0)
  {
    wprintf(L"LockWorkStation() has failed %d.\n", GetLastError());
    return 1;
  }

  return 0;
}

int PrintScreenDimensions()
{
  int x = GetSystemMetrics(SM_CXSCREEN);
  int y = GetSystemMetrics(SM_CYSCREEN);
  wprintf(L"The screen size is: %dx%d.\n", x, y);

  return 0;
}

int DisplayMessageBox()
{
  MessageBoxW(NULL, L"What is happening", L"Title", MB_OK);
  return 0;
}

int PrintComputerName()
{
  wchar_t computerName[MAX_COMPUTERNAME_LENGTH + 1];
  DWORD size = sizeof(computerName) / sizeof(computerName[0]);

  int r = GetComputerNameW(computerName, &size);

  if (r == 0)
  {
    wprintf(L"Failed to get computer name %ld.\n", GetLastError());
    return 1;
  }

  wprintf(L"Computer name: %ls.\n", computerName);

  return 0;
}

int Memory()
{
  MEMORYSTATUSEX mem = {0};

  mem.dwLength = sizeof(mem);

  int r = GlobalMemoryStatusEx(&mem);

  if (r == 0)
  {
    wprintf(L"Failed to memory status %ld.\n", GetLastError());
    return 1;
  }

  wprintf(L"Memory in use: %ld percent.\n", mem.dwMemoryLoad);
  wprintf(L"Total physical memory: %lld MB.\n", mem.ullTotalPhys / (1024 * 1024));
  wprintf(L"Free physical memory: %lld MB.\n", mem.ullAvailPhys / (1024 * 1024));
  wprintf(L"Total virtual memory: %lld MB.\n", mem.ullTotalVirtual / (1024 * 1024));
  wprintf(L"Free virtual memory: %lld MB.\n", mem.ullAvailVirtual / (1024 * 1024));
}

int PrintFreeSpace()
{
  unsigned __int64 freeCall, total, free;

  int r = GetDiskFreeSpaceExW(L"C:\\", (PULARGE_INTEGER) &freeCall, (PULARGE_INTEGER)&total, (PULARGE_INTEGER) &free);

  if (r == 0)
  {
    wprintf(L"Failed to get free disk space %ld.\n", GetLastError());
    return 1;
  }

  wprintf(L"Available space to caller: %I64u GB.\n", freeCall / (1024*1024*1024));
  wprintf(L"Total space: %I64u GB.\n", total / (1024*1024*1024));
  wprintf(L"Free space on drive: %I64u GB.\n", free / (1024*1024*1024));

  return 0;
}

int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR szCmdLine, int CmdShow)
{

  // DisplayMessageBox();
  // PrintScreenDimensions();
  // LockScreen();
  // PrintComputerName();
  Memory();
  PrintFreeSpace();
  return 0;
}
