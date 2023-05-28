//Tüm elementleri seçmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".list-group")[1];
const clearButton = document.querySelectorAll("#clearButton");
const filterInput = document.querySelectorAll("#todoSearch");

let todos = [];

runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded)
    secondCardBody.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener("click", allTodosEverywhere);
    filterInput.addEventListener("keyup", filter);
}


function pageLoaded() {
    checekTodosFromStorage();
    todos.forEach(function(todo) {
        console.log(todo);
        addTodoToUI(todo);
    }); 

}

function filter(e) {
    
}

function allTodosEverywhere() {
    const todoLists = document.querySelectorAll(".list-group-item"); 
    if(todoLists.length > 0) {
        todoLists.forEach(function(todo) {
            todo.remove();
        });
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "Deleted!");
    }else {
        showAlert("warning", "There must be at least one todo to delete.");
    }
    console.log(todoLists);
}

function removeTodoToUI(e) {
    if(e.target.className === "fa fa-remove") {
        const todo = e.target.parentElement.parentElement;
        todo.remove();

        removeTodoToStorage(todo.textContent);
    }
}

function removeTodoToStorage(removeTodo) {
    checekTodosFromStorage();
    todos.forEach(function(todo, index) {
        if (removeTodo === todo) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
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