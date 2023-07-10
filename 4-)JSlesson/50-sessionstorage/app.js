//Session Storage Kullanımı

//local storage ve session storge arasındaki temel fark localde tarayıcı kapatılsa bile veriler silinmezken sessionda tarayıcı kapatıldığında veriler silinir.

//Değer ekleme session storage
sessionStorage.setItem("350", "Fırat");
sessionStorage.setItem("351", "Fırat");
sessionStorage.setItem("352", "Fırat");

//Değer silme
sessionStorage.removeItem("351", "Fırat");


//bütün değerleri silme
sessionStorage.clear();