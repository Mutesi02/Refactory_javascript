let data = [ //initialize an array with data.
    { id: 1, name: "Kigozi Bosco", email: "kigozi@gmail.com" },
    { id: 2, name: "Jane Mary", email: "janeM@gmail.com" },
    { id: 3, name: "Petero ", email: "petero@gmail.com" },
    {id: 4, name: "john mary", email: "johnmary@gmail.com"}
  ];
  
  let tableBody = document.querySelector("#dataTable tbody"); // get references to the table body
  let createForm = document.getElementById("createForm");
  let createButton = document.getElementById("createButton");
  let saveButton = document.getElementById("saveButton");
  let  cancelButton = document.getElementById("cancelButton");
  
  function renderTable() { // clear existing table rows, iterates the data array, creates table rows and cells, adds read, update and delete. adds rows to the body
    tableBody.innerHTML = ""; //clears out the table to avoid duplicates.
    data.forEach(item => { // for each item inside the datalist, do the things {here}.
      let row = document.createElement("tr"); //the js way of creating a table row.
      row.innerHTML = `  
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td class="action-buttons">
          <button onclick="readItem(${item.id})">Read</button>
          <button onclick="updateItem(${item.id})">Update</button>
          <button onclick="deleteItem(${item.id})">Delete</button>
        </td>
      `; // this writes the new content of the table row
      tableBody.appendChild(row);
    });
  }
  
  renderTable(); // calls the function to populate the table.
  
  createButton.addEventListener("click", () => { // adds a click to creat new
    createForm.style.display = "block"; //css design
  });
  
  cancelButton.addEventListener("click", () => { // adding a click event to the cancel button.
    createForm.style.display = "none"; //hides the create form field and clears input data.
    document.getElementById("newName").value = ""; 
    //These clear input from the email and name fields.
    document.getElementById("newEmail").value = ""; 
  });
  
  saveButton.addEventListener("click", () => { // adds click to the b
      let newName = document.getElementById("newName").value;
      let newEmail = document.getElementById("newEmail").value;
  
      if (newName && newEmail) {
          const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
          data.push({ id: newId, name: newName, email: newEmail });
          renderTable();
          createForm.style.display = "none";
          document.getElementById("newName").value = ""; //clears the input before new info is input without having to do it manually. 
          document.getElementById("newEmail").value = "";
      }
  });
  

function readItem(id) {
    const item = data.find(item => item.id === id);
    if (item) {
        alert(`ID: ${item.id}\nName: ${item.name}\nEmail: ${item.email}`);
    } else {
        alert("Item not found!");
    }
}
  
  function updateItem(id) {
    const itemIndex = data.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      const newName = prompt("Enter new name:", data[itemIndex].name);
      const newEmail = prompt("Enter new email:", data[itemIndex].email);
      if (newName && newEmail) {
        data[itemIndex].name = newName;
        data[itemIndex].email = newEmail;
        renderTable();
      }
    }
  }
  
  function deleteItem(id) {
    const itemIndex = data.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      if (confirm("Are you sure you want to delete this item?")) {
        data.splice(itemIndex, 1);
        renderTable();
      }
    }
  }