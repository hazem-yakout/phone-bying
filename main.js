let img = document.querySelector(".img ");
let con = document.querySelector(".content");
let p = document.querySelector("p");
let me = document.querySelector(".h");

function move(phones) {
  img.src = phones;
}

function color(c, text, ne, head) {
  con.style.backgroundColor = c;
  p.style.color = text;
  p.textContent = ne;
  me.textContent = head;
}
