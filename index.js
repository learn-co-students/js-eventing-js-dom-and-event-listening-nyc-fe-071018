const main = document.querySelector('#main');
const paragraph = document.querySelector('p');
const input = document.querySelector('input')

let divs = document.querySelectorAll('div');

input.addEventListener('keydown', (event) => {
  if (event.which === 71) {
    event.preventDefault()
  }
  // console.log(event)
})


function bubble(event) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (div of divs) {
  div.addEventListener('click', bubble);
}


main.addEventListener('click', (event) => {
  alert('You clicked me!');
});

paragraph.addEventListener('click', (event) => {
  alert('You clicked the p!!!');
  paragraph.style.backgroundColor = 'yellow';
});

