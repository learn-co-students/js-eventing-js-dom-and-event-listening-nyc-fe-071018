const main = document.querySelector('#main')
const paragraph = document.querySelector('p')
let divs = document.querySelectorAll('div')
const input = document.querySelector('input')

input.addEventListener('keydown', (event) => {
  if (event.which === 71){
    event.preventDefault();
  }
})

function bubble(event){
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
  this.style.backgroundColor = 'cyan'
}

for (div of divs) {
  div.addEventListener('click', bubble, true)
}

main.addEventListener('click', (event) => {
  alert("Hey you clicked me!")
})

paragraph.addEventListener('click', (event) => {
  alert("You clicked the p!!!")
  paragraph.style.backgroundColor = 'yellow'
})