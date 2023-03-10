// Breakpoint ve Tooltip 
// tooltip ->açıklama metni 
// breakpoint ->derleyicinin adım adım çalışmasını sağlar

let x = 10;
debugger; //6. satırdan itibaren adım adım calisir
let y = 45;
let z = 1;
let a = x+y;
let b = x+y+z;
let c = x+z+y;

let sonuc = a+b+c;
console.log("Sonuç: " + sonuc);