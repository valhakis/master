package app;

import app.Exercise;
import app.Task;

import java.util.Scanner;

public class App {
  public Task task = new Task();
  public Scanner scan = new Scanner(System.in);
  public boolean open = true;
  public Exercise ex = new Exercise();
  public Challenge challenge = new Challenge();

  public void run() {
    while (open) {
      System.out.println("==============================");
      System.out.println("=========APPLICATION==========");
      System.out.println("==============================");

      System.out.println("1. Even or odd.");
      System.out.println("2. Multiply any two numbers.");
      System.out.println("3. Declaring Variables.");
      System.out.println("4. Variable Max Values.");
      System.out.println("5. Variable knowledge.");
      System.out.println("6. Prime number.");
      System.out.println("7. Name, Age, and Salary.");
      System.out.println("8. Area of Triangle.");

      System.out.print("in: ");
      int in = scan.nextInt();

      System.out.println("==============================");
      System.out.println("=========TASK="+in+"===============");
      System.out.println("==============================");

      switch (in) {
        case 0: 
          open = false; 
          break;
        case 1:
          task.evenOrOdd();
          break;
        case 2:
          task.multiAnyTwo();
          break;
        case 3:
          task.declaringVariables();
          break;
        case 4:
          task.variableMaxValues();
          break;
        case 5:
          task.variableKnowledge();
          break;
        case 6:
          task.primeNumber();
          break;
        case 7:
          task.nameAgeSalary();
          break;
        case 8:
          task.areaOfTriangle();
          break;
      }

      open = false;
    }
  }

  public static void main(String args[]) {
    App app = new App();

    app.run();
  }
}
