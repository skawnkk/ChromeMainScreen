const form = document.querySelector(".js-form");
const input = form.querySelector("input");

const greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";


function saveName(nameValue){
    localStorage.setItem(USER_LS, nameValue);
}

function makeGreeting(nameValue){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText=`hello ${nameValue}`;
    saveName(nameValue);
}

function stayName(event){
    event.preventDefault();
    const nameValue = input.value;
    makeGreeting(nameValue);
}

function submitName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",stayName);
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null){
        submitName();

    } else{
        makeGreeting(currentUser);
  
    }
}

function init(){
    loadName();
}

init();