const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //#todo-form input
const toDoList = document.getElementById("todo-list");
const TODOS_KEY= "todos"

let toDos =[];// todo list 항목을 array 안에 push 한다./
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteTodo(event){
const li = event.target.parentElement;
//이곳에서 지우기 전에 아이디를 파악한다.
// li.id 와 다른 모든 투두들로 만든 리스트로 todo를 대체한다.
toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
li.remove();

saveToDos();
}
function paintToDo(newTodo){
const li = document.createElement("Li")
li.id = newTodo.id 
const span = document.createElement("span");
span.innerText = newTodo.text;
const button = document.createElement("button")
button. innerText= '❌'
button.addEventListener("click",deleteTodo)
li.appendChild(span);
li.appendChild(button);
toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
event.preventDefault();
const newTodo = toDoInput.value;//coping current value code runs from top to bottom
toDoInput.value= "";
const newToDoObj = {
    text:newTodo,
    id:Date.now(),
}
toDos.push(newToDoObj); //텍스트만 푸쉬중 이곳에 object를 에드한다.
paintToDo(newToDoObj);
saveToDos();

}

toDoForm.addEventListener("submit",handleToDoSubmit)
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos) //checking past todo
    toDos = parsedToDos;// resotred to let toDos
    parsedToDos.forEach(paintToDo);
}
//지운 아이텡을 제외한 어레이를 생성한다.
//filter 를 사용해 해결,  it works like for each, but if the element in the array is false it would generate array with out that false element.
//function identify what is true and false and filter will provide array with trues.
