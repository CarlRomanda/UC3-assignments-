const list = document.querySelector('#manga-list ul');

// delete manga
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});


// get element by class or tag
var titles = document.getElementsByClassName('title');

// console.log(Array.isArray('titles'));
// console.log(Array.isArray(Array.from('titles')));

Array.from(titles).forEach(function(item){
    console.log(item);
});


// the query selector
const wmf = document.querySelector('#manga-list li:nth-child(2).name');
// console.log(wmf);

const manga = document.querySelector('#manga-list li.name');
// console.log(manga);

const wmf = document.querySelector('#manga-list li.name');
// console.log(manga);

Array.from(manga).forEach(function(manga){
    console.log(manga);
});