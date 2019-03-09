function renderChart(metrics) {
    let ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx, {
    type: 'radar',
        data: {
            labels: ["Time In", "Sleep Time", "Physical Time", "Down Time", "Play Time", "Focus Time", "Connecting Time"],
            datasets: [{
                label: 'Your results',
                data: convertMetricsForChart(metrics.platter),
                backgroundColor: ['rgba(0, 0, 255, 0.2)'],
                borderColor: ['rgba(255,99,132,1)'],
                borderWidth: 1
            }]
        }
    });
}

function convertMetricsForChart(platter) {
    let chartMetrics = [0] // 0 is the center point of the chart
    for (let metric in platter) {
        chartMetrics.push(platter[metric])
    }
    return chartMetrics
}