const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greet= document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";
function onLoginSubmit(event){
event.preventDefault();//새로고침을 막아줌
loginForm.classList.add(HIDDEN_CLASSNAME);//폼을 숨김
const username = loginInput.value;//로그인 임풋 발류를 저장
localStorage.setItem(USERNAME_KEY,username);//유저네임을 로컬 스토리지에 저장
paintGreeting(username);//그리팅 띄우기
}
function paintGreeting(username){
greet.classList.remove(HIDDEN_CLASSNAME)//그리팅 h1 띄우기
greet.innerText = `Hello ${username}`// 안에 값 넣어주기
}
const saveUsername = localStorage.getItem(USERNAME_KEY);
console.log(saveUsername)
if (saveUsername === null){
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit", onLoginSubmit);
}
else{
paintGreeting(saveUsername)
}
