//OOP

class Insan { //sınıf
    
    /*
        1-Özellikler
        2-Yapıcı metot
        3-function
    */
    constructor(isim, soyisim, yas, maas) { //yapıcı metot
        console.log("Yapıcı metot çalıştı");
        this.sim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }

    bilgileriGoster() {
        console.log(
        `isim: ${this.isim} 
        Soyisim: ${this.soyisim} 
        Yaş: ${this.yas} 
        Maaş: ${this.maas}`
        )
    }

}

//Nesne oluşturmak
const insan1 = new Insan("Fırat", "A.", "21", "8500");
insan1.bilgileriGoster();





