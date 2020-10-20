const addButton = document.querySelector('.addButton');
let inputValue = document.querySelector('.input');
const container = document.querySelector('.container');
// const add = document.querySelector('.add');

let todosEX = window.localStorage.getItem("todos");
let todos = JSON.parse(todosEX);

if(window.localStorage.getItem("todos") == undefined){
    todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}



class item{
	constructor(itemName){
        //Create item div
		this.createDiv(itemName);
	}
    createDiv(itemName){
        let input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = itemName;
    	input.classList.add('item_input');

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');


    	let editButton = document.createElement('button');
    	editButton.classList.add('editButton');
    	editButton.innerHTML = "EDIT";
    	editButton.addEventListener('click', () => this.edit(input, name));

    	let removeButton = document.createElement('button');
    	removeButton.classList.add('removeButton');
    	removeButton.innerHTML = "REMOVE";
    	removeButton.addEventListener('click', () => this.remove(itemBox, name));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

    }

    edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

addButton.addEventListener('click', check);
//Arrow Key navigation for lightbox -Arrow key detection
document.body.addEventListener('keydown', function(event) {
    // var key = event.key;
  
    if(event.key === 13){
		check();
	}
  }); 
  
// window.addEventListener('keydown', (e) => {
// 	if(e == 13){
// 		check();
// 	}
// })

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}


for (let v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}


new item("sport");