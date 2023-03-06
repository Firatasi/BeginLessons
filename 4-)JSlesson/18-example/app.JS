/*
1-bakiye sorgulama
2-para çekme
3-para yatırma
4-çıkış
*/

let bakiye = 1000;
let metin = "1-Bakiye görüntüleme \n2-Para çekme \n3-Para yatırma \n4-Çıkış \n Lütfen bir değer seçiniz!";
let secim = prompt(metin);
switch(secim) {
    
    case "1":
        alert("Bakiyeniz: " + bakiye);
    break;
    
    case "2":
        let cekilecekTutar = Number(prompt("Çekilecek olan miktarı giriniz: "));
        if(cekilecekTutar<bakiye) {
            //başarılı
        }else {
            alert("Bakiyeniz yetersiz.");
        }
        alert("Çekilen tutar: " + cekilecekTutar)
    break;

    case "3":
        let yatirilacakPara = Number(prompt("Yatırılacak Para: "));
        let yeniBakiye = (bakiye+yatirilacakPara);
        alert("Yeni bakiyeniz: " + yeniBakiye);
    break;

    case "4":
        alert("Güvenli bir şekilde çıkış yaptınız.");
    break;

    default:
        alert("LÜTFEN 1 İLE 4 ARASINDA BİR SAYI GİRİNİZ.")
}