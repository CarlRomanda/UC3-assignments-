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

    // lo4 lesson: Styles & Classes
    // add classes
    mangaName.classList.add('name');
    deleteBtn.classList.add('delete')

    // append to document
    li.appendChild(mangaName);
    li.appendChild(deleteBtn);
    list.appendChild('li');


});

// lo4 assignments

//  Checkboxes & Change Events
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

// hide manga
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";
    } else{
        list.style.display = "initial";
    }
});

//  Custom Search Filter
// filter manga

const searchBar = document.forms['search-manga'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const manga = list.getElementsByTagName('li');
    Array.from(manga).forEach(function(manga){
        const title = manga.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            manga.style.display = 'block';
        } else {
            manga.style.display = 'none';
        }
    })
})