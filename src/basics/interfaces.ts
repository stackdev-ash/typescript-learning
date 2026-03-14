/*basic recap 
1=> | is called union works like or 
2=> & called intersection works like and
3=> when both value getting is not necesarry we use ? when declaring its type*/

//there are two things to declare many types in one variable 1. type keyword 2.interface
type request={ 
    url:string,
    method:"GET" | "POST";
} 
function acceptingreq(req:request) {
    console.log(req.url);
}
function acceptingreq2(req:request) {
    console.log(req.method);
}//types are made as if many data types are repeating in function we can make one 

//interface are also same like this these are prefers more with class
interface requesting  {
    url:string,
    method:"GET" | "POST";
}
class anotherreq implements requesting {
    url: string="google.com";
    method: "GET" | "POST"="GET";
}

//also Interface → describes one structure Type → can describe unions, primitives, tuples, etc like 
interface A { //this is one structure 
  name: string;
}
//can do 
interface A1 {
  name: string,
  age:string|number
}

interface B {
  age: number;
}

type C = A | B;   // ✅ allowed
// interface C1 {A} | {B};  // ❌not allowed

//another concept is readonly = means a value cannot be changed after it is created.
interface User {
  readonly id: number;
  name: string;
}

const userr: User = {
  id: 1,
  name: "Ashish"
};

userr.name = "Sharma";   // ✅ allowed
// user.id = 2;            // ❌ Error: Cannot assign to 'id'



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
