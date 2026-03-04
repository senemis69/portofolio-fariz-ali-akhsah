const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

let scroll = window.scrollY;
let scale = 1 + scroll * 0.0004;

heroBg.style.transform = `scale(${scale})`;

});

const open = document.getElementById("openCV");
const popup = document.getElementById("cvPopup");
const close = document.getElementById("closeCV");

open.onclick = () => {

popup.style.display = "flex";

}

close.onclick = () => {

popup.style.display = "none";

}

window.onclick = (e)=>{

if(e.target == popup){

popup.style.display = "none";

}

}