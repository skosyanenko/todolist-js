const toDoItems = document.querySelectorAll('.collection-item');
const addButton = document.querySelector('.button-add');
const checkboxes = document.querySelectorAll('.filled-in');
console.log(checkboxes);

function toDoActive () {
    alert('Работает');
}

checkboxes.forEach(function(checkbox){
    checkbox.addEventListener('click', toDoActive);
});