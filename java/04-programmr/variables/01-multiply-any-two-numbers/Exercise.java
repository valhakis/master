package app;
import java.util.Scanner;

public class Exercise {
  Scanner scan = new Scanner(System.in);

  public void ex1() {
    int a,  b;

    System.out.print("a: ");
    a = scan.nextInt();

    System.out.print("b: ");
    b = scan.nextInt();

    System.out.print("Product: " + (a*b));
  }
}
