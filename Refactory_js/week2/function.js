// function funcname(){
//     return
// }
// funcname()
// //fuction 

//function to add two numbers without parameters.
function add(a,b){
let sum=(a+b)

return sum;
}
console.log(add(45,7));

// const add = (a,b) => c;


//function square
function square(a){
    return a*a;
}
square(3)
console.log(square);

const multiply = (a,b)=> a*b;
//const square = (a)=> a*a;


square(4);
square(3);
square(6);
square(5);


function calculateTotalCost(produce, pricePerKg, quantity){
    let totalPrice = pricePerKg*quantity;
    console.log("The total price for " + quantity + "kg of " + produce + " is: " + totalPrice + " Ugx.")
}
calculateTotalCost("maize", 3000, 50)
calculateTotalCost("Beans", 5000, 60)
calculateTotalCost("soybeans", 6000, 20)
calculateTotalCost("G-nuts", 4000, 70)



let areaOfTriangle = (base, height) =>{
    let area = 0.5 * base * height
    return area
}
console.log("The area of a triangle is:" + areaOfTriangle(5,6));


