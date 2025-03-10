// classList.add()
// classList.remove()
// classList.toggle()
// classList.replace()
const div = document.createElement("div")
div.className = "card"

div.classList.remove("card")
div.classList.add("active","Inactive","upwards","hoover")
div.classList.toggle("visible")
div.classList.replace("visible", "invisible")


console.log(div.outerHTML)