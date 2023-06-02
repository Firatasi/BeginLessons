//For in - For of Döngüleri


let names = ["Fırat", "Ali", "Adem", "Cem"];

// names.forEach(function(name)) {
//     console.log(names);
// }

names.forEach (name => console.log(name));

//! For in Döngüsü

//degiskenTanimlama in, diziİsmi
for (let name in names) {
    console.log(name);   //in döngüsü bir dizi üzerinde dönerken her bir elemanın indexinin verir.
}


for (let isim of isimler) {
    console.log(isim); //of döngüsü indexin değerini verir.
}

