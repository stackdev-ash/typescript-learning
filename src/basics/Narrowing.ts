// many type of narrowing are their in js 
//typeof we mentioned in types file 
//Type assestion = when we want ts to strictly assume that the variable is of specific type like 
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

type book={
    name:string
}
let bookname = '{"name":"typescript language"}';
let bookobject = JSON.parse(bookname) as book;
console.log(bookobject);

// The in operator narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}

// instanceof narrowing
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
//type predicator the is word Any time isFish is called with some variable, TypeScript will narrow that variable to that specific type if the original type is compatible.
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

//Assertion function is also there in ts 

// Try catch
try {
    console.log("India won today againt New Zealand");
    
} catch (error) {
    // console.log(error.message) if i do this by putting error:any , any error dont have message then what will i do so to solve that we use instanceof to check if error belong to error or not 
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log(error);
}

// The never type =>> When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left. In those cases, TypeScript will use a never type to represent a state which shouldn’t exist.
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

function getArea(shape: Circle|Square) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

/* never is used here
If later you add another shape:
interface Triangle {
  kind: "triangle";
  base: number;
  height: number;
}
TypeScript will give an error in the default case, reminding you to handle "triangle".*/

console.log(getArea({ kind: "circle", radius: 3 }));