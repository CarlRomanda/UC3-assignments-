
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

// lo5 assignments
// Tabbed Content
const tabs = document.querySelector('.tabs');
const panels = document.querySelector('.panel');
tabs.addEventListener('click', function(e) {
    if(e.target.tagName == "Li"){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel) {
            if(panel == targetPanel){
                panel.classList.add('active');
            } else { 
                panel.classList.remove('active');
            }
        })
    }
})