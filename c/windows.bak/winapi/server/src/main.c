#include <winsock2.h>
#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#include <stdbool.h>
#include "inc/share.h"

void StartServer(const char *ServerIp, const unsigned int ServerPort)
{
  int client_len;
  WSADATA wsa;
  SOCKET sock, new_sock;
  struct sockaddr_in server, client;
  char buffer[512];

  /* initialize winsocket */
  if (WSAStartup(MAKEWORD(2, 2), &wsa) != 0)
    error("Unable to initialize winsocket, code: %d.\n", WSAGetLastError());
  success("Websocket has been initialized.\n");

  /* create socket */
  if ((sock = socket(AF_INET, SOCK_STREAM, 0)) == INVALID_SOCKET)
    error("Unable to create socket, code: %d.\n", WSAGetLastError());
  success("Socket has been created.\n");

  /* prepare sockaddr_in structure */
  server.sin_family = AF_INET;
  server.sin_addr.s_addr = INADDR_ANY;
  server.sin_port = htons(ServerPort);

  /* bind the socket */
  if ((bind(sock, (struct sockaddr *)&server, sizeof(server)) == SOCKET_ERROR))
      error("Socket binding has been failed, code: %d.\n", WSAGetLastError());
  success("Socket has been binded.\n");

  /* listen for connections */
  listen(sock, 3);
  success("Listening for max 3 connections.\n");

  while (true)
  {
  /* accept connection */
    client_len = sizeof(struct sockaddr_in);

    success("Waiting for client to connect at %s, port: %d.\n", ServerIp, ServerPort);
    if ((new_sock = accept(sock, (struct sockaddr*)&client, &client_len)) == INVALID_SOCKET)
      error("Unable to accept client, code: %d.\n", WSAGetLastError());
    success("Client has connected.\n");

    /* read data */
    int recv_size;
    if ((recv_size = recv(new_sock, buffer, 512, 0)) == SOCKET_ERROR)
      error("Unable to receive from client socket.\n");
    buffer[recv_size] = '\0';
    success("Received: '%s'.\n", buffer);

    char command[512];
    sprintf(command, "powershell -Command \".\\bin\\%s\"", buffer);
    success("I have to start '%s'.\n", command);

    system(command);

    closesocket(new_sock);
  }
  closesocket(sock);
  WSACleanup();
}

int main()
{
  StartServer("192.168.0.30", 5000);
  return 0;
}
