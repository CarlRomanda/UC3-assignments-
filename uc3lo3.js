// Events
var btns = document.querySelectorAll('#manga-list.delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click',function(e){
        
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)

    });
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('navigation to ', e.target.textContent,'was prevented');
})

// Event Bubbling
const list = document.querySelector('#manga-list ul');

// delete manga
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li  = e.target.parentElement;
        list.removeChild(li);
    }
});

// Interacting with Forms
const list = document.querySelector('#manga-list ul');

// delete manga
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li  = e.target.parentElement;
        list.removeChild(li);
    }
});

// add manga-list
const addForm = document.forms['add-manga'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
});

// Creating Elements
const list = document.querySelector('#manga-list ul');

// delete manga
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li  = e.target.parentElement;
        list.removeChild(li);
    }
});

// add manga-list
const addForm = document.forms['add-manga'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    // create elements
    const li = document.createElement('li');
    const mangaName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content
    deleteBtn.textContent = 'delete';
    mangaName.textContent = value;

    // append to document
    li.appendChild(mangaName);
    li.appendChild(deleteBtn);
    list.appendChild('li');


});
