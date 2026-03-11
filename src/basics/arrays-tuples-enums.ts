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