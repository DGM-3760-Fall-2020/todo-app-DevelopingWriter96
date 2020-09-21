//inital data array. DO NOT EDIT OR REMOVE - Use these as the inital app state.
//This is the kind of data you would traditionally get from a data base.
//For now we are just going to mock it.
let initalTodos = [
    { id: 1, todo: "Buy milk.", complete: false, category: "Grocery" },
    { id: 1, todo: "Clean the cat box.", complete: false, category: "House" },
    { id: 1, todo: "Chips and salsa.", complete: false, category: "Grocery" },
    { id: 1, todo: "Finish Homework for DGM 3760", complete: false, category: "School" }
]

console.log(initalTodos);

function todoList() {

    for (i = 0; i < initalTodos.length; i++) {

        let par = document.createElement("p");

        let check = document.createElement("input");

        check.setAttribute("type", "checkbox");

        par.textContent = initalTodos[i].todo;

        document.getElementById('list').appendChild(check);

        document.getElementById('list').appendChild(par);
    }
}

todoList();

function addTo() {
    console.log("Testing");

    let createItem = document.getElementById('add').value;

    console.log(createItem);

    let myObj = {id: 1, todo: createItem, complete: false, category: "Other"}

    console.log(myObj);

    initalTodos.push(myObj);

    function tackOn() {
        let newArray = initalTodos.length;

        console.log(newArray);

        let box = document.createElement("input");

        box.setAttribute("type", "checkbox");

        let item = document.createElement("p");
        
        item.textContent = initalTodos[(newArray-1)].todo;

        document.getElementById('list').appendChild(box);

        document.getElementById('list').appendChild(item);
    }

    tackOn();
}