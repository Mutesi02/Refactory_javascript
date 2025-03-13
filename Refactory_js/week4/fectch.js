fetch("https://api.example.com/kgl-stock")  // Step 1: Order food (Request)
    .then(function(response) {               
        return response.json();              // Step 2: Wait for it (Process Response)
    })
    .then(function(data) {                   
        console.log(data);                   // Step 3: Get and eat (Use Data)
    })
    .catch(function(error) {                 
        console.log("❌ Error:", error);      // If something goes wrong
    });