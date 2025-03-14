/*4 boys
Abel-chocolate
cain-braed
Joshua -sweets
person b doesnot answer phone calls*/
let contact = +prompt("Enter your BF contact");
switch(contact){
    case 1:
        alert("chocolate")
    break;
    case 2:
       alert("sweets")
     break;
    case 3:
        alert("Bread")
    break;
    default:
        alert("not available")
    break;
}


// if (contact === 1){
//     console.log("chocolate")
// }else if(contact === 2){
//     console.log("Bread")
// }else if(contact === 3){
//     console.log("sweets")
// }else{
//     console.log("not Available at A moment")
// };

//Ask the user to enter the produce name 
let produce = prompt("Enter the produce name (Beans, Maize, cow peas, G-nuts, soybeavns):");
produce = produce.toLowerCase();
switch (produce) {
    case "beans":
        alert("cateory:legumes");
        break;
    case "maize":
        alert("cateory:Grains");
        break;
    case "cow peas":
         alert("cateory:pulses");
        break;
    case "g-nuts":
         alert("cateory:Nuts");
        break;
    case "beans":
        alert("cateory:Protein rich crops");
        break;   
    default:
        alert("unknown produce! please enter a valid name");
        break;    
}