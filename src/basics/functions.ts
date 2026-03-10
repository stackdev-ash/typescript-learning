// Functions are the basic building block of any application, whether they’re local functions, imported from another module, or methods on a class

// 1. Basic Function with Types = In TypeScript we define types for parameters and return values.

function add(a: number, b: number): number {
  return a + b;
}
add(2, 3); // 5

// 2. Function Expression Function stored inside a variable.

const multiply = function(a: number, b: number): number {
  return a * b;
};
//similarly there is arrow function 
//a note functions also have type inference ts automatically detect return type

// 3. Optional Parameters = Use ? when parameter is not mandatory.

function greet(name: string, age?: number) {
  if(age) {
    return `Hello ${name}, age ${age}`;
  }
  return `Hello ${name}`;
}

greet("Ashish");
greet("Ashish", 20);

// 4. Default Parameters = Provide default value.

function greeting(name: string = "Guest") {
  return "Hello " + name;
}

greeting(); // Hello Guest
greeting("Ashish");

//function can also be declared in type keyword => type MathOperation = (a: number, b: number) => number;

// 5. Void Return Type = Used when function does not return anything.

function logMessage(message: string): void {
  console.log(message);
}

// 6. Async Functions Return Promise.

async function fetchUser(): Promise<string> {
  return "Ashish";
}

// 7. Generic Functions (Important) => Allows functions to work with multiple types.

function identity<T>(value: T): T {
  return value;
}

identity<number>(10);
identity<string>("hello");

// Or auto inference

identity(10);
identity("hello");

//another example for generic func
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

//more about function we will get to know in classes like using this keyword and function overloading