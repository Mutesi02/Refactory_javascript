
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        function addTask() {
            const taskInput = document.getElementById("taskInput");
            const taskDate = document.getElementById("taskDate").value;
            const taskPriority = document.getElementById("taskPriority").value;
            if (taskInput.value.trim() === "") {
                alert("Please enter a task");
                return;
            }
            tasks.push({ text: taskInput.value, date: taskDate, priority: taskPriority, completed: false });
            localStorage.setItem("tasks", JSON.stringify(tasks));
            taskInput.value = "";
            document.getElementById("taskDate").value = "";
            renderTasks();
        }

        function renderTasks() {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                taskList.innerHTML += `
                    <li class="${task.completed ? 'completed' : ''}">
                        <span onclick="toggleTask(${index})">${task.text} (Due: ${task.date || 'No date'}) - Priority: ${task.priority}</span>
                        <button onclick="deleteTask(${index})">Delete</button>
                    </li>
                `;
            });
        }

        function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        }

        renderTasks();
