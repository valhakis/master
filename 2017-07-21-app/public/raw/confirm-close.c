
switch (uMsg)
{
  case WM_CLOSE:

    if (MessageBox(hwnd, L"Do you really want to quit?", L"Application", MB_OKCANCEL) == IDOK) 
    {
      DestroyWindow(hwnd);
    }

    return 0;

    break;
}
