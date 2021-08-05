var ref = document.querySelector("h3");
var element1 = document.querySelector ("#color1");
var element2 = document.querySelector ("#color2");
var background = document.querySelector ("body");
var button = document.querySelector ("#random");
background.style.background = "linear-gradient(to right,"+ element1.value+" , "+element2.value+")";
ref.textContent = background.style.background + ";";
function setGradient (event)
{
    background.style.background = "linear-gradient(to right,"+ element1.value+" , "+element2.value+")";
    ref.textContent = background.style.background + ";";
}

element1.addEventListener("input", setGradient );
element2.addEventListener("input", setGradient );
button.addEventListener ("click", function () {
  element1.value = "#"+ ((Math.random() * 0xfffff * 1000000).toString(16)).slice(0,6);
  element2.value = "#"+((Math.random() * 0xfffff * 1000000).toString(16)).slice(0,6);
  background.style.background = "linear-gradient(to right,"+ element1.value+" , "+element2.value+")";
  ref.textContent = background.style.background + ";";
})
