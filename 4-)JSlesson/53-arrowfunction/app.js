function write () {
    console.log("Hi!");
}

write();

//ARROW FUNCTİON

const yazdir = ()=> {
    console.log("Hi!");
}

yazdir();

const listen = (firstName, lastName) => console.log("O ne ? ", firstName, lastName);
//eğer işlen tek satrdan oluşuyorsa kıvırcık parantez olmadan bu şekilde tanımlanabilir.

listen ("Araba", "Araç"); 


const speak = firstName => console.log("O ne ? ", firstName, lastName);
//eğer tek bir değişken varsa normal parantezde kaldırılabilir.
listen ("Araba", "Araç"); 


const kupAl = x =>  x*x*x;

console.log("Değer", kupAl(75));


