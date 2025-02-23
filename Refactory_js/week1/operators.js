/*
Addition (+)
subtraction (-)
greater than (>)
less than (<)
divide(/) 
multiplication (*)
Equal (=)
*/


let pricePerKg = 3000;
let quantity = 10;
let totalCost = pricePerKg*quantity

console.log(`The price of Beans is : ${totalCost}`);

// discount
let discount = 500;
let discountPrice = totalCost-discount;
console.log(`The discount price is:${discountPrice} `);

// comparison
let buyerMoney =5000;
let priceOfMaizePerkg = 6000;
console.log(buyerMoney !== priceOfMaizePerkg);


// Logical
let stockIsAvailable =true;
let buyerIsLegit = false;
console.log(stockIsAvailable && buyerIsLegit);

//Concatination
let buyerName ="Mutesi";
let productName = "soya"; 
let receiptMessage ="Thank you!!" + buyerName + "You have just bought" + quantity + "kgs of" + productName;
console.log(receiptMessage);


//Assignment Operators
let stock =100;
let sales =20;
stock =stock- sales;
stock -= sales;
console.log(stock)

// a=a - b;
// a -=b
// total = total+newScore;
// total +=newScore;


let salesRevenue = 0;
salesRevenue += totalCost;
console.log(salesRevenue);
