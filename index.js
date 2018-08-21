const main = document.querySelector('#main')
const paragraph = document.querySelector('p')
const input = document.querySelector('input')

let allTheDivs = document.querySelectorAll('div')

function bubble(event) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}

for (div of allTheDivs) {
  div.addEventListener('click', bubble, true)
}

main.addEventListener('click', (event) => {
  console.log(event)
  alert('Weeeeee! I was clicked!')
})

paragraph.addEventListener('click', (event) => {
  paragraph.style.backgroundColor = 'yellow'
  console.log('You clicked the p!')
})

input.addEventListener('keydown', (event) => {
  const nums = []
  if (event.keyCode === 71) {
    event.preventDefault()
  }
  console.log(event)
})