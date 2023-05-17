// Date Metot Kullanımı


let tarih = new Date();
console.log(tarih); //şuanki tarihi verir.

//!get
console.log(tarih.getHours()); //şuanki tarihin sadece saatini alır.
console.log(tarih.getFullYear());//şuanki tarihin sadece yılını alır.
console.log(tarih.getDate());//şuanki tarihin sadece gününü alır.
console.log(tarih.getDay());//şuanki tarihin haftanın kaçıncı günde olduğunu verir.
console.log(tarih.getMonth() + 1);//aylar sıfırdan başlar bu yüzden +1 eklenir.
console.log(tarih.toLocaleDateString());//şuanki zamanı gün ay yıl şeklinde verir.
console.log(tarih.toLocaleTimeString());//şuanki saat dakika saniyeyi verir.
console.log(tarih.toLocaleString());//şuanki zamanı gün ay yıl, saat dakika saniye olarak verir.


//TODO: set //yeni değer atanır. tarih vs değiştirir.
console.log(tarih);
tarih.setDate(25);
tarih.setMonth(7);



