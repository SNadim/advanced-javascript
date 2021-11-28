function a(b,c) {
    console.log("This is a function Call...");
    console.log(this);
    console.log(b);
    console.log(c);
}
// a(5,6);
// const b = a.bind("Hello");
// b(5,4);
// a.call("this", 5, 6);
a.apply("Hello", [3,5]);