// Type anotation and inference = inference is no need to tell type with: ,anotation when declared with : 

// inference 
let usename1 = 'genwin';

/*typescript also have type called "any" like auto in c++ , in any The compiler automatically infers the type. Using `any` disables all further type checking, and it is assumednyou know the environment better than TypeScript.🙂‍↔️😅    You usually want to avoid this, though, because any isn’t type-checked. 

we can also now use unknown keyword in any we dont need to tell type anywhere but with unknown while printing the data or using it we need to assigne its type 

example*/
let obj: any;
// None will throw error
obj.foo();
obj=[1,2,3];
obj = "100";
obj.toUpperCase();

// with unkown can declare obj.touppercase() will throw error that decalre it first so we will be using type guard like 
let oth:unknown;
if(typeof oth ==="string"){ obj.toUpperCase()}


// these are type anotation
let username: string ="genwin";
let id: number =1;
let dunb: boolean =false;

// function are also declared with these 
function getFavoriteNumber(value:number): number { // here :number tell that the value pass thorugh paramter and the returning should be number
  return 26;
}

//Return Promises
async function getFavoriteactor(): Promise<string> {
  return "arjun kapoor🙂‍↔️";
}

// The parameter's type annotation is an object type
// function obj1(pt: { movie: string , id:number }) {
function obj1(pt: { movie: string , id?:number }) { // by adding ? it wont be error if you dont pass that value 

    // if 'obj.last' wasn't provided!,, then if we tries access a it that doesn’t exist, we’ll get the value undefined rather than a runtime error
  console.log(" watched \n" , pt.movie);
  console.log("id " + pt.id);
}
obj1({ movie: "Toy story" , id:1});
obj1({ movie: "sita ramam" }); // its ok 


//union types - many types can be given to one variable
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error printId({ myID: 22342 });

/* with union we can not use property or function of both directly like if i want id.touppercase() i cant do that as id can also be number to do that we do 

common function we can use in this case slice is valid in both num and string

basically called Type narrowing*/
function printId1(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
printId1(101);
printId1("101");


// we can also pass our own annotations like 
let x: "hello"| 1 = "hello";
// OK
x = "hello";
x = 1;
// x = "howdy"; error as howdy is not assigned

/* now with this literal and union concept we can do much things but a common error example can be 
declare function handleRequest(url: string, method: "GET" | "POST"): void;
 
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method); in this method it is considering here it as string when we declare any thing in object it refers it as string 
now there are many method to solve this  like use const or use type assertion add method get as get or the best appraoch for real world example ussing 
"type or interface"  */
function handleRequest(url: string, method: "GET" | "POST"): void{
    console.log(`${url} with request type ${method}`)
};

/*interface and types are almost same just some differences like
1->for ectending we use & in type and extends keyword in interface 
2->can add new fields to an existing interface not possible in type */

type request={ // also can use interface same as this just replace type with interface
    url:string,
    method:"GET" | "POST";
}
const req:request = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
