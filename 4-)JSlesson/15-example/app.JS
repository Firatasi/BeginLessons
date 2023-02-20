//-------BEDEN KİTLE ENDEKSİ HESAPLAMA--------

let kilo = Number prompt("Kilonuzu KG Cinsinden Griniz: ");
let boy = Number prompt("Boyunuzu Metre Cinsinden Giriniz(örn:175): ");

let endeks = (kilo/boy**2);

if(endeks<=18.5) {
    console.log("İdeal Kilonun Altındasınız! ");
}

if(endeks<=24.9 && endeks>=18.5) {
    console.log("İdeal Kilodasınız! ");
}

if(endeks<=29.9 &&  endeks>=25) {
    console.log("İdeal Kilonun Üstündesiniz! ");
}

if(endeks<=39.9 && endeks>=30) {
    console.log("İdeal Kilonun Çok Üstündesiniz(OBEZ)! ");
}

if(endeks>=40) {
    console.log("İdeal Kilonun Çok Üstündesiniz(MORBİD OBEZ)! ")
}