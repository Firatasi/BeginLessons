//faktoriyel

let sayi = Number(prompt("Sayı giriniz."));
let carpim=1;

for(let i=1; i<=sayi; i++) {
    carpim=carpim*i;
}
alert("sonuç :" + carpim);