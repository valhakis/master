switch (uMsg)
{
  case WM_CREATE:
    {
      /* create button */
      HWND hwndButton = CreateWindow(
          L"button", /* predefined class */
          L"OK", /* button text */
          WS_TABSTOP|WS_VISIBLE|WS_CHILD|BS_DEFPUSHBUTTON, /* styles */
          10, /* x position */
          10, /* y position */
          100, /* button width */
          100, /* button height */
          hwnd, /* parent window */
          NULL, /* no menu */
          (HINSTANCE)GetWindowLong(hwnd, GWL_HINSTANCE),
          NULL /* pointer not needed */
          );
    }
    break;
}
