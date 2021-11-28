function Animal(type, live) {
    this.type = type;
    this.live = live;
}
class Human extends Animal{
    constructor(name) {
        super("mammal",true);
        this.name = name;
    }
}
let nadim = new Human("Nadim");
console.log(nadim.type);
console.log(nadim.name);
console.log(nadim.live);