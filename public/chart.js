

function renderChart(data) {
    /* chart setup - IMPORTANT NOTE: data[0] points to the center of the chart. Data for the chart start at data[1], and the data for label[0] stores in data[7] */
    let ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx, {
    type: 'radar',
        data: {
            labels: ["Time In", "Sleep Time", "Physical Time", "Down Time", "Play Time", "Focus Time", "Connecting Time"],
            datasets: [{
                label: 'Your results',
                data: data,
                backgroundColor: [
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderWidth: 1
            }]
        }
    });
}

