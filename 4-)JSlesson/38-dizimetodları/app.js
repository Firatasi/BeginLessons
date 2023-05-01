//DİZİNİN METOTLARI

/*
PUSH     : dizinin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner.
UNSHIFT  : dizinin başına eleman ekler, eleman sayısını geriye döner.

POP      : dizinin sonundan eleman siler, eleman sayısını döner.
SHİFT    : dizinin başından eleman siler, eleman sayısını döner.

SPLİCE(İNDEX.İNCDEX): eleman eklemek ve silmek için kullanılır.

TOSTRING : diziyi stringe çevirebiliriz.
JOIN     : diziyi stringe çevirir. Farkı ise araya eleman ekleyebiliriz.

CONCAT   : dizileri irleştirmek için kullanılır.
SLICE    : diziyi istenilen yerden bölüp yeni bir dizi olşturur.
LENGTH   : dizinin uzunluğunu verir.
REVERSE  : dizinin elemanlarını ters çevirmek.
SPLİT    : belirli bir ifadeye göre bölüp diziye çevirmek.
INDEXOF  : elemanın index numarasını verir.
INCLUDES : verilen eleanı içeriyor mu ona bakar.


*/

let cars = ["bmw", "honda", "mercedes", "porsche", "astonmartin"]

cars.push("opel");
console.log(cars)
console.log(cars.length);