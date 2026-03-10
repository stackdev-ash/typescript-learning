//Objects In TypeScript (and JavaScript) we usually declare objects with const because we want to prevent reassignment of the object reference
// In TypeScript (and JavaScript), an object is a data structure used to store multiple related values using key–value pairs.
const user = {
  name: "Ashish",
  age: 19,
  isStudent: true
}; // here if we cant pass types directly in object so ts infer them 
// this bts{
//     name :string,
//     age:number,
//     inStudent:true
// } and if you want to declare types of variable in object so we use type or interface 
type User = { //interface works also
  name: string;
  age: number;
  isStudent: boolean;
};

const user1: User = {
  name: "Ashish",
  age: 19,
  isStudent: true
};

// we can also use
let User2 : {
  name: string;
  age: number;
  isStudent: boolean;
};

User2 = {
  name: "Ashish",
  age: 19,
  isStudent: true
};

// Duck typing in TypeScript means that an object's type is determined by its structure (properties and methods), not by its name. also called  structural typing.
// "If it walks like a duck and quacks like a duck, it is a duck."

type cup= {size:string};
let smallcup:cup={size:"200ml"};
let bigcup={size:"200ml",material:"glass"}
smallcup=bigcup; /* this is valid as it looks at the structure bigcup is having size property which satisfies smallcup requirement anything extra can pe passed no woories but less cannot
 same example if
let smallcup:cup={size:"200ml"};
let bigcup={material:"glass"}
smallcup=bigcup; ==>>now this line will give error as basic requirement of size is not fullfilled*/


// There are TypeScript Utility Types that help you modify existing types without rewriting them
// 1=> Partial<T> => Partial makes all properties optional.
type Movie = {
  title: string;
  year: number;
  rating: number;
}

const updateMovie = (updates: Partial<Movie>) => {
  console.log("updating movie with", updates);
}

updateMovie({ rating: 9 }) // useful When updating a user, you may only send some fields.

//2=> Required<T> Required makes all properties required.
type series = {
  title?: string;
  year?: number;
  rating?: number;
}

const addseries = (series: Required<Movie>) => {
  console.log("adding movie", series);
}

addseries({
  title: "Inception",
  year: 2010,
  rating: 9
})

//3=> Pick<T, K>  Pick selects specific properties from a type.
type show = {
  title: string;
  year: number;
  rating: number;
}

const shows = (movie: Pick<show, "title" | "rating">) => {
  console.log("show preview", movie);
}

shows({
  title: "Interstellar",
  rating: 9
}) // Useful when sending limited data

// 4=> Omit<T, K> Omit removes certain properties.
type User4 = {
  name: string;
  age: number;
  email: string;
}

const publicUser = (user: Omit<User4, "email">) => {
  console.log("public user", user);
}

publicUser({
  name: "Ashish",
  age: 19
})


/* also we can try combinations of these utilty types
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  supplierEmail: string;
}
type ProductCard = Pick<Omit<Product, "supplierEmail">, "name" | "price">

const showProductCard = (product: ProductCard) => {
  console.log("product card", product);
}

showProductCard({
  name: "iPhone 15",
  price: 79999
})   here with omit we removed supplierEmail and with pick we used name and price and rest is not imp to show */