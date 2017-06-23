#ifdef _WIN32

#include <stdio.h>
#include <stdarg.h>
#include <winsock2.h>
#include <windows.h>
// #include <ShellApi.h>
#include <stdbool.h>

const unsigned int SERVER_PORT = 5000;
const char *SERVER_IP = "192.168.0.30";
bool open = true;

// wait for 'run' and start app

void error(const char *format, ...)
{
  HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
  CONSOLE_SCREEN_BUFFER_INFO consoleInfo;
  WORD saved_attributes;

  /* Save current attributes */
  GetConsoleScreenBufferInfo(hConsole, &consoleInfo);
  saved_attributes = consoleInfo.wAttributes;
  SetConsoleTextAttribute(hConsole, FOREGROUND_RED);


  va_list args;
  fprintf(stderr, "--------------------------------------------------\n");
  fprintf(stderr, "ERROR: ");

  /* restore original attributes */
  SetConsoleTextAttribute(hConsole, saved_attributes);

  va_start(args, format);
  vfprintf(stderr, format, args);
  va_end(args);
}

void success(const char *format, ...)
{
  HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
  CONSOLE_SCREEN_BUFFER_INFO consoleInfo;
  WORD saved_attributes;

  /* Save current attributes */
  GetConsoleScreenBufferInfo(hConsole, &consoleInfo);
  saved_attributes = consoleInfo.wAttributes;
  SetConsoleTextAttribute(hConsole, FOREGROUND_GREEN);


  va_list args;
  fprintf(stdout, "--------------------------------------------------\n");
  fprintf(stdout, "SUCCESS: ");

  /* restore original attributes */
  SetConsoleTextAttribute(hConsole, saved_attributes);

  va_start(args, format);
  vfprintf(stdout, format, args);
  va_end(args);
}

int main()
{
  int ret, client_length;
  WSADATA wsa;
  SOCKET _socket, _new_socket;
  struct sockaddr_in server, client;
  char buffer[512];

  /* initialize winsocket */
  ret = WSAStartup(MAKEWORD(2,2), &wsa);

  if (ret != 0) 
  {
    error("Failed to initialize winsocket, code: %d\n", WSAGetLastError());
    return -1;
  }
  success("Websocket has been initialized.\n");

  /* create socket */
  _socket = socket(AF_INET, SOCK_STREAM, 0);

  if (_socket == INVALID_SOCKET) 
  {
    error("Socket initialization failed, code: %d.\n", WSAGetLastError());
    return -1;
  }
  success("Socket has been created.\n");

  /* prepare sockaddr_in structure */
  server.sin_family = AF_INET;
  server.sin_addr.s_addr = INADDR_ANY;
  server.sin_port = htons(SERVER_PORT);

  /* bind the socket */
  ret = bind(_socket, (struct sockaddr *)&server, sizeof(server));

  if (ret == SOCKET_ERROR) 
  {
    error("Socket binding has been failed, code: %d.\n", WSAGetLastError());
    return -1;
  }
  success("Socket had been binded.\n");

  /* listen for connections */
  listen(_socket, 3);

  /* accept connection */
  client_length = sizeof(struct sockaddr_in);

  while (open)
  {

    success("Waiting for clients to connect at %s, port: %d\n", SERVER_IP, SERVER_PORT);
    _new_socket = accept(_socket, (struct sockaddr *)&client, &client_length);

    if (_new_socket == INVALID_SOCKET)
    {
      error("Accept has been failed, code: %d.\n", WSAGetLastError());
      return -1;
    }
    success("New client has been connected.\n");

    /* read data */
    // ret = read(_new_socket, buffer, 512);
    int recv_size;
    recv_size = recv(_new_socket, buffer, 512, 0);
    if (recv_size == SOCKET_ERROR)
    {
      error("Unable to recv from socket.\n");
      return -1;
    }
    buffer[recv_size] = '\0';
    success("Received: %s.\n", buffer);

    if (strcmp(buffer, "run") == 0) 
    {
      // ShellExecuteA(GetDesktopWindow(), "open", "bin\\app.exe", NULL, NULL, SW_SHOW);
      // LPTSTR szCmdline[] = _tcsdup(TEXT("bin\\app.exe"));
      // CreateProcess(NULL, szCmdline);
      // WinExec("bin\\app.exe", ...)
      system("bin\\app.exe");
      // success("I HAVE TO RUN THE APPLICATION.\n");
    } else if (strcmp(buffer, "exit") == 0) {
      success("I HAVE TO STOP THE SOCKET SERVER.\n");
      open = false;
    }

    closesocket(_new_socket);
  }

  /* close the socket */
  closesocket(_socket);
  WSACleanup();
  return 0;
}
#endif
