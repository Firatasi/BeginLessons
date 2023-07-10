//DİZİNİN METOTLARI

/*
PUSH     : dizinin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner.
UNSHIFT  : dizinin başına eleman ekler, eleman sayısını geriye döner.

POP      : dizinin sonundan eleman siler, silinen elemanı döner.
SHİFT    : dizinin başından eleman siler, eleman sayısını döner.

SPLİCE(İNDEX.İNCDEX): eleman eklemek ve silmek için kullanılır.

TOSTRING : diziyi stringe çevirebiliriz.
JOIN     : diziyi stringe çevirir. Farkı ise araya eleman ekleyebiliriz.

CONCAT   : dizileri birleştirmek için kullanılır.
SLICE    : diziyi istenilen yerden bölüp yeni bir dizi olşturur.
LENGTH   : dizinin uzunluğunu verir.
REVERSE  : dizinin elemanlarını ters çevirmek.
SPLİT    : belirli bir ifadeye göre bölüp diziye çevirmek.
INDEXOF  : elemanın index numarasını verir.
INCLUDES : verilen eleanı içeriyor mu ona bakar true veya false döner.


*/

let cars = ["bmw", "honda", "mercedes", "porsche", "astonmartin"]
let computer = ["apple", "huawei", "nokia", "xaomi"]

//!push metot
cars.push("opel");
console.log(cars);
console.log(cars.length);

//!unshift metot
cars.unshift("maserati");
console.log(cars);

//!pop metot
cars.pop();
console.log(cars);

//!shift metot
cars.shift(cars);
console.log(cars);

//!splice metot
console.log(cars);
cars.splice(0,0,"cbr"); //herhangi bir eleman silmeden dizinin başına cbr elemanını ekler. İlk değer dizinin kaçıncı elemanından sonra gelmesini sağlar, İkinci değer hangi dizinin silinmesine karar verir, üçüncü değer eklenmek istenen değer. 
console.log(cars);

//!tosring metot
cars.toString();
console.log(typeof cars);

//!join metot
let stringCars = cars.join("-");
console.log(stringCars);

//!contact metot
let birlesimDizi = cars.concat(computer);
console.log(birlesimDizi);


//!slice metot
console.log(cars);
let kesilenDizi = cars.slice(2,5);//ayrı bir dizi olarak yazar 2den başlayıp 5e kadar alır 5. index hariç
console.log(kesilenDizi); 

//!reverse metot
cars.reverse();
console.log(cars);

//!split metot
let names = "leao, joe, mike";
let namesArray = names.split(","); //, göre bölüp array oluşturur.
console.log(typeof namesArray);
    

//!indexof metot
let index = cars.indexOf("bmw");
console.log(index);

//!icloudes metot
let answer = cars.includes("opel"); //arrayin içinde böyle bir eleman varsa true yoksa false döner
console.log(answer);
