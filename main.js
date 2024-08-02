let button=document.querySelector(".hambtn")
let dropdown=document.querySelector(".dropdown")
let open=()=>{
    dropdown.style.zIndex=10;
}
button.addEventListener("click",open)

let close=document.querySelector(".close1")
let closebtn=()=>{
    dropdown.style.zIndex=-100;
}
close.addEventListener("click",closebtn)