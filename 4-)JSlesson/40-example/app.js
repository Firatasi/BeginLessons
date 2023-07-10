let book1 ={name: "Book1", writer: "writer1", price:"2tl", shelf: "1.5.SHELF"}
let book2 ={name: "Book2", writer: "writer2", price:"3tl", shelf: "1.2.SHELF"}
let book3 ={name: "Book3", writer: "writer3", price:"3tl", shelf: "3.5.SHELF"}
let book4 ={name: "Book4", writer: "writer4", price:"4tl", shelf: "5.3.SHELF"}
let book5 ={name: "Book5", writer: "writer5", price:"5tl", shelf: "2.2.SHELF"}


let books = [book1, book2, book3, book4, book5];


let shelf11 = {code : "1.1SHELF" ,show : false }
let shelf12 = {code : "1.2SHELF" ,show : false }
let shelf13 = {code : "1.3SHELF" ,show : false }
let shelf14 = {code : "1.4SHELF" ,show : false }
let shelf15 = {code : "1.5SHELF" ,show : false }


let shelf21 = {code : "2.1SHELF" ,show : false }
let shelf22 = {code : "2.2SHELF" ,show : false }
let shelf23 = {code : "2.3SHELF" ,show : false }
let shelf24 = {code : "2.4SHELF" ,show : false }
let shelf25 = {code : "2.5SHELF" ,show : false }


let shelf31 = {code : "3.1SHELF" ,show : false }
let shelf32 = {code : "3.2SHELF" ,show : false }
let shelf33 = {code : "3.3SHELF" ,show : false }
let shelf34 = {code : "3.4SHELF" ,show : false }
let shelf35 = {code : "3.5SHELF" ,show : false }


let shelf41 = {code : "4.1SHELF" ,show : false }
let shelf42 = {code : "4.2SHELF" ,show : false }
let shelf43 = {code : "4.3SHELF" ,show : false }
let shelf44 = {code : "4.4SHELF" ,show : false }
let shelf45 = {code : "4.5SHELF" ,show : false }


let shelf51 = {code : "5.1SHELF" ,show : false }
let shelf52 = {code : "5.2SHELF" ,show : false }
let shelf53 = {code : "5.3SHELF" ,show : false }
let shelf54 = {code : "5.4SHELF" ,show : false }
let shelf55 = {code : "5.5SHELF" ,show : false }


let shelfs = [
    [shelf51,shelf52,shelf53,shelf54,shelf55],
    [shelf41,shelf42,shelf43,shelf44,shelf45],
    [shelf31,shelf32,shelf33,shelf34,shelf35],
    [shelf21,shelf22,shelf23,shelf24,shelf25],
    [shelf11,shelf12,shelf13,shelf14,shelf15],
];

function shelfMake () {
    console.clear();
    let line = "" ;
    for (let i=0; i<shelfs.length; i++) {
        for (let j=0; j<5; j++) {
            line += "|" +( shelfs[i][j].show ? shelfs[i][j].code: "****" )+ "" ;
        }
        console.log(line);
        console.log("************************");
        line = "";
    }
}

function codeFind(bookName) {
    let shelfCode = null;
    books.forEach(function(book) {
        if(book.name.toUpperCase().includes(bookName.toUpperCase(),0)) {
            shelfCode = book.shelf;
        }
        return shelfCode;
    });

    return null;
}

shelfMake();

let bookName = prompt("Lütfen bir kitap ismi giriniz.");
let shelfcode = codeFind(bookName);


if(shelfCode != null) {
    shelfShow(shelfCode);
    shelfMake();
}else {
    alert("Girdiğiniz kitap kütüphanemizde bulunmamaktadır");
}

function shelfShow(shelfCode) {
    for(let i = 0; i<shelfs.length; i++) {
        for(let j = 0; j<5; j++) {
            if(shelfs[i][j].code==shelfCode) {
                shelfs[i][j].show=true;
                break;
            }
        }
    }
}

