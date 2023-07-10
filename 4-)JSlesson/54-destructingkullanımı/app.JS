//!Destructing Kullanımı

let langs = ["C#", "C++", "JavaScript", "Python"];

let lang1, lang2, lang3, lang4;

// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2]; //böyle tanılanabilir
// lang4 = langs[3];

[lang1, lang2, lang3, lang4] = langs; //veyta destructing yapılır böyle tanımlanır.

console.log(lang1, lang2, lang3, lang4);





const calcul = (a,b) => {
    const plus = a+b;
    const subtrac = a-b;
    const multip = a*b;
    const divis = a/b;

    const array = [plus, subtrac, multip, divis]
    return array;
}

let [a,b,c,d] = calcul (10,2);

console.log(a,b,c,d);
