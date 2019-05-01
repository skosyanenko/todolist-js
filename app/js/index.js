const addButton = document.querySelector('.button-add');
const textInput = document.querySelector('.materialize-textarea');

function toDoActive() {
    let collectionItem = this.closest('.collection-item');
    collectionItem.classList.toggle('active');
}

function toDoAdd() {
    let inputValue = textInput.value;
    let collection = document.querySelector('.collection');

    let newLi = document.createElement('li');
    newLi.classList.add('collection-item');

    let newLabel = document.createElement('label');

    let newInput = document.createElement('input');
    newInput.type = 'checkbox';
    newInput.classList.add('filled-in');

    let newSpan = document.createElement('span');
    newSpan.classList.add('item-name');
    newSpan.innerHTML = inputValue;

    let newClose = document.createElement('a');
    newClose.setAttribute('href', '#');
    newClose.classList.add('secondary-content');

    let newIconClose = document.createElement('i');
    newIconClose.classList.add('material-icons', 'icon-close');
    newIconClose.innerHTML = 'close';

    let newEdit = document.createElement('a');
    newEdit.setAttribute('href', '#');
    newEdit.classList.add('secondary-content', 'secondary-edit');

    let newIconEdit = document.createElement('i');
    newIconEdit.classList.add('material-icons', 'icon-edit');
    newIconEdit.innerHTML = 'edit';

    newLabel.appendChild(newInput);
    newLabel.appendChild(newSpan);
    newClose.appendChild(newIconClose);
    newEdit.appendChild(newIconEdit);

    newLi.appendChild(newLabel);
    newLi.appendChild(newClose);
    newLi.appendChild(newEdit);
    newInput.addEventListener('click', toDoActive);
    newIconClose.addEventListener('click', toDoClose);
    newIconEdit.addEventListener('click', toDoEdit);
    collection.appendChild(newLi);
    UpdateItems();
}

function toDoClose() {
    let toDoItem = this.closest('.collection-item');
    let collection = document.querySelector('.collection');
    collection.removeChild(toDoItem);
}

function toDoEdit() {
    let newInput = document.createElement('input');
    let toDoItem = this.closest('.collection-item');
    let itemName = toDoItem.querySelector('.item-name');
    let label = toDoItem.querySelector('label');
    let check = label.querySelector('.filled-in');


    this.classList.add('hidden');
    check.classList.add('hidden');
    itemName.classList.add('hidden');

    newInput.classList.add('editInput');
    newInput.value = itemName.innerHTML;

    label.appendChild(newInput);
    document.addEventListener('keydown', function(e) {
        if (e.key === "Enter") {
            let hiddenEditButton = toDoItem.querySelector('.icon-edit');

            itemName.innerHTML = newInput.value;
            newInput.classList.add('hidden');
            hiddenEditButton.classList.remove('hidden');
            check.classList.remove('hidden');
            itemName.classList.remove('hidden');
        }
        if (e.key === "Esc" || e.key === "Escape") {
            let hiddenEditButton = toDoItem.querySelector('.icon-edit');

            newInput.classList.add('hidden');
            hiddenEditButton.classList.remove('hidden');
            check.classList.remove('hidden');
            itemName.classList.remove('hidden');
        }
    })
}

function addListener(selector, callback) {
    let list = document.querySelectorAll('.'+selector);
    list.forEach(function(elem){
        elem.addEventListener('click', callback);
    });
}

function UpdateItems() {
    const toDoItems = document.querySelectorAll('.collection-item');
    let arrName = [];
    toDoItems.forEach(function(elem) {
        let name = elem.querySelector('.item-name').innerHTML;
        arrName.push(name);
    });
    localStorage.setItem("names", JSON.stringify(arrName));
}

addButton.addEventListener('click', toDoAdd);
addListener('filled-in', toDoActive);
addListener('icon-close', toDoClose);
addListener('icon-edit', toDoEdit);










