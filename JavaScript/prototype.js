function F() { }

F.prototype.x = 1;


let a = new F();

F.prototype = {
    x: 10,
    y: 20
}


let b = new F();

console.log(a);
console.log(b);
