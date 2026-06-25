console.dir(document);

const title = document.getElementById('title');

console.log(title); // single element

const btn = document.getElementsByClassName('btn');

console.log(btn); // Collection of elements

const btn2 = document.querySelector('.btn');
console.log(btn2); // single element , first element of the class

const title2 = document.querySelector('#title');
console.log(title2); // single element

btn2.addEventListener('click', function(e){
    console.log(e.target);
    e.target.innerText = 'Clicked';
    e.target.style.backgroundColor = 'red';
    title.innerHTML = '<h1>Title Changed</h1>';
})