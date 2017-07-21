#include <winsock2.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>

#include "world.h"

int is_open = true;

int check;

WSADATA wsa;

#define BUF_LEN 512
char buffer[BUF_LEN];

struct {
  char host[100];
  int port;
  SOCKET socket;
  struct sockaddr_in addr;
} server;

struct {
  int len;
  SOCKET socket;
  struct sockaddr_in addr;
} client;

int main(int argc, char *argv[])
{
  setbuf(stdout, NULL);

  server.port = 5000;

  // strcpy(server.host, "192.168.0.3");

  check = WSAStartup(MAKEWORD(2, 2), &wsa);

  if (check != 0)
  {
    return error("wsa startup");
  }

  server.socket = socket(AF_INET, SOCK_STREAM, 0);

  if (server.socket == INVALID_SOCKET)
  {
    return error("socket");
  }

  /*
  int enable = 1;
  check = setsockopt(server.socket, SOL_SOCKET, SO_REUSEADDR, &enable, sizeof(int));
  
  if (check < 0)
  {
    return error("set option SO_REUSEADDR");
  }
  */

  // bzero(&server.addr, sizeof(server.addr));

  server.addr.sin_family = AF_INET;
  server.addr.sin_addr.s_addr = INADDR_ANY;
  server.addr.sin_port = htons(server.port);

  check = bind(server.socket, (struct sockaddr *)&server.addr, sizeof(server.addr));

  if (check == SOCKET_ERROR) 
  {
    return error("bind");
  }

  listen(server.socket, 5);

  while (is_open)
  {
    client.len = sizeof(client.addr);
    // print("Waiting for connections at %s. [port: %d]", server.host, server.port);
    print("Waiting for connections at port: %d", server.port);
    client.socket = accept(server.socket, (struct sockaddr *)&client.addr, &client.len);

    if (client.socket == INVALID_SOCKET)
    {
      return error("accept");
    }

    //while (is_open)
    //{
    // bzero(buffer, BUF_LEN);

    check = recv(client.socket, buffer, BUF_LEN - 1, 0);
    buffer[check] = '\0';

    if (check < 0)
    {
      return error("read");
    }

    if (strcmp(buffer, "exit") == 0) {
      is_open = false;
    }

    printf("client: %s.\n", buffer);

    system(buffer);

    sprintf(buffer, "me is server");
    check = send(client.socket, buffer, strlen(buffer), 0);

    if (check < 0) 
    {
      return error("write");
    }

    // print("client disconnected");
    closesocket(client.socket);
    //}
  }

  // close(client.socket);
  // close(server.socket);
  closesocket(client.socket);
  closesocket(server.socket);
  WSACleanup();

  return 0;
}
