//Math Class Method

/*
1-Floor     *ondalık kesimi siler.
2-Ceil      *ondalık kesime bakmadan bir üst sayıya yuvarlar.
3-Round     *ondalık kesime göre yuvarlar.
 
4-max       *dizideki en büyük değeri döner.
5-min       *dizideki en küçük değeri döner.

6-random    *
7-abs       *mutlak değer almak için kullanılır.
8-sqrt      *karekök almak için kullanılır.
9-pow       *üssünü almak için kullanılır.

------> PI number
*/


let a = 3.15;
let b = -112;

console.log(Math.floor(a));
console.log(Math.ceil(a));

console.log(Math.math(1,2,3,4,500)); //en büyük değeri döner.
console.log(Math.math(1,2,3,4,500)); //en küçük değeri döner.


console.log(Math.abs(b)); //mutlak değere alır 12 döner.
console.log(Math.sqrt(144));// 12döner.
console.log(Math.pow(2,5));//32 2üzeri 5 demektir.


console.log(Math.PI);//pi sayısıdır.

console.log(Math.random());//0 ile 1 arasında random bir sayı döner.
//!sayı kalanlı ise
console.log(Math.floor(Math.random()*100)); //0 ile 100 arasında kalansız bir sayı verir.