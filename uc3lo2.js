//  Changing Text & HTML Content
var books = document.querySelectorAll('#manga-list li.name');

Array.form(manga).forEach(function(manga){
    manga.textContent += '(manga-title)';
});

const mangaList = document.querySelector('#manga-list');
// mangaList.innerHTML = '<h2>Manga and more manga...</h2>';
mangaList.innerHTML += '<p>This is how you add HTML</p>';

// Nodes
const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is', banner.nodeType);
console.log('#page-banner node name is', banner. nodeName);
console.log('#page-banner has child nodes', banner.hasChildNode());

const closeBanner = banner.cloneNode(treu);
console.log;(clonedBanner);

// Traversing the DOM (part 1)
const mangaList = document.querySelector('#mamga-list');

console.log('the parent node is'.mangaList.parentNode);
console.log('the parent node is'.mangaList.parentElement.parentElement);

console.log(mangaList.children);

// Traversing the DOM (part 2)
const mangaList = document.querySelector('#mamga-list');

console.log('#manga-list next sibling is:',mangaList.nextSibling);
console.log('#manga-list next element sibling is:',mangaList.nextElementSibling);

console.log('#manga-list previous sibling is:',mangaList.previousSibling);
console.log('#manga-list previous Element sibling is:',mangaList.previousElementSibling);

mangaList.previousElementSibling.querySelector('p').innerHTML += '</br>Tool cool for everyone else'
