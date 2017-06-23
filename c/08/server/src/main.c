#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <valhakis.h>
#include <stdbool.h>

int main(int argc, char *argv[]) 
{
  bool open = true;
  int sockfd, newsockfd, clilen, portno = 5000;

  char buffer[512];

  struct sockaddr_in serv_addr, cli_addr;

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

  bzero((char *)&serv_addr, sizeof(serv_addr));
  serv_addr.sin_family = AF_INET;
  serv_addr.sin_addr.s_addr = INADDR_ANY;
  serv_addr.sin_port = htons(portno);
  if (bind(sockfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0)
  {
    ValErr("Failed to bind.\n");
    return -1;
  }
  listen(sockfd, 5);
  clilen = sizeof(cli_addr);

  while (open)
  {

    ValLog("Waiting for connections.\n");
    if ((newsockfd = accept(sockfd, (struct sockaddr *)&cli_addr, &clilen)) < 0)
    {
      ValErr("Failed to accept.\n");
      return -1;
    }
    ValLog("New connection.\n");

    bzero(buffer, 512);

    if ((read(newsockfd, buffer, 512)) < 0)
    {
      ValErr("Failed to read from socket.\n");
      return -1;
    }

    if (strcmp(buffer, "exit") == 0)
    {
      puts("I HAVE TO CLOSE, CLIENT FORCED ME TO.");

      bzero(buffer, 512);
      strcpy(buffer, "WHY DID YOU FORCE ME TO CLOSE.\n");
      if ((write(newsockfd, buffer, strlen(buffer))) < 0)
      {
        ValErr("Failed to write to socket.\n");
        return -1;
      }

      open = false;
    } else if (strcmp(buffer, "color") == 0) {
      printf("Message: %s.\n", buffer);

      float color[3] = {0.1f, 0.2f, 0.3f};
      if ((write(newsockfd, color, sizeof(color))) < 0)
      {
        ValErr("Failed to write to socket.\n");
        return -1;
      }

      /*
      strcpy(buffer, "I am your god, bitch.");
      if ((write(newsockfd, buffer, strlen(buffer))) < 0)
      {
        ValErr("Failed to write to socket.\n");
        return -1;
      }
      */
    } else {
      printf("Message: %s.\n", buffer);
      strcpy(buffer, "I am your god, bitch.");

      if ((write(newsockfd, buffer, strlen(buffer))) < 0)
      {
        ValErr("Failed to write to socket.\n");
        return -1;
      }
    }

    close(newsockfd);
  }
  close(sockfd);
  return 0;
}

