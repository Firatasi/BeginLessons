/* ---------Coklu If-------

Bütün koşullara ayrı ayrı bakar ve dogru ise calısır birbirlerinden izoledir birinincalisip calismamasi digerini etkilemez


if(kosul){

}

if(kosul){

}

if(kosul){

}

ad-tckn
ad: bos birakilamaz
tckn: 11  karekterden oluşsun

*/

let ad = prompt("İsim: ");
let tckn = prompt("Tc kimlik numarası: ");

kontrolEt(ad, tckn);

function kontrolEt(ad, tckn) {
    
    if(ad!="") { //ad!="" -> isim alani bos degilse dogrudur
       
        if(tckn.length==11){

        }else {
            console.log("Lütfen 11 haneli TC kimlik numaranızı giriniz.")
        }

    }else {
        console.log("Lütfen isim alanını boş bırakmayınız! ");
    }

}

function kontrolEt2(ad, tckn) {
    
    if(ad=="") {
        console.log("Lütfen isim alanını boş bırakmayınız! ");
    }

    if(tckn.length!=11) {
        console.log("Lütfen 11 haneli TC kimlik numaranızı giriniz.")
    }
}

