// if you do the home work you get sweets
//  if you dont wash dish


/*let homeWorkDone = true;
if (homeWorkDone){
    console.log("sweets")
}else {
    console.log("washDishes");
}*/

// let homeWorkDone = true;
// let reward;
// if (homeWorkDone){
//     reward="sweets"
// }else {
//     reward="washDishes"
// };
// console.log (reward)



//ternary
let homeWorkDone = true;
let reward =  homeWorkDone ? "sweets": "washdishes";
console.log(reward)

let userRole = "manager"
let access = userRole ==="director"? "Full access": "restrict Acesss";
console.log(access)


let stock = 500
let orders = 400

if (orders>stock){
    console.log("stock is not available")
}else{
    stock -= orders
    console.log(`sale has been successful, remaining stock is ${stock}`)
}