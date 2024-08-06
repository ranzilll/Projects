const inputbox = document.getElementById('inp');
// console.log(inputbox);
const listContainer = document.getElementById('list-container');
// console.log(listContainer);

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);


        let deleteSpan = document.createElement("span");
        deleteSpan.classList.add('delete');
        deleteSpan.innerHTML = "\u00d7";
        li.appendChild(deleteSpan);


        let editSpan = document.createElement('span');
        editSpan.classList.add('edit')
        editSpan.innerHTML = '\u2605';
        li.appendChild(editSpan);
    }
    inputbox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        saveData();
    }  else if (e.target.classList.contains('edit')) {
        let li = e.target.parentElement;
        let currentTask = li.childNodes[0].textContent.trim();
        let newTask = prompt("Edit your task:", currentTask);
        if (newTask !== null && newTask !== "") {
            li.childNodes[0].textContent = newTask;
            saveData();
        }
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// Add event listener for keydown event on the input box
inputbox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function clearStorage() {
    localStorage.removeItem('data');
    listContainer.innerHTML = '';
}
