let manush = {
    name: "Nadim",
    age: 69,
    gender: "male",
    city: 'Dhaka',
    
}

for(let item in manush) {
    console.log(`My ${item} is ${manush[item]}`);
}