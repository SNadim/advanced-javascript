let a = {
    b: 40,
    c: "Hello World"
};

let d = Object.create(a);
d.b = 39;
console.log(d.b);
console.log(a.b);
