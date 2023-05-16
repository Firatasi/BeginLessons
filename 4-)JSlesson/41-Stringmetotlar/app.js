//!String Sınıfının Metotları

let lesson = "Lesson one for class.";
let date = "2002";

//charAt()       *Verilen index numarasındaki karakteri döner.
//concat()       *iki veya daha fazla stringi birleştirmek için kullanılır.
//indexof()      *Girilen karakterin index numarasını verir.
// lastindexof() *Girilen karakterin index numarasını veriri.
// toUpperCase() *Kelimelerin hepsini büyük harfe çevirir.
// toLowerCase() *kelimelerin hepsiniküçük harfle yazar.
//trim()         *space(boşluk karakterini)temizler.
//slice() *herhangi bir index aralığını kesmeyi sağlar.
// substring()   *herhangi bir iindex aralığını kesmeye yarar.
// replace()     *indexi verilen değerle değiştirir.
//split()        *verilen değere göre ayırıp dizi oluşturur.
// valoeOf()     *belirtilen objeyi primitive hale döndürür.
// startsWith()  *belirtilen karekterle mi başlıyor t veya f döner.
// endWith()     *belirtilen karekterle bitiyorsa t veya f döner.


let index = lesson.charAt(5); //n
console.log(index);


let answer = lesson.concat(date);
console.log(date);

let indexa = lesson.indexOf("o");
console.log(indexa);

let indexb = lesson.lastIndexOf("class");
console.log(indexb);


console.log(lesson.trim());


console.log(lesson.slice(7,10));//7ile10 index arasını alır. 7.8.9. yu alır.


console.log(lesson);
console.log(lesson.substring(0,5));//0ile5 arasındaki indexleri alır 5 dahil değil.


console.log(lesson);
console.log(lesson.replace("class","sinif"));//classı sinif olarak degistirir.

console.log(lesson);
let array = lesson.split(" "); //space göre bölüp dizi haline getirir
console.log(array);


console.log(lesson.valueOf);


console.log(lesson);
console.log(lesson.startsWith("M")); //belirtilen karekter ile mi başlıyor t veya f döner.


console.log(lesson);
console.log(lesson.endWith("M"));//belirtilen karekterle mi bitiyor t veya f döner.