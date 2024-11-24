const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')

function addItem(e){
    e.preventDefault();
     
    const newItem = itemInput.value;
    // value input 
    if(newItem =='')
    {
        alert('please add an item');
        return;
    }

    // create list item 
    const Li = document.createElement('li');
    Li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
    Li.appendChild(button);

    // add to the dom 
    itemList.appendChild(Li);

    itemInput.value='';

    console.log(Li);
}

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-plus');
    button.appendChild(icon)
    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}
//even listener
itemForm.addEventListener('submit', addItem);