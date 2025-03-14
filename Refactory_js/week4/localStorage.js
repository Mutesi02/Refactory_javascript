// // JavaScript localStorage is part of the Web Storage API that allows websites to store data in a web browser for extended periods.
// // localStorage is a simple key-value store that allows data to be saved locally on the user's browser.
// // It stores data as strings, but more complex data (such as arrays or objects) can be stored by converting them to strings using JSON.
//                               // KEY FEATURES OF LOCALSTORAGE
// // Persistence Across Sessions
// // Storage Limit
// // No Expiration
// // Accessible Only from Same-Origin (If a user logs in to www.example.com and then navigates to www.subdomain.example.com, the data stored in localStorage on www.example.com will be inaccessible to the subdomain.)
//                                           // LOCALSTORAGE METHODS
// localStorage.setItem(key, value)
// localStorage.setItem('username', 'Stone');
// localStorage.setItem('isLoggedIn', 'true');

// localStorage.getItem(key)
// const username = localStorage.getItem('username'); // 'Stone'

// localStorage.removeItem(key)
// localStorage.removeItem('username');

// localStorage.clear()
// localStorage.clear();

// localStorage.key(index)
// const firstKey = localStorage.key(0); // 'username' (if 'username' is stored first)

// localStorage.length
// console.log(localStorage.length); // 2 (if two items are stored)

// STORING COMPLEX DATA (NON-STRING DATA)
// The most common way to do this is by using JSON.stringify() to convert data into a JSON string and JSON.parse() to convert it back when retrieving it.
// Storing an object
const boy = { name: 'Peter', age: 15 };
localStorage.setItem('user', JSON.stringify(boy));

const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.age); // 15

// Storing an array
const shoppingCart = ['item1', 'item2', 'item3'];
localStorage.setItem('cart', JSON.stringify(shoppingCart));

const storedCart = JSON.parse(localStorage.getItem('cart'));
console.log(storedCart); // ['item1', 'item2', 'item3']

// LIMITATIONS AND CONSIDERATIONS 
// Storage Capacity
// Security Risks
// Data Loss Due to Browser Clearing
