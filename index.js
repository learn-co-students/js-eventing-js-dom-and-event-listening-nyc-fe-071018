const main = document.querySelector('#main')
const paragraph = document.querySelector('p')
const input = document.querySelector('input')

main.addEventListener('click', (event) => {
  console.log("I was clicked")
})

paragraph.addEventListener('click', (event) => {
  alert('You clicked the p!')
  paragraph.style.backgroundColor = 'yellow'
})


// can also do things like: 
//takes the first p in a div --> const paragraph = document.querySelector('div > p');
//all paragraphs in a div --> const paragraph = document.querySelector('div > p');


let divs = document.querySelectorAll('div')
function bubble(event) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}

for (div of divs) {
  div.addEventListener('click', bubble)
}

input.addEventListener('keydown', (event) => {
  if (event.which === 71) {
    event.preventDefault()
  }
  console.log(event)
})