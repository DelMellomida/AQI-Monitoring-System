document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.sidebar a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            links.forEach(function(link) {
                link.classList.remove('active');
            });
            event.currentTarget.classList.add('active');
            
            // Hide all content sections
            var contents = document.querySelectorAll('.content');
            contents.forEach(function(content) {
                content.style.display = 'none';
            });
            
            // Show the active content section
            var activeContent = document.querySelector(event.currentTarget.getAttribute('href'));
            activeContent.style.display = 'block';
        });
    });
    
    // Initially hide all content sections except the dashboard
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });
    document.getElementById('dashboard').style.display = 'block';

    // Create charts
    createCharts();
});

function createCharts() {
    var ctxAqi = document.getElementById('aqiChart').getContext('2d');
    var aqiChart = new Chart(ctxAqi, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Air Quality Index',
                data: [50, 60, 70, 80, 90, 100],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctxDashboardTemp = document.getElementById('dashboardTemperatureChart').getContext('2d');
    var dashboardTempChart = new Chart(ctxDashboardTemp, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Temperature (°C)',
                data: [20, 22, 25, 27, 30, 32],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctxDashboardHumidity = document.getElementById('dashboardHumidityChart').getContext('2d');
    var dashboardHumidityChart = new Chart(ctxDashboardHumidity, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Humidity (%)',
                data: [30, 40, 50, 60, 70, 80],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctxDashboardCo2 = document.getElementById('dashboardCo2Chart').getContext('2d');
    var dashboardCo2Chart = new Chart(ctxDashboardCo2, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'CO2 (ppm)',
                data: [400, 420, 450, 470, 490, 510],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctxDashboardCo = document.getElementById('dashboardCoChart').getContext('2d');
    var dashboardCoChart = new Chart(ctxDashboardCo, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'CO (ppm)',
                data: [1, 2, 3, 4, 5, 6],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctxHumidity = document.getElementById('humidityChart').getContext('2d');
    var humidityChart = new Chart(ctxHumidity, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Humidity (%)',
                data: [30, 40, 50, 60, 70, 80],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctxTemperature = document.getElementById('temperatureChart').getContext('2d');
    var temperatureChart = new Chart(ctxTemperature, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Temperature (°C)',
                data: [20, 22, 25, 27, 30, 32],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctxCo2 = document.getElementById('co2Chart').getContext('2d');
    var co2Chart = new Chart(ctxCo2, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'CO2 (ppm)',
                data: [400, 420, 450, 470, 490, 510],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctxCo = document.getElementById('coChart').getContext('2d');
    var coChart = new Chart(ctxCo, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'CO (ppm)',
                data: [1, 2, 3, 4, 5, 6],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentTemperature').innerText = "25°C";
    document.getElementById('currentHumidity').innerText = "60%";
    document.getElementById('currentCO2').innerText = "450 ppm";
    document.getElementById('currentCO').innerText = "3 ppm";
});
