const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();    //브라우저가 어떤 정보를 주는지 
                                //보여주기 위해서 추가하는 코드
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username); //greeting.innerText = `Hello  ${username}`;
                            //greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username){
    greeting.innerText = `Hello  ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    //show the greetings
    paintGreetings(savedUsername);
}

