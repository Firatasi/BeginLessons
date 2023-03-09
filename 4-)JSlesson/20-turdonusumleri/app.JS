/*
        TÜR DÖNÜŞÜMLERİ
        STRİNGS, NUMBERS, BOOLEANS, UDEFİNED AND NULL.
        OBJECT, FUNCTİON
*/

let a = 5;
let b ="10";

console.log(a+b); //510 diye yazar cunku bi taraf number bi taraf string bu yuzden birlestirir.


// ! String veri tipinden number veri tipine dönüştürmek..

let c = Number(b);
console.log(a+c); // 15 olarak yazar cunku b string degerini numbera cevirdik

//TODO: veya let b = Number("10"); diyede kisa yoldan yapilabilir.

//TODO: veya let b = parseInt("10"); diyede kisa yoldan yapilabilir. fakat kalanlı sayılarda noktadan sonrasını yazmaz

//TODO: veya let b = parseFloat("10"); diyede kisa yoldan yapilabilir. sayiyi kalanlı veya kalansız komple yazar.



// ? Number tipinden string ver itipine dönüştürmek..

let x = 55;
let y = 10;
console.log(x+y);//65 oalrak yazar fakat let x = String(55); stringe çevirir ve 5510 diye yazar


//TODO: veya let x = (55).toString(); ile yapılabilir



let m = String(true); // boolean  tipini stringe çevirir

//let o = Number("B");sayi olmayan bir sey numbere donusturulemez 


let rakamlar = String([1,2,3,4]);// obje veri tipini stringe çevirir.


//let rakamlar = Number([1,2,3,4])//obje numbera çevrilemez




