// A class is a blueprint for creating objects.lets you group: properties (variables) methods (functions) into a single structure.

// Constructors = A constructor is a special function that runs automatically when an object is created. Used to initialize values.

class Person {
  name: string;
  age: number;

   greet() {
    console.log("Hello!");
  }

  constructor(name:string , age:number) {
    this.name = name;
    this.age=age;
    console.log(this.name, this.age);
  }
  // generally recommended to add constructor in class otherwise variable points to errors
}

const p1 = new Person("rajesh",20);
p1.name = "Ashish";
p1.age = 19;
p1.greet();

/* Access modifiers control who can access properties and methods.
public	    Anywhere
private  	Only inside the class
protected	Class + subclasses

these is a part of encapsulation which means wrapping data in a single block of code 
*/

class Car {
  public brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

const c = new Car("BMW");
console.log(c.brand);


// Private modifier
class BankAccount {
  private balance: number; // can also write #balance

  constructor(balance: number) {
    this.balance = balance;
  }

  showBalance() {
    console.log(this.balance);
  }
}
const acc = new BankAccount(5000);
acc.showBalance(); // works
// acc.balance ❌ ERROR

//inheritance means inheriting functions and varibale of parent class to child class

class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal { // this is single level inheritance
  bark() {
    console.log(this.name + " is barking");
  }
}

const d = new Dog("Tommy");
d.bark();
// d.name ❌ not accessible
/*
Modifier	SameClass  ChildClass  Outside
public	    ✅	          ✅	       ✅
private	    ✅	          ❌	       ❌
protected	✅	          ✅	       ❌ */

//Getters and Setters => A getter lets you read a private property like a normal property. A setter allows controlled modification of a private property.

class Bank {
  private _balance: number;

  constructor(balance: number) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(value: number) {
    if (value >= 0) {
      this._balance = value;
    }
  }
}

const account = new Bank(1000);
console.log(account.balance);
account.balance = 2000;
console.log(account.balance);

