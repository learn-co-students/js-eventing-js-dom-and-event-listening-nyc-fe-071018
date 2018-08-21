const main = document.querySelector('#main');
const paragraph = document.querySelector('p');
let divs = document.querySelectorAll('div');
const input = document.querySelector('input');

input.addEventListener('keydown', (event) => {
  console.log(event)
  if(event.which === 71){
    event.preventDefault();
  }
  
  }
  )

function bubbled (event){
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (div of divs){
  div.addEventListener('click', bubbled, false);
}

main.addEventListener('click', (event) => alert('Hey, you clicked me!'));

paragraph.addEventListener('click', (event) => {
    alert('You clicked a paragraph!');
    paragraph.style.backgroundColor = 'yellow';
  }
);

