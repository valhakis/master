package app;

import java.util.Scanner;

public class Task {
  Scanner scan = new Scanner(System.in);

  public void evenOrOdd() {
    // input: num
    // num == even ? Even : Odd;

    int num;

    System.out.print("num: ");
    num = scan.nextInt();

    if (num % 2 == 0) {
      System.out.println("Even");
    } else {
      System.out.println("Odd");
    }
  }

  public void multiAnyTwo() {
    int a,  b;

    System.out.print("a: ");
    a = scan.nextInt();

    System.out.print("b: ");
    b = scan.nextInt();

    System.out.println("Product: " + (a*b));
  }

  public void declaringVariables() {
    // declare 3 variables whose values are 63, 45.0 and 67.675586.

    int var1 = 63;
    float var2 = 45.0f;
    double var3 = 67.675586;

    System.out.println("var1: " + var1);
    System.out.println("var2: " + var2);
    System.out.println("var3: " + var3);
  }

  public void variableMaxValues() {
    // what are the min and max values integer can take.
    System.out.println(Integer.MAX_VALUE);
    System.out.println(Integer.MIN_VALUE);
  }

  public void variableKnowledge() {
    int a = 10;
    int b = 100;

    System.out.println("The difference between " + a + " and " + b + " is " + (b - a));
  }

  public void primeNumber() {
    // - prime number is a natural number
    // - prime number can be divided, without a reminder only by itself and by 1
    // - 17 can only be divided by 17 and 1
    // - only even prime number is 2
    // - prime number is greater than 1
    // - 5 is prime number

    // in: 8

    // x=2  n=8: 8 % 2 == 0 : true
    // x=3  n=8: 8 % 3 == 0 : false
    // x=4  n=8: 8 % 4 == 0 : true
    // x=5  n=8: 8 % 5 == 0 : false
    // x=6  n=8: 8 % 6 == 0 : false
    // x=7  n=8: 8 % 7 == 0 : false

    // in: 5

    // 5 % 2 == 0 : false
    // 5 % 3 == 0 : false
    // 5 % 4 == 0 : false

    System.out.println("HAVE TO FIND OUT IF NUMBER IS PRIME OR NOT");

    System.out.print("num: ");
    int num = scan.nextInt();
    boolean is_prime = true;

    for (int i=2; i<num; i++) {
      if (num % i == 0) {
        is_prime = false;
        break;
      }
    }

    if (is_prime) {
      System.out.println("prime");
    } else {
      System.out.println("composite");
    }

  }

  public void nameAgeSalary() {
    // input: name, age, salary

    String name = null;
    int age;
    double salary;

    System.out.print("name: ");
    name = scan.nextLine();

    System.out.print("age: ");
    age = scan.nextInt();

    System.out.print("salary: ");
    salary = scan.nextDouble();

    System.out.println("name: " + name);
    System.out.println("age: " + age);
    System.out.println("salary: " + salary);
  }

  public void areaOfTriangle() {
  }
}

// MATH DIFFERENCE
// =======================================
// The result of subtracting one number from another.
// The difference between 8 and 3 is 5
