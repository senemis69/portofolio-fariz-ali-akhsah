const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

let scroll = window.scrollY;

let scale = 1 + scroll * 0.0004;

heroBg.style.transform = `scale(${scale})`;

});