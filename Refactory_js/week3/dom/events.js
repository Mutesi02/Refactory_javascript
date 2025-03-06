//online Event Handler Vs Evevnt Listener
//Event handler
let btn = document.getElementById("btn")
btn.onclick = function() {
    console.log("button Clicked")
}


//Event listener
let btn = document.getElementById("btn")
btn.addEventListener("click",function() {
    console.log("button Clicked")
})

//Element.add EventListener(event,function)
function sayHello(){
    console.log("hello there !")
}
btn.addEventListener("click", sayHello)
btn.removeEventListener("click", sayHello)