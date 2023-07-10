//Geriye deger donduren metot tanımlamak
// bir değeri metodun dışarısına çıkarmak, taşımak için kullanılır
//bir metodu bitiren anahtar kelimedir
//void: geriye değer döndürmeyen metod anlamına gelir
let donenDeger = cube(2);
kareAl(donenDeger);


function kareAl(sayi) {
    let sonuc = sayi*sayi;
    console.log(sayi);
}

function cube(sayi) {
    let sonuc = sayi*sayi*sayi;
    return sonuc; // returnden sonra yazılan kodlara eresılmez
    //kodlar
}

