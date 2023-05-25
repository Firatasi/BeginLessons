//!EVENT


function changeTitle() {
    document.querySelectorAll('.card-title')[1].textContent='ATAK'
}

//onclick="changeTitle()" htmldosyasında yazarak js ile fonksiyonu şekillendirebiliriz.



//!Mouse Eventleri

//DOMContent      sayfa bağlantısı
//load            yükleme
//click           tıklama
//dbclick         çift tıklama
//mouseover       maouse ile üzerine gelindiğinde çalışır
//mouseout        maouse etiketin dışına çıkarsa çalışır
//mouseenter      **
//mousedown       **


document.addEventListener("DOMContentLoaded",run); //Event atama şekli addevenlistener()-2 sayfa yüklendiğinde run fonksiyonunun çalışmasını sağlar.

function run() {
    alert("Page");
}


const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];

cardTitle.addEventListener("cick", runa);

function runa(e) {
    console.log(e.type);
}


document.addEventListener("dbclick",runc); 

function runc(e) {
    alert(e.type);
}

document.addEventListener("mouseover",rund); 

function rund(e) {
    console.log(e.type);
}

document.addEventListener("mouseout",rune); 

function rune(e) {
    console.log(e.type);
}

document.addEventListener("mouseenter",rund); 

function rund(e) {
    console.log(e.type);
}


// Klavye Eventleri

// keypress  harf ve sayılarda tetiklenen event türüdür

// keydown   harf,sayı ve klavyedeki diğer tuşlarıyle çalışanevent türüdür.

// keyup     klavyeden basılan tusa basmayı bıraktıgımızda çalısır



document.addEventListener("keypress",runx);

function runx(e) {
    console.log(e.type);
    //console.loog(e.key);
    //console.loog(e.keyCode);
    //console.loog(e.keywhich);
}

document.addEventListener("keydown",runy);

function runy(e) {
    console.log(e.type);
}

document.addEventListener("keyup",runz);

function runz(e) {
    console.log(e.type);
}

//!İNPUT EVENTLERİ

//focus  inputun içine girildiğinde çalışır
//blur   inputtan çıkıldığında çalışır
//copy   input kopyalandığında çalışır
//paste  inputa bir veri yapıştırıldığında çalışır
//cut    inptta kesme olursa çalışır
//select inputtaki veride seçilen yer olursa çalışır

const todo = document.querySelectorAll("#todoName");

todo.addEventListener("focus",runm);
todo.addEventListener("blur",runm);
todo.addEventListener("copy",runk);
todo.addEventListener("paste",runl);

function runm(e) {
    console.log(e.type);
}


function runk(e) {
    console.log(e.type);
}

function runl(e) {
    console.log(e.type);
}


