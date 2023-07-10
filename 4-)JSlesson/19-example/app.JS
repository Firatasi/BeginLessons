/*
      SORULAR
      1-TÜRKÇE 40
      2-MATEMATİK 40
      3-SOSYAL BİLİMLER 20
      4-FEN BİLİMLERİ 20

      ------> 100 PUANI SİSTEM VERİYOR
      ------> OKUL PUANI MAX 60 VERİYOR
*/

let turkceDogru = Number(prompt("Lütfen türkçe dersindeki doğru sayısını giriniz: "));
let turkceYanlis = Number(prompt("Lütfen türkçe dersindeki yanlış sayısını giriniz: "));


let matematikDogru = Number(prompt("Lütfen matematik dersindeki doğru sayısını giriniz: "));
let matematikYanlis = Number(prompt("Lütfen matematik dersindeki yanlış sayısını giriniz: "));

let sosyalDogru = Number(prompt("Lütfen sosyal dersindeki doğru sayısını giriniz: "));
let sosyalYanlis = Number(prompt("Lütfen sosyal dersindeki yanlış sayısını giriniz: "));

let fenDogru = Number(prompt("Lütfen fen dersindeki doğru sayısını giriniz: "));
let fenYanlis = Number(prompt("Lütfen sosyal dersindeki yanlış sayısını giriniz: "));

let diplomaNotu = Number(prompt("Diploma notunuzu giriniz: "));


let turkceNet = (turkceDogru - turkceYanlis/4);
let matematikNet = (matematikDogru - matematikYanlis/4);
let sosyalNet = (sosyalDogru - sosyalYanlis/4);
let fenNet = (fenDogru - fenYanlis/4);
let diplomaNet = (diplomaNotu * 0.6);

let tytPuani = ((turkceNet*3.3) + (matematikNet*3.3) + (sosyalNet*3.4) + (fenNet*3.4) + diplomaNet + 100);

alert("TYT puanınız: " + tytPuani);
