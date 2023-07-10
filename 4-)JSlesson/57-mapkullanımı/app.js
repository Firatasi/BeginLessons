//Map

const map1 = new Map();

let value;

//SET
map1.set(1, "Jack");
map1.set(false,7);
map1.set([1, 2, 3], {firstName: "AS", lastName: "By"});
map1.set(true, "5");



map1.set(34, "İstanbul");
map1.set(01, "Adana");
map1.set(35, "İzmir")


//GET
console.log(map1.get(1));
console.log(map1.get(35));




//SİZE
value = map1.size;

console.log(value);