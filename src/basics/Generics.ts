// An interface defines the structure (shape) of an object.
interface User {
  readonly id: number; //readonly once written cant be changed
  name: string;
  age?: number; //optional
}
//we must need to follow the structure
const user: User = {
  id: 1,
  name: "Ashish",
  age: 20,
};

// functions in interface
interface Add {
  show(): void;
  additon(a: number, b: number): number;
}
const add: Add = {
  show() {
    console.log("i do adding");
  },
  additon(a, b) {
    return a + b;
  },
};
console.log(add.show());

interface movierating {
  [name: string]: number;
}

const arr: movierating = {
  pushpa: 5,
  _3idiots: 9,
};

// interface merging happens only in interface cant be done in types
//also somewhere like java , interface in ts can extend multiple interfaces in it , interface C extends A, B {}
// and as we learn in java interface to interface , class to class use extends and use implement if want to inherit interface in class
interface User1 {
  name: string;
}

interface User1 {
  age: number;
}

const user1: User1 = {
  name: "Ashish",
  age: 20,
};
