#include <stdio.h>
#include <stdarg.h>
#include <stdbool.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <string.h>
#include <unistd.h>

#define KNRM  "\x1B[0m"
#define KRED  "\x1B[31m"
#define KGRN  "\x1B[32m"
#define KYEL  "\x1B[33m"
#define KBLU  "\x1B[34m"
#define KMAG  "\x1B[35m"
#define KCYN  "\x1B[36m"
#define KWHT  "\x1B[37m"

#define BUFSIZE 512

static bool open = true;

static int sockfd, newsockfd, clilen;
static char buffer[BUFSIZE];
static struct sockaddr_in serv_addr, cli_addr;

static int ServerSuccess(const char *format, ...);
static int ServerInfo(const char *format, ...);
static int ServerError(const char *format, ...);

// ServerError("I DON'T KNOW %d.", 10);
// ServerInfo("I DON'T KNOW %d.", 10);
// ServerSuccess("I DON'T KNOW %d.", 10);

int ServerInitialize(int portno)
{
  if ((sockfd = socket(AF_INET, SOCK_STREAM, 0)) < 0)
  {
    ServerError("Unable to open socket.");
    return -1;
  } else {
    ServerSuccess("Socket has been opened.");
  }

  bzero((char *)&serv_addr, sizeof(serv_addr));
  serv_addr.sin_family = AF_INET;
  serv_addr.sin_addr.s_addr = INADDR_ANY;
  serv_addr.sin_port = htons(portno);

  if (bind(sockfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0)
  {
    ServerError("Unable to bind socket.");
    return -1;
  } else {
    ServerSuccess("Socket has been binded.");
  }

  listen(sockfd, 5);
  clilen = sizeof(cli_addr);

  while (open)
  {
    ServerInfo("Waiting for connections.");
    newsockfd = accept(sockfd, (struct sockaddr *)&cli_addr, &clilen);

    if (newsockfd < 0)
    {
      ServerError("Unable to accept connection.");
      return -1;
    } else {
      ServerSuccess("Connection has been accepted.");
    }

    if (read(newsockfd, buffer, BUFSIZE) < 0)
    {
      ServerError("Unable to read from socket.");
    } else {
      ServerInfo("CLIENT SENT: \n%s", buffer);
    }

    close(newsockfd);
  }
  close(sockfd);
}

static int ServerError(const char *format, ...)
{
  va_list args;
  fprintf(stderr, KRED);
  fprintf(stderr, "ERROR: ");
  fprintf(stderr, KNRM);
  va_start(args, format);
  vfprintf(stderr, format, args);
  va_end(args);
  fprintf(stderr, "\n");
}

static int ServerInfo(const char *format, ...)
{
  va_list args;
  fprintf(stdout, KYEL);
  fprintf(stdout, "INFO: ");
  fprintf(stdout, KNRM);
  va_start(args, format);
  vfprintf(stdout, format, args);
  va_end(args);
  fprintf(stdout, "\n");
}

static int ServerSuccess(const char *format, ...)
{
  va_list args;
  fprintf(stdout, KGRN);
  fprintf(stdout, "SUCCESS: ");
  fprintf(stdout, KNRM);
  va_start(args, format);
  vfprintf(stdout, format, args);
  va_end(args);
  fprintf(stdout, "\n");
}
