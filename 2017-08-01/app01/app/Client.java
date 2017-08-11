package app;

import java.net.*;
import java.io.*;

public class Client {
  public String host = "192.168.0.2";
  public int port = 5000;

  public Socket socket;

  Client() {
    try {
      System.out.println("Client has been initialized.");

      System.out.printf("Connecting to %s on port %d.\n", host, port);

      socket = new Socket(host, port);

      System.out.printf("Connected to %s.\n", socket.getRemoteSocketAddress());
    } catch (IOException exception) {
      exception.printStackTrace();
    }
  }
}
