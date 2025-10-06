
const textinput = document.getElementById("text-input");
const addbutton = document.getElementById("add-to-list-button");
const todolist = document.getElementById("to-do-list-list");


addbutton.addEventListener("click", addToList);

function addToList(){
    let raw = textinput.value.trim();
    if (raw =="") return;

    const entry = document.createElement("li");
    entry.textContent = raw;
    
    todolist.appendChild(entry);
    textinput.value = "";
    
}