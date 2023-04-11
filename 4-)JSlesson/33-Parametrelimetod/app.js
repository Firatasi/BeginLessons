//Parametreli metod tanımlamak

function yazdir(isim, soyisim) {   //PARAMETRELİ METOD parantezin içine birseyler yazılırsa parametreli metod olur
    console.log(isim+ "" + soyisim);
}

function atak() { //parametresiz metod

}

yazdir("Fırat", "A.");

function cube(sayi) {
    console.log(sayi*sayi*sayi);
}

sayi(2);
sayi(9);

//metodlar kodu bir kere yazıp birden fazla yerde ihtiyaca gore kullanılması ıcın tasaarlanmıstır

//!

let yas = Number(prompt("Yaşınızı Giriniz: "));

denetim(yas);

function denetim(Age) {
    if(yas>=18) {
        alert("Ehliyet Alabilirsiniz.");
    }else {
        alert("18 Yaşından Küçük Olduğunuz İçin Ehliyet Alamazsınız.")
    }
}

//!

