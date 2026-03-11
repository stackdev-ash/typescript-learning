// 1️⃣ Arrays in TypeScript Arrays store multiple values of the same type.

// Method 1
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Ashish", "Rahul", "Aman"];

// Method 2
let nums: Array<number> = [1, 2, 3];
console.log(nums[0]); // 10 accessing element


// Array Type Safety
let num: number[] = [1, 2, 3];
numbers.push(4);   // ✅ allowed
// numbers.push("hi");❌ error


// Union Arrays Arrays can contain multiple types.
let values: (string | number)[] = [1, "hello", 3];


// Multidimensional Arrays
let matrix: number[][] = [
  [1, 2],
  [3, 4]
];

// Array of objects.
type User = {
  name: string;
  age: number;
};

let users: User[] = [
  { name: "Ashish", age: 20 },
  { name: "Rahul", age: 22 }
];

// Readonly arrays cannot be modified.
let num1: readonly number[] = [1,2,3];
// num1.push(4); // ❌ error
console.log(num1[0]); // ✅

// 3️⃣ Tuples represent fixed-length arrays with specific types at each index.
let person: [string, number];
person = ["Ashish", 20];
// Index types are fixed.
// index 0 → string , index 1 → number
// person = [20, "Ashish"];


// Optional Tuple Elements
let user: [string, number?];
user = ["Ashish"];
user = ["Ashish", 20];

let userr: [name: string, age: number];
userr = ["Ashish", 20]; // Improves readability.

let t: [string, number];
t=["Ashish", 20];
t.push(30 ,40 ,50); // allowed but bad practice