//break - continue

//1den 10a kadar dongu 8e gelindiğinde döngüden cık

let sayac = 1;

while(sayac<=10) {
    console.log(sayac);
    if(sayac==8) {
        break;    //8de keser ve devam etmez
    }
    sayac++;
}

// ? continue bir kere kırılmasını sağlar
//1234567 910

while(syc<=10) {
    if(syc==8){
        continue; //8i yazmam sonrasında devam eder
    }
    console.log(syc);
    syc++;
}