//js kullanarak html elementleri üzerinde çalışmak

const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const card = document.getElementsByClassName(".card");

let value;


//! başlıktan küçük başlıklara erişilirken
value = todoList;
value = todoList.children[0];





value = Array.from(todoList.children);//veriyi array yani diziye çevirir.

value.forEach(function(todo){
    console.log(todo.textContent);
});





//!küçük başlıklardan büyük başlığa erişmek
value = todo;

value = todo.parentElement.parentElement;



console.log(value);



//!aynı başlıklar arasında çalışmak
value = todo;
value = todo.nextElementSibling;


console.log(value);


