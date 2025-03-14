
        let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

        function addExpense() {
            const amount = parseFloat(document.getElementById("amount").value);
            const description = document.getElementById("description").value;
            const category = document.getElementById("category").value;
            if (!amount || description.trim() === "") {
                alert("Please enter a valid amount and description.");
                return;
            }
            expenses.push({ amount, description, category, date: new Date().toLocaleDateString() });
            localStorage.setItem("expenses", JSON.stringify(expenses));
            updateUI();
        }

        function updateUI() {
            const expenseList = document.getElementById("expense-list");
            const categorySummary = document.getElementById("category-summary");
            let total = 0;
            let categoryTotals = {};
            expenseList.innerHTML = "";
            categorySummary.innerHTML = "";
            expenses.forEach((exp, index) => {
                total += exp.amount;
                categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
                expenseList.innerHTML += `
                    <div class="expense-item">
                        <p>${exp.date} - ${exp.description} ($${exp.amount}) - ${exp.category}</p>
                        <button onclick="removeExpense(${index})">Remove</button>
                    </div>`;
            });
            document.getElementById("total").textContent = total;
            for (let cat in categoryTotals) {
                categorySummary.innerHTML += `<p>${cat}: $${categoryTotals[cat]}</p>`;
            }
        }

        function removeExpense(index) {
            expenses.splice(index, 1);
            localStorage.setItem("expenses", JSON.stringify(expenses));
            updateUI();
        }

        updateUI();
