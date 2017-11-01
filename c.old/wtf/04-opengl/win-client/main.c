#include <winsock2.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>
#include <string.h>

#include "world.h"

#define BUF_LEN 512
char buffer[BUF_LEN];

struct {
  int port;
  char host[100];
  struct sockaddr_in addr;
} server;

struct {
  SOCKET socket;
} client;

WSADATA wsa;

int main()
{
  setbuf(stdout, NULL);
  int open = true;

  server.port = 5000;
  strcpy(server.host, "192.168.0.10");

  int check = WSAStartup(MAKEWORD(2, 2), &wsa);

  if (check != 0)
  {
    return error("startup %d", WSAGetLastError());
  }

  client.socket = socket(AF_INET, SOCK_STREAM, 0);

  if (client.socket == INVALID_SOCKET)
  {
    return error("client socket: %d", WSAGetLastError());
  }

  server.addr.sin_addr.s_addr = inet_addr(server.host);
  server.addr.sin_family = AF_INET;
  server.addr.sin_port = htons(server.port);

  check = connect(client.socket, (struct sockaddr *)&server.addr, sizeof(server.addr));

  if (check < 0)
  {
    return error("connect");
  }

  while (open)
  {
    printf("to server: ");
    fgets(buffer, BUF_LEN, stdin);
    buffer[strlen(buffer)-1] = '\0';

    if (strcmp(buffer, "exit") == 0) {
      open = false;
    }

    // sprintf(buffer, "message from client");
    check = send(client.socket, buffer, strlen(buffer), 0);

    if (check < 0)
    {
      return error("send");
    }

    check = recv(client.socket, buffer, BUF_LEN -1, 0);
    buffer[check] = '\0';

    if (check == SOCKET_ERROR)
    {
      return error("recv");
    }

    printf("server: %s.\n", buffer);
  }

  closesocket(client.socket);
  WSACleanup();

  return 0;
}
