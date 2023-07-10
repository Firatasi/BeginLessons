/*
        -----------DIYALOG KUTULARI-----------
    - Alert     windows objesi icerisinde tanimlanmislardir
    - Prompt   -> kullanicidan veri almak icin kullanilir
    - Confirm 
*/

console.log(window); //windows objesi


//window.alert("atak"); // alert(); diyede yazilabilir

let isim = prompt("İsminizi Giriniz: ");  //direk prompt(); olarakta kullanılır
let yas = prompt("Yaşınızı Giriniz: "); //! kullanıcıdan alınan degerler her zaman string doner

console.log("İsminiz: " + isim)
console.log("Yaşınız: " + yas); //konsola yazar


confirm("Silmek istediğinize emin misiniz? "); //tamam-iptal




