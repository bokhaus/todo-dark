const addButton = document.querySelector('.addButton');
let input = document.querySelector('.input');
const container = document.querySelector('.container');
// const add = document.querySelector('.add');

let todosEX = window.localStorage.getItem("todos");
let todos = JSON.parse(todosEX);

//Local Storage?



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
    	editButton.addEventListener('click', () => this.edit(input));

    	let removeButton = document.createElement('button');
    	removeButton.classList.add('removeButton');
    	removeButton.innerHTML = "REMOVE";
    	removeButton.addEventListener('click', () => this.remove(itemBox));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

    }
    
    edit(input){
           input.disabled = !input.disabled;
    }

    //Remove list element (item) 
    remove(item){
        container.removeChild(item);
    }
}

// Event Listener for button click
addButton.addEventListener('click', check);

// If the Enter key is pressed run the check function
document.body.addEventListener('keydown', function(e) {
	if(e.key === 'Enter'){
		check();
	}
});

// Add new item from input field if the input value is not empty
// Then set input value to empty
function check(){
	if(input.value != ""){
		new item(input.value);
		input.value = "";
	}
}

// Starter Item
new item("Get Groceries");