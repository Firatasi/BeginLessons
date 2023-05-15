let productOne = {
    name : "APPLE 14 PRO MAX",
    category : "Mobil",
    price : "2500tl"
}

let productTwo = {
    name : "APPLE 13 PRO MAX",
    category : "Mobil",
    price : "2000tl"
}

let productThree = {
    name : "APPLE 12 PRO MAX",
    category : "Mobil",
    price : "1800tl"
}

let productFour = {
    name : "APPLE 14",
    category : "Mobil",
    price : "2200tl"
}

let productFive = {
    name : "APPLE 13",
    category : "Mobil",
    price : "1900tl"
}

let productSix = {
    name : "APPLE 12",
    category : "Mobil",
    price : "1550tl"
}


let Products = [productOne,productTwo,productThree,productFour,productFive,productSix];
let filteredProduct = [];
let userProductName = prompt("Ürün ismi giriniz:");


filteredProductEnter(products);
filteredProductWrite(filteredProduct);


function filteredProductEnter(products) {
    Products.forEach(function(product){
        if(product.name.toUpperCase().includes(userProductName(),0)) {
            filteredProduct.push(product);
        }
    });
}

function filteredProductWrite(products) {
    product.forEach(function(product) {
        console.log("***************************************************************");
        console.log("|" + product.name + "|" + product.price + "|" + product.category);
        console.log("***************************************************************");
    });
}