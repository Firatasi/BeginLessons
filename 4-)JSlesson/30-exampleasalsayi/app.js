//ASAL SAYI UYG

/*
2,3,5,7,11,13,17...
*/

let a = Math.floor(7.9); //ondalıklı kesimi atar
console.log(a/2);

let sayi = Number(prompt("Lütfen bir sayı giriniz: "));
let sonuc = true;
for(let i=2; i<= Math.floor(sayi/2); i++) {
    if(sayi%i==0) {
        //Asal degildir
        sonuc=false;
        break;
    }
}

if(sonuc) {
    alert(sayi+"->asaldır");
}else {
    alert(sayi+"->asal değildir");
}
