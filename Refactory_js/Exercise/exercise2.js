// 20th Feb Exercise


console.log(4 > 3);       // true
console.log(4 >= 3);      // true
console.log(4 < 3);       // false
console.log(4 <= 3);      // false
console.log(4 == 4);      // true
console.log(4 === 4);     // true
console.log(4 != 4);      // false
console.log(4 !== 4);     // false
console.log(4 != '4');    // false
console.log(4 == '4');    // true
console.log(4 === '4');   // false



let myAge = 250;
let yourAge = 25;

let ageDifference = myAge - yourAge;

console.log(`I am ${ageDifference} years older than you.`);


// Declare the variable
let challenge = '30 Days Of JavaScript';

// Print the string to the console
console.log(challenge);

// Print the length of the string
console.log(challenge.length);

// Convert to uppercase
console.log(challenge.toUpperCase());

// Convert to lowercase
console.log(challenge.toLowerCase());

// Slice out the first word using substring() or substr()
console.log(challenge.substring(3)); // "Days Of JavaScript"

// Slice out 'Days Of JavaScript'
console.log(challenge.substring(3, challenge.length)); // "Days Of JavaScript"

// Check if 'Script' is in the string
console.log(challenge.includes('Script')); // true

// Split the string into an array
console.log(challenge.split()); // ["30 Days Of JavaScript"]

// Split the string at spaces
console.log(challenge.split(' ')); // ["30", "Days", "Of", "JavaScript"]

// Split a company list into an array
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', ')); 
// ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// Replace 'JavaScript' with 'Python'
console.log(challenge.replace('JavaScript', 'Python')); // "30 Days Of Python"
