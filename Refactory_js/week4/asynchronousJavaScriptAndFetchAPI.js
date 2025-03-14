// JavaScript is normally synchronous, meaning it executes one line at a time, from top to bottom. However, when dealing with real-world applications, we often need to wait for things like:
//  Fetching data from a server
// Waiting for user input
// Reading files from disk
// If JavaScript had to pause everything while waiting, the entire webpage would freeze. This is why Asynchronous JavaScript exists—it allows JavaScript to continue running while waiting for slow tasks to complete.
                   // Asynchronous JavaScript
// Asynchronous JavaScript allows tasks to run in the background without stopping the rest of the code from executing.
                  // Ways to Handle Asynchronous Code
// JavaScript provides three main ways to handle asynchronous tasks:
// Callbacks
// Promises
// Async/Await
                     // Callbacks
// A callback function is a function that is passed as an argument to another function and is executed later.
// Example of a Synchronous Function (Blocking Code)
// This defines a function named cookFood(), which contains instructions for cooking food.
function cookFood() {
    console.log("Cooking food...");
    for (let i = 0; i < 1000000000; i++) {} // Simulating delay, This is a for loop that iterates 1 billion times
    console.log("Food is ready!");
}

console.log("Start cooking...");
cookFood();
console.log("Serve the food.");
// How This Works (Synchronous Execution)
// The code runs line by line, blocking execution until each task is finished.
// The for loop creates an artificial delay, preventing the next line from running until it's done.
// output
// Start cooking...
// Cooking food...
// (Delay happens here)
// Food is ready!
// Serve the food.


// Example of Asynchronous Code using Callbacks (Non-blocking)
function cookFood(callback) {
    console.log("Cooking food...");
    
    setTimeout(function () {
        console.log("Food is ready!");
        callback(); // Call the next step after cooking
    }, 2000); // Simulate a 2-second delay
}

function serveFood() {
    console.log("Serving the food.");
}

console.log("Start cooking...");
cookFood(serveFood); // Pass serveFood as a callback
// How This Works (Asynchronous Execution)
// The code does not block execution while waiting for food to be ready.

// Instead of stopping everything (like the for loop in the first example), setTimeout() allows JavaScript to continue running other tasks while waiting.

// The output will be:
// Start cooking...
// Cooking food...
// (After 2 seconds)
// Food is ready!
// Serving the food.


// settimeOut syntax
// setTimeout(code)
// setTimeout(code, delay)

// setTimeout(functionRef)
// setTimeout(functionRef, delay)
// setTimeout(functionRef, delay, param1)
// setTimeout(functionRef, delay, param1, param2)
// setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)

// callBack hell-is when several callbacks are called at the sametime or one after the other

                 // Promises
// A Promise is an object that represents a future value. It has three states:

// Pending → Waiting for completion
// Resolved (Fulfilled) → Successfully completed
// Rejected → Failed
// Example of a Promise
function cookFood() {
    // Instead of using callbacks, it returns a Promise.
    return new Promise(function (resolve, reject) {
        console.log("Cooking food...");

        // this section Simulates an Asynchronous Delay with setTimeout
        setTimeout(function () {
            // this section Handles Success or Failure
            let success = true; // A variable that determines whether the food is successfully cooked

        //    this section does the following,Resolving or Rejecting the Promise
            if (success) {
                resolve("Food is ready!");
            } else {
                reject("Failed to cook food.");
            }
        }, 2000); // Schedules a delay of 2000 milliseconds (2 seconds) before running the inner function.This simulates the time required to "cook the food" asynchronously.
    });
}

cookFood()
// this section Handles the Promise Response
// .then() is executed when the Promise is successfully resolved.
// The message passed from resolve("Food is ready!") is received and printed.
    .then(function (message) {
        console.log(message);
    })
    // this section Handles Errors with .catch()
    // .catch() is executed only if the Promise is rejected.
    // The error message passed from reject("Failed to cook food.") is received and printed.
    .catch(function (error) {
        console.log(error);
    });
    // How This Works (Asynchronous Execution with Promises)
//     Unlike synchronous code, the function does not block execution.
// The script does not wait for setTimeout() to finish.
// The Promise remains in a pending state until it is resolved or rejected.
// If success = true, resolve() is called, and .then() executes.
// If success = false, reject() is called, and .catch() executes.
// Output (When success = true)
// Cooking food...
// (Few seconds delay)
// Food is ready!
// Output (When success = false)
// Cooking food...
// (Few seconds delay)
// Failed to cook food.


                        // Async/Await
// Async/Await makes asynchronous code look like synchronous code, making it easier to read.
// Example using Async/Await
function cookFood() {
    return new Promise(function (resolve) {
        console.log("Cooking food...");

        setTimeout(function () {
            resolve("Food is ready!");
        }, 2000);
    });
}

async function prepareMeal() {
    console.log("Start cooking...");

    // Calls cookFood() and waits for it to complete before continuing.
    // The await keyword pauses execution of prepareMeal() until cookFood() finishe
    // The resolved value "Food is ready!" is stored in result.
    let result = await cookFood(); // Wait for cooking to finish
    console.log(result);

    console.log("Serving the food.");
}
// Calls the asynchronous function prepareMeal().
// The function executes in order, but because of await, it waits for the Promise to resolve before moving on.
prepareMeal();
// Output
// Start cooking...
// Cooking food...
// (Few seconds delay)
// Food is ready!
// Serving the food.


                         //Fetch API 
// The Fetch API is a modern way to make network requests (get/send data over the internet). It replaces the old XMLHttpRequest.
// Making a GET Request (Fetching Data)
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (response) {
        return response.json(); // Convert response to JSON
    })
    .then(function (data) {
        console.log(data); // Display the data
    })
    .catch(function (error) {
        console.log("Error:", error);
    });

    // Making a POST Request (Sending Data)
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "My Post",
            body: "This is the post content.",
            userId: 1
        })
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log("Error:", error);
        });

// Using Fetch API with Async/Await
async function getData() {
    try {
        var response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        var data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();
