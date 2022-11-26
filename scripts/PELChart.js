var ctx = document.getElementById("PELChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["some high school", "high school", "some college", "associate's degree", "bachelor's degree", "master's degree"],
        datasets: [{
            label: 'Pass',
            backgroundColor: "#caf270",
            data: [1,2,3,4,5,6],
        }, {
            label: 'Fail',
            backgroundColor: "#45c490",
            data: [6,5,4,3,2,1],
        }],
    },
    options: {
        tooltips: {
            displayColors: true,
            callbacks: {
                mode: 'x',
            },
        },
        scales: {
            x: {
                stacked: true,
                gridLines: {
                    display: false,
                }
            },
            y: {
                stacked: true,
                ticks: {
                    beginAtZero: true,
                },
                type: 'linear',
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});