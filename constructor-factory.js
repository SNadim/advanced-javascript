// factory method
// function CreateHuman(name,age,gender) {
//     return {
//         name,
//         age,
//         gender
//     };
// }

function Human(name,age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    return this;
}


let a = new Human("Nadim",23,"M");
let b = new Human("Moyantee",22,"F");
console.log(a);
console.log(b);