//Local Storage Kullanımı

localStorage.setItem("ders1", "Fizik");
localStorage.setItem("ders2", "Matematik");
localStorage.setItem("ders3", "Kimya");
localStorage.setItem("ders4", "Biyoloji");

//Değeri Almak
let value = localStorage.getItem("ders1");
console.log(value);

//Değer Silmek
localStorage.removeItem(ders4);