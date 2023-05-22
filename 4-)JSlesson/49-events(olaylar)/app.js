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

