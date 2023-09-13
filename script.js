

let buttons = document.getElementsByClassName("button");



for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', click, false);
}


function click() {
  let result = document.getElementById("result");
  let buttonclicked = document.getElementById(this.id).value;
  result.innerHTML = "Your Chosen button is: " + buttonclicked;
  this.disabled = true;

}

document.getElementById("submit").addEventListener("click",function(e){
    window.location = "http://127.0.0.1:5500/question1/submitted.html"
    win.focus()
})