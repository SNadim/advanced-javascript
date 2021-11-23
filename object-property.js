const student = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Manna'},
    {id: 41, name: 'Shakib Khan'},
    {id: 71, name: 'Deepjol'},

];

const names = student.map(s=>s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id > 40);
const biggerOne = student.find( s=> s.id > 40);
console.log(biggerOne);
