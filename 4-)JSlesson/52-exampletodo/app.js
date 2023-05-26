//Tüm elementleri seçmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".list-group")[1];
const clearButton = document.querySelectorAll("#clearButton");

let todos = [];

runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded)
}
function pageLoaded() {
    checekTodosFromStorage();
    todos.forEach(function(todo) {
        console.log(todo);
        addTodoToUI(todo);
    }); 

}

function addTodo(e) {
    const inputText = addInput.value.trim();
    if(inputText == null || inputText == "") {
        showAlert("warning", "Please enter a value! ")
    }else {
        //arayüze ekleme
        addTodoToUI(inputText);
        addTodoToStorage(inputText);
        showAlert("success", "Todo add.");
    }

    //storage ekleme
    e.preventDefault();//farklı bir sayfaya gitmeyi engelledik

}

function addTodoToUI(newTodo) {
   
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;
    

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";


    const i = document.createElement("i");
    i.className = "fa fa-remove"; 

    a.appendChild(i);//i anın içine girer.
    li.appendChild(a);//a li nin içine girer.
    todoList.appendChild(li);//li todolistin içine girer.

    addInput.value = "";

}

function addTodoToStorage(newTodo) {
    checekTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function checekTodosFromStorage() {
    if(localStorage.getItem("todos")===null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type, message) {

const div = document.createElement("div");
div.className = `alert alert-${type}`
div.textContent = message;

firstCardBody.appendChild(div);

setTimeout(function() {
    div.remove()
}, 1500);//1,5sn 

}
showAlert("success", "Todo add");