//! Var - Let - Const  degiskenIsmi = degiskenDegeri;
//* var ile tanimlanan her sey function scope olur
//?   let sayi = 10;
//TODO let/const: Block scope özelliğine sahiptir


function atakYap() {
    var atakYap = "Herkese Atak"; //function scope -- ram bellekte cok yer kaplar
    if(true) {
        var b=6;
        console.log(b)//! block scope olmasına ragmen var ile tanimlandigi icin funtion scope gibi davranır  
    }
    console.log(atakYap);
}
atakYap();


// var a=5;
// var a=10; 
// console.log(a);  
//? Hata vermez a yi 10 olarak yazar


//TODO Let & Const farki
//*Const(constant): sabit, degismez
//const a=10;
//a=15;
//console.log(a); constta hata verir fakat let te hata vermez en sonuncusunu yazar