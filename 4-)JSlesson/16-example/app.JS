// --------BENZİN İSTASYONU--------

/*
  
    1-DİZEL  : 24,53
    2-BENZİN : 22,25
    3-LPG    : 11,1

    ALINACAK BİGİLER;
    1-YAKIT TİPİ
    2-YÜKLENECEK YAKIT LİTRESİ

*/

alert("Yakıt tipleri: 1-Dizel, 2-Benzin, 3-LPG");

let yakitTipi = prompt("Lütfen 3 yakıt tipinden birini büyük harflerle yazınız.");
let litre = Number(prompt("Lütfen yüklenecek yakıt miktarını litre cinsinden giriniz."));

let dizel = 24.55;
let benzin = 22.25;
let lpg = 11.1;

if(yakitTipi === "DİZEL") {
    console.log((dizel*litre) + "TL");
    console.log("Bizi tercih ettiğiniz için teşekkür ederiz.")
}else if(yakitTipi === "BENZİN") {
    console.log((benzin*litre) + "TL");
    console.log("Bizi tercih ettiğiniz için teşekkür ederiz.")
}else if(yakitTipi === "LPG") {
    console.log((lpg*litre) + "TL");
    console.log("Bizi tercih ettiğiniz için teşekkür ederiz.")
}else {
    alert("Lütfen Geçerli Bir Yakıt Tipi Seçin!");
}