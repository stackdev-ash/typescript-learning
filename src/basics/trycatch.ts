//Type assestion = when we want ts to strictly assume that the variable is of specific type like 
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

type book={
    name:string
}
let bookname = '{"name":"typescript language"}';
let bookobject = JSON.parse(bookname) as book;
console.log(bookobject);

// Try catch
