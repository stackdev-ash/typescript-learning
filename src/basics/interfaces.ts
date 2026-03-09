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

const user: User = {
  id: 1,
  name: "Ashish"
};

user.name = "Sharma";   // ✅ allowed
// user.id = 2;            // ❌ Error: Cannot assign to 'id'