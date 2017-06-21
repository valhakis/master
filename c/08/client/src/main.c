#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <valhakis.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <netinet/in.h>
#include <netdb.h>

int main(int argc, char *argv[]) 
{
  const char *hostname = "localhost";
  int sockfd, portno = 5000;
  struct sockaddr_in serv_addr;
  struct hostent *server;
  char buffer[512];

  if ((sockfd = socket(AF_INET, SOCK_STREAM, 0)) < 0)
  {
    ValErr("Failed to open socket.\n");
    return -1;
  }

  if (setsockopt(sockfd, SOL_SOCKET, SO_REUSEADDR, &(int){1}, sizeof(int)) < 0)
  {
    ValErr("Failed to setsockopt(SO_REUSEADDR).\n");
    return -1;
  }

  if ((server = gethostbyname(hostname)) == NULL)
  {
    ValErr("No such host '%s'.\n", hostname);
    return -1;
  }
  bzero((char *)&serv_addr, sizeof(serv_addr));
  serv_addr.sin_family = AF_INET;
  bcopy((char *)server->h_addr, (char *)&serv_addr.sin_addr.s_addr, server->h_length);
  serv_addr.sin_port = htons(portno);

  if (connect(sockfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0)
  {
    ValErr("Failed to connect.\n");
    return -1;
  }

  printf("Message to send: ");
  fgets(buffer, 512, stdin);
  buffer[strlen(buffer) - 1] = '\0';

  if (strcmp(buffer, "color") == 0)
  {
    if (write(sockfd, buffer, strlen(buffer)) < 0)
    {
      ValErr("Failed to write.\n");
      return -1;
    }
    float color[3];
    if (read(sockfd, color, sizeof(color)) < 0)
    {
      ValErr("Failed to read.\n");
      return -1;
    }

    printf("Server sent a color: [%.2f, %.2f, %.2f].\n", color[0], color[1], color[2]);
  } else {
    if (write(sockfd, buffer, strlen(buffer)) < 0)
    {
      ValErr("Failed to write.\n");
      return -1;
    }
    bzero(buffer, 512);
    if (read(sockfd, buffer, 512) < 0)
    {
      ValErr("Failed to read.\n");
      return -1;
    }

    printf("Server sent: %s.\n", buffer);
  }

  close(sockfd);
  return 0;
}

