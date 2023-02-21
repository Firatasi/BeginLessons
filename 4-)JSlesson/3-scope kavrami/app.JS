// *Var - Let - Const


/*

*---------SCOPE(KAPSAM)--------*

=> Global Scope (en genis scop turudur-tanimlanan degisken herhangi fonksiyonun icinde tanimlanmamis ise-her yerden eresilebilir)
=> Function Scope(fonksiyonun icinde kullanılan scope turu)
=> Block Scope

*/

//var degiskenIsmi = 10;
//console.log(degiskenIsmi);


/* 

?1- Global Scope
!var a = 5; 

!if(true) {        
!console.log(a);
!}

*/

/*
!function method1() {
!   var sayi = 10;
!   console.log(sayi);   Sadece fonksiyonun icinde kullanilir
!}

!method1();
*/

function method2() {
    var a=5; //*function scope
   
    if(true) {
        var b=10; //TODO:block scope
    }

    while(true) {
        var c=7; //*block scope
    }

}





