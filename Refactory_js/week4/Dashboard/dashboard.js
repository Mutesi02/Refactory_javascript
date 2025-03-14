
// Dummy Data
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const salesData = [120, 190, 300, 500, 250, 400];
const trafficData = [500, 600, 700, 800, 900, 1000];
const engagementData = [40, 30, 20, 50, 10, 60];

// Line Chart - Sales Trends
new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
        labels: labels,
        datasets: [{
            label: "Sales ($K)",
            data: salesData,
            borderColor: "blue",
            backgroundColor: "rgba(0, 0, 255, 0.1)",
            fill: true
        }]
    },
    options: { responsive: true, plugins: { legend: { display: true } } }
});

// Bar Chart - Website Traffic
new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
        labels: labels,
        datasets: [{
            label: "Website Traffic",
            data: trafficData,
            backgroundColor: "green"
        }]
    },
    options: { responsive: true, plugins: { legend: { display: true } } }
});

// Pie Chart - User Engagement
new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
        labels: labels,
        datasets: [{
            label: "User Engagement %",
            data: engagementData,
            backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"]
        }]
    },
    options: { responsive: true, plugins: { legend: { display: true } } }
});
