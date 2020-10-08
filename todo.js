const todoForm = document.querySelector(".js-todo");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODO_LS = "toDos"; 
let toDosArray = [];   //const(immutable) -> let(mutable) 으로 변경, refreshTodoarray하면서 필요해짐.

   



function delTodo(event){
    console.log(event.target.parentNode);
    const delbtn = event.target;
    const li = delbtn.parentNode;
    todoList.removeChild(li);

    const refreshTodoarray = toDosArray.filter((toDos) => {
        console.log(toDos.id, parseInt(li.id));
        return toDos.id !== parseInt(li.id);
    });

    console.log(refreshTodoarray);

    toDosArray = refreshTodoarray;

    console.log(toDosArray);
    saveTodos();

}


function saveTodos(){
    
    localStorage.setItem(TODO_LS, JSON.stringify(toDosArray));
}


function makeTodoList(text){

    const li =document.createElement("li");
    const delbtn =document.createElement("button");
    const span =document.createElement("span");
    const ID =Date.now();
    console.log(ID);
    
    delbtn.innerText="✖";  //괄호로 쓰는 오류 조심하기.
    delbtn.addEventListener("click",delTodo);
    span.innerText= text;

    li.appendChild(span);
    li.appendChild(delbtn);
    li.id = ID;
    todoList.appendChild(li);
    
   
    const toDoObj = {
        text: text,
        id: ID
    };

    toDosArray.push(toDoObj);
    saveTodos();
}

function loadToDos(){
    const loadedtoDos = localStorage.getItem(TODO_LS);
  
    if (loadedtoDos !== null){
        const parsedtoDos = JSON.parse(loadedtoDos);
        parsedtoDos.forEach(todo => {
            makeTodoList(todo.text);
        });
    }
}

function handleSubmit(event){
    event.preventDefault();
    const TodoValue = todoInput.value;
    makeTodoList(TodoValue);
    todoInput.value="";
}

function init(){
    loadToDos();
    todoForm.addEventListener("submit", handleSubmit);

};

init();