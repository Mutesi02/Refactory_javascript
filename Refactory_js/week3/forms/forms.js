// // This ensures that once the HTML document has fully loaded, the function loadData() is executed.
// The function loadData() loads previously stored data from localStorage and displays it in the table.
document.addEventListener("DOMContentLoaded", loadData);

        // this section handles form submission
        // Attaches an event listener to the form with the ID procureForm.
        //  When the form is submitted, it executes the function event.preventDefault();(Prevents the default form submission behavior (which would reload the page).)

document.getElementById("procureForm").addEventListener("submit", function(event) {
            event.preventDefault();
            let data = getFormData(); // Calls getFormData() to retrieve form input values and store them in an object.
            let produceList = getStoredData(); // Retrieves the existing stored data (if any) from localStorage.
            produceList.push(data); // Adds the new entry (data) to the array of stored produce entries.
            storeData(produceList);  // Saves the updated array back to localStorage.
            addRowToTable(data); // Dynamically adds the new entry to the table without requiring a page refresh
            this.reset();  // Clears the form fields after submission.
        });

        // Function to Get Form Data
        // This function collects all form field values and returns them as an object.
        function getFormData() {
            return {
                produceName: document.getElementById("produceName").value,
                produceType: document.getElementById("produceType").value,
                dateTime: document.getElementById("dateTime").value,
                tonnage: document.getElementById("tonnage").value,
                cost: document.getElementById("cost").value,
                dealerName: document.getElementById("dealerName").value,
                branchName: document.getElementById("branchName").value,
                contact: document.getElementById("contact").value,
                priceToSell: document.getElementById("priceToSell").value
            };
        }

        // Function to Add a Row to the Table
        function addRowToTable(data, index = null) {
            let tableBody = document.getElementById("procuredTableBody");
            let row = document.createElement("tr");   // Creates a new <tr> (table row) element.
            row.innerHTML = `
                <td>${data.produceName}</td>
                <td>${data.produceType}</td>
                <td>${data.dateTime}</td>
                <td>${data.tonnage}</td>
                <td>${data.cost}</td>
                <td>${data.dealerName}</td>
                <td>${data.branchName}</td>
                <td>${data.contact}</td>
                <td>${data.priceToSell}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editRow(${index})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteRow(${index})">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);     // Appends the new row to the table.
        }

        // Function to Load Data from Local Storage
        function loadData() {
            let produceList = getStoredData();  // Retrieves stored produce data from localStorage.
            produceList.forEach((item, index) => addRowToTable(item, index));  // Iterates/looping over the stored data and adds each entry to the table.
        }

        //  Function to Retrieve Stored Data
        // Retrieves the stored JSON string.
        // JSON.parse(...), Converts the string back into a JavaScript array.
        // || [], If no data exists, return an empty array to avoid errors.
        function getStoredData() {
            return JSON.parse(localStorage.getItem("produceData")) || [];
        }

        // Function to Store Data in Local Storage
        // JSON.stringify(data), Converts the JavaScript array into a JSON string.
        // localStorage.setItem("produceData", ...), Saves the data in localStorage.

        function storeData(data) {
            localStorage.setItem("produceData", JSON.stringify(data));
            location.reload(); // Reloads the page to reflect changes.
        }

        // Function to Delete a Row
        function deleteRow(index) {
            let produceList = getStoredData();
            produceList.splice(index, 1); // Removes one item at the given index from the array.
            storeData(produceList); // Updates localStorage and refreshes the table.
        }

        // Function to Edit a Row
        function editRow(index) {
            let produceList = getStoredData();
            let item = produceList[index]; // Retrieves the selected entry.
            Object.keys(item).forEach(key => {
                document.getElementById(key).value = item[key];  // Sets the form fields with the existing values.
            });
            // Loops through each property of the object.
            produceList.splice(index, 1);  // Removes the old entry from storage.
            storeData(produceList); // Updates localStorage and refreshes the page.
        }