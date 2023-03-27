// switch(deger) {
//     case 1:
//         //kodlar
//         break;

//         case 2:
//         //kodlar
//         break; break komutu kosul saglanıyorsa bir sonraki case calistirmaz 

//         case 3:
//         //kodlar
//         break;

//         default: // caseler calismazsa default calisir
//          //kodlar
//          break;
// } 


let sayi = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz: ");

switch(sayi) {
    case "1": //string aldığımız için prompttan case "" seklinde veririz
        console.log("Girilern sayı 1 ");
    break;

    case "2":
        console.log("Girilen sayı 2 ");
    break;

    case "3":
        console.log("Girilen sayı 3 ");
    break;

    case "4":
        console.log("Girilen sayı 4 ");
    break;

    case "5":
        console.log("Girilen sayı 5 ");
    break;

    default:
        alert("Girilen sayı 1 ile 5 arasında olmalıdır");
    break;     
}

