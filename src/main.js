//inital data array. DO NOT EDIT OR REMOVE - Use these as the inital app state.
//This is the kind of data you would traditionally get from a data base.
//For now we are just going to mock it.
let initalTodos = [
    { id: 1, todo: "Buy milk.", complete: false, category: "Grocery" },
    { id: 2, todo: "Clean the cat box.", complete: false, category: "House" },
    { id: 3, todo: "Chips and salsa.", complete: false, category: "Grocery" },
    { id: 4, todo: "Finish Homework for DGM 3760", complete: false, category: "School" }
]

console.log(initalTodos);

for (i = 0; i < initalTodos.length; i++) {
    tackOn(initalTodos[i]);
}

function tackOn(todoItem) {

    let item = document.createElement("p");

    let box = document.createElement("input");

    box.setAttribute("type", "checkbox");

    box.addEventListener("change", () => {
        todoItem.complete = box.checked;
        box.setAttribute("class", "complete")
        console.log(todoItem);
        item.setAttribute("class", "completed" )
    });
    
    item.textContent = todoItem.todo;

    document.getElementById('list').appendChild(box);

    document.getElementById('list').appendChild(item);
}

function addTo() {
    console.log("Testing");

    let createItem = document.getElementById('add').value;

    let newCategory = document.getElementById('category').value;

    console.log(createItem);

    let myObj = {id: initalTodos.length + 1, todo: createItem, complete: false, category: newCategory}

    console.log(myObj);

    initalTodos.push(myObj);

    tackOn(myObj);
}

function removeItems(){
    for (i = 0; i < initalTodos.length; i++) {
        if (initalTodos[i].complete){
            initalTodos.splice(i, 1);
        }

    let byeBye = document.getElementById('list');
    let Bye = document.getElementsByClassName('complete');
    byeBye.removeChild(Bye);
    let goodbye = document.getElementsByClassName('completed');
    byeBye.removeChild(goodbye);
    }
    console.log(initalTodos);
}

function hideShow(){

    let listBox = document.getElementById('complete');

    if (listBox.style.display === "block"){
        
        listBox.style.display = "none";
        
    }else{
    listBox.style.display = "block";
    }

    let listTask = document.getElementById('completed');
    
    if (listTask.style.display === "block"){

            listTask.style.display = "none";
            
     }else{
        listTask.style.display = "block";
        }
}    