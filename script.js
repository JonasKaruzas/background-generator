var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener('load', setGradient);

randomBtn.addEventListener("click", randomize)

function randomize() {
	const r1 = Math.floor(Math.random()*16777215).toString(16);
	const r2 = Math.floor(Math.random()*16777215).toString(16);
	body.style.background = "linear-gradient(to right, #" + r1 + ", #" + r2 + ")";
	css.textContent = body.style.background + ";";
	
}