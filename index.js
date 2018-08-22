
const main = document.querySelector("#main");
const paragraph = document.querySelector("p");
const input = document.querySelector("input");
const divs = document.querySelectorAll('div');

main.addEventListener('click', (event) => {
  alert("Hey, you clicked me!");
}); 

paragraph.addEventListener('click', (event) => {
  paragraph.style.backgroundColor = "yellow";
  alert("Hey, you clicked the p tag");
});

input.addEventListener("keydown", e => {
  if (e.which === 71) {
    e.preventDefault();
  }
});

function bubble (event) {
  event.stopPropagation();
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

// function capture (event) {
//   console.log(this.firstChild.nodeValue.trim() + ' captured');
// }

for (const aDiv of divs) {
  aDiv.addEventListener ('click', bubble);
}

// for (const aDiv of divs) {
//   aDiv.addEventListener ('click', capture, true);
// }

