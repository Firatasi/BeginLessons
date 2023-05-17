//? İlkel(PRİMİTİVE) Veri Türleri,değer tipli:
//*String
//*Number
//*Boolean
//*Undefined
//*Null
//*Symbol
//Değerler arası hiçbir bağ yoktur, ram belleğin steck bölümünde tutulur.


//? İlkel olmayan(REFERANS) Veri Türleri:
//*object
//*Array
//*Function
//Verilen değerlerin ramdeki tutulan yerlerine bakılır.ram belleğin hip bölümünde bulunur.

let dizi1 = [1,2,3];
let dizi2 = [1,2,3]; //Birbirlerinin aynısı olmasına rağmen eşit değildir çünkü ram bellekte kağladıkları yer aynı değildir.

if(dizi1 == dizi2) {
    console.log("Eşittir");
}else {
    console.log("Eşit değildir");
}

//! d1 --------> 123
//? d2 --------> 123

//TODO let dizi2 = dizi1 olsaydi eşit olurdu.
