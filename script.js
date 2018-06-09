var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bodyBg = document.getElementById("body");


function setGrediant() {
bodyBg.style.background = 
	"linear-gradient(to right," + color1.value +"," + color2.value +")";
	css.textContent = "background: " + bodyBg.style.background + ";";
}

color1.addEventListener("input",setGrediant);

color2.addEventListener("input",setGrediant);

//jQuery
$(document).ready(function(){
$("p").click(function(){
//code ...
});
});