// Generics allow you to write reusable components that work with different types. Instead of fixing the type, we pass the type later.

// Without generics:
// function identity(num: number): number {
//   return num
// }

// With generics: Now it works for any type.

function identity<T>(value: T): T {
  return value;
}
identity<number>(5); //indentity(5) also works coz of type inference
identity<string>("hello");
identity<boolean>(true);

// Generics with Arrays
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

getFirst<number>([1, 2, 3]);
getFirst<string>(["a", "b"]);

// Multiple Generics
function pair<K, V>(key: K, value: V):[K,V] {
  return [key, value ];
}

pair<string, number>("age", 20);

// Generic Constraints Sometimes we want generics but with restrictions.

function printLength<T extends { length: number }>(item: T) {
  console.log(item.length);
}

printLength("hello"); // Allowed:
printLength([1, 2, 3]); // Allowed:

// printLength(10) Not allowed Because numbers don't have length.

// Generics with Interfaces
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = {
  value: 10,
};

const stringBox: Box<string> = {
  value: "hello",
};
