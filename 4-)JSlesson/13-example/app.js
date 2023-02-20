// ------------DERS ORTALAMASI-----------

// VİZE1 30%, VİZE2 30%, FİNAL40%

let vize1 = Number(prompt("1. Vize Notunuz: "));
let vize2 = Number(prompt("2. Vize Notunuz: "));  //kullanıcıdan gelen değerler string döndüğü için number yazarak bunu number değerine çeviriyoruz
let final = Number(prompt("Final Notunuz: "));

if(vize1>=0 && vize1<=100){

}else {
    alert("Yanlış hesaplandı. Lütfen 0-100 arası bir sayi giriniz!");
}


if(vize2>=0 && vize2<=100){

}else {
    alert("Yanlış hesaplandı. Lütfen 0-100 arası bir sayi giriniz!");
}

if(final>=0 && final<=100){

}else {
    alert("Yanlış hesaplandı. Lütfen 0-100 arası bir sayi giriniz!");
}




let ortalama = ((vize1*0.3) + (vize2*0.3) + (final*0.4));

if(ortalama>=60) {
    alert("Tebrikler dersi geçtiniz!  Ortalamanız: " + ortalama);
}else {
    alert("Kaldınız!  Ortalamanız: " + ortalama);
}

