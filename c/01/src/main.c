/* SHARED HEADER FILES */
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
#include <stdlib.h>
#include <string.h>

#ifdef _WIN32

/* WINDOWS HEADER FILES */
#include <winsock2.h>
#include "inc/win.h"
//#include <Ws2tcpip.h>

#else

/* LINUX HEADER FILES */
#include <sys/socket.h>
#include <sys/types.h>
#include <netinet/in.h>
#include <netdb.h>
#include <ifaddrs.h> 
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <net/if.h>
#include <sys/ioctl.h>
#include "inc/linux.h"

#endif

#define SERVER_PORT 5000

#define FAILURE -1
#define SUCCESS 0

int Server()
{

  /* WINDOWS SERVER */
#ifdef _WIN32
  WSADATA wsa;
  SOCKET _socket, _new_socket;
  struct sockaddr_in server, client;
  int ret;

  /* initialize winsock */
  printf("Initialization of winsock.\n");
  if (WSAStartup(MAKEWORD(2, 2), &wsa) != 0) {
    printf("Failed to initialize winsock, code: %d\n", WSAGetLastError());
    return FAILURE;
  }
  printf("Winsock has been initialized.\n");

  /* create socket */
  _socket = socket(AF_INET, SOCK_STREAM, 0);

  if (_socket == INVALID_SOCKET) {
    printf("Could not create socket, code: %d\n", WSAGetLastError());
    return FAILURE;
  }
  printf("Winsock socket has been created.\n");

  /* prepare sockaddr_in structure */
  server.sin_family = AF_INET;
  server.sin_addr.s_addr = INADDR_ANY;
  server.sin_port = htons(SERVER_PORT);

  /* bind socket */
  if (bind(_socket, (struct sockaddr*)&server, sizeof(server)) == SOCKET_ERROR) {
    printf("Failed to bind socket, code: %d.\n", WSAGetLastError());
    return FAILURE;
  }
  printf("Socket has been binded.\n");

  /* listen for connections */
  listen(_socket, 3);

  /* accept connections */
  int cli_len = sizeof(struct sockaddr_in);

  printf("Waiting for connections.\n");
  _new_socket = accept(_socket, (struct sockaddr*)&client, &cli_len);

  if (_new_socket == INVALID_SOCKET) {
    printf("Failed to accept connection, code: %d\n", WSAGetLastError());
    return FAILURE;
  }
  printf("Client has been connected.\n");

  closesocket(_socket);
  WSACleanup();

  /*
     server.sin_addr.s_addr = inet_addr("localhost");
     server.sin_family = AF_INET;
     server.sin_port = htons(SERVER_PORT);
     */

  /* connect to remote server */
  /*
     if (connect(_socket, (struct sockaddr*)&server, sizeof(server)) < 0) {
     printf("Failed to connect to server.\n");
     return FAILURE;
     }
     printf("Connected to server.\n");
     */

#else /* LINUX SERVER */
  int _socket, _new_socket, ret;
  socklen_t clilen;
  struct sockaddr_in serv_addr, cli_addr; 
  _socket = socket(AF_INET, SOCK_STREAM, 0);

  if (_socket < 0) {
    puts("Unable to open socket.");
    return FAILURE;
  }
  printf("Socket has been created.\n");

  serv_addr.sin_family = AF_INET;
  serv_addr.sin_addr.s_addr = INADDR_ANY;
  serv_addr.sin_port = htons(SERVER_PORT);

  if (bind(_socket, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0) {
    printf("Failed to bind socket.\n");
    return FAILURE;
  }
  printf("Socket had been binded.\n");

  listen(_socket, 5);
  printf("Socket is listening for max 5 connections.\n");

  clilen = sizeof(cli_addr);

  const char *ip = LinGetIP("enp0s25");
  printf("Waiting for connections at %s.\n", ip);
  _new_socket = accept(_socket, (struct sockaddr *)&cli_addr, &clilen);

  if (_new_socket < 0) {
    printf("Failed to accept.\n");
    return FAILURE;
  }

  printf("Client has connected.\n");

  char buffer[512];
  bzero(buffer, 512);

  ret = read(_new_socket, buffer, 512);

  if (ret < 0) {
    printf("Failed to read from _new_socket.\n");
    return FAILURE;
  }

  printf("Message from _new_socket: %s\n", buffer);
  ret = write(_new_socket, "I am your master, bitch.", strlen("I am your master, bitch."));

  if (ret < 0) {
    printf("Failed to write to _new_socket.\n");
    return FAILURE;
  }

  close(_new_socket);
  close(_socket);

#endif

  return SUCCESS;
}

int Client()
{
  char ip[32], c;
  printf("[server IP]: ");
  scanf("%s", ip);

  /* clear scanf end */
  while ((c = getchar()) != '\n' && c != EOF) { }
  printf("IP: [%s].\n", ip);

  printf("Client function has been called.\n");
#ifdef _WIN32
  printf("Starting [winsock] client.\n");
  WSADATA wsa;
  SOCKET _socket, _new_socket;
  struct sockaddr_in server, client;
  int ret;

  /* initialize winsock */
  printf("Initialization of winsock.\n");
  if (WSAStartup(MAKEWORD(2, 2), &wsa) != 0) {
    printf("Failed to initialize winsock, code: %d\n", WSAGetLastError());
    return FAILURE;
  }
  printf("Winsock has been initialized.\n");

  /* create socket */
  _socket = socket(AF_INET, SOCK_STREAM, 0);

  if (_socket == INVALID_SOCKET) {
    printf("Could not create socket, code: %d\n", WSAGetLastError());
    return FAILURE;
  }
  printf("Winsock socket has been created.\n");

  /* server structure setup */
  server.sin_addr.s_addr = inet_addr(ip);
  server.sin_family = AF_INET;
  server.sin_port = htons(SERVER_PORT);

  /* connect to remote server */
  if (connect(_socket, (struct sockaddr*)&server, sizeof(server)) < 0) {
    printf("Failed to connect to server.\n");
    return FAILURE;
  }
  printf("Connected to server.\n");
#else
  int _socket, ret;
  struct sockaddr_in serv_addr;
  struct hostent *server;

  _socket = socket(AF_INET, SOCK_STREAM, 0);

  if (_socket < 0) {
    printf("Unable to open the socket.\n");
    return FAILURE;
  }
  printf("Socket has been created.\n");

  server = gethostbyname(ip);

  if (server == NULL) {
    printf("Unable to find host.\n");
    return FAILURE;
  }
  bzero((char*)&serv_addr, sizeof(serv_addr));
  serv_addr.sin_family = AF_INET;
  bcopy((char*)server->h_addr, (char*)&serv_addr.sin_addr.s_addr, server->h_length);
  serv_addr.sin_port = htons(SERVER_PORT);

  if (connect(_socket, (struct sockaddr*)&serv_addr, sizeof(serv_addr)) < 0) {
    printf("Unable to connect.\n");
    return FAILURE;
  }

  char buffer[512];
  bzero(buffer, 512);
  printf("[send to server] > ");
  fgets(buffer, 512, stdin);

  ret = write(_socket, buffer, strlen(buffer));

  if (ret < 0) {
    printf("Failed to write to socket.\n");
    return FAILURE;
  }

  bzero(buffer, 512);
  ret = read(_socket, buffer, 512);
  if (ret < 0) {
    printf("Failed to read from socket.\n");
    return FAILURE;
  }

  printf("[from server]: %s\n", buffer);

  close(_socket);

#endif
  return SUCCESS;
}

int main()
{
#ifdef _WIN32
  system("cls");
#else
  system("clear");
  // const char *ip = LinGetIP("enp0s25");
  // printf("IP: %s.\n", ip);
#endif
  char input[512];

  printf("[server] or [client]> ");
  fgets(input, 512, stdin);

  if (strcmp(input, "server\n") == 0) {
    int server = Server();

    printf("Server closed [%d]\n", server);
  } else if (strcmp(input, "client\n") == 0) {
    int client = Client();

    printf("Client closed [%d]\n", client);
  }

  return SUCCESS;
}
