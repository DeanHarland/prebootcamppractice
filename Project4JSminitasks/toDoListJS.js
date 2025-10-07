
const textinput = document.getElementById("text-input");
const addbutton = document.getElementById("add-to-list-button");
const todolist = document.getElementById("to-do-list-list");


addbutton.addEventListener("click", addToList);

function addToList(){
    let raw = textinput.value.trim();
    if (raw =="") return;

    const entry = document.createElement("li");
    entry.textContent = raw;

    const completeButton = document.createElement("button");
    completeButton.addEventListener("click", () => setCompleted(entry));

    const removeButton = document.createElement("button");
    removeButton.addEventListener("click",() => removeEntry(entry));

    entry.appendChild(completeButton);
    entry.appendChild(removeButton);
    todolist.appendChild(entry);
    textinput.value = "";
    completeButton.textContent = "Complete";
    removeButton.textContent = "Remove";
    

    
}

function setCompleted(entry){
    entry.classList.toggle("done");
}

function removeEntry(entry){
    entry.remove();
}