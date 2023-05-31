//Spread Operatörü
let numbers = [10, 25, 50, 78]
function add (a, b, c, d) {
    console.log(a+b+c+d);
}

//!eski yöntem
// add(numbers[0], numbers[1], numbers[2], numbers[3]);
//asagıdaki ifade daha güncel ve kolaydır aynı anlama gelir.

add(...numbers);