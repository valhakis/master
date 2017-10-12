switch (uMsg)
{
  case WM_SIZE: /* handle window resizing */
    {
      int width = LOWORD(lParam);
      int height = HIWORD(lParam);

      wprintf(L"size: |%d, %d|\n", width, height);
      OnSize(hwnd, (UINT)wParam, width, height);
    }
    break;
}
