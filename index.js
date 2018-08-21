const main =document.querySelector("#main")
const paragraph = document.querySelector('p')
const input = document.querySelector('input')

let divs = document.querySelectorAll('div')

input.addEventListener('keydown', (event) => {
  const nums =[]
  if (event.which ===71) {
    event.preventDefault()
  }
})

main.addEventListener('click', (event) => {
  console.log('I was clicked')
  alert ('hey you clicked me')
})

paragraph.addEventListener('click', (event) =>{
  alert("you clicked the p!!!")
  paragraph.style.backgroundColor = 'yellow'
})


function bubble(event) {
  console.log(this.firstChild.nodeValue.trim() + 'bubbled')

}
  
  (for div of divs) {
    div.addEventListener('click', bubble)
  }