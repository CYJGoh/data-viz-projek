d3.csv('datasets/dataset3/raisedhandsdata.csv').then(raisedHandsChart);

function raisedHandsChart(myData) {
    var raisedHands = myData.map(function (d) {
        return d.raisedHands;
    });
    var gradeL = myData.map(function (d) {
        return +d.low;
    });
    var gradeM = myData.map(function (d) {
        return +d.medium;
    });
    var gradeH = myData.map(function (d) {
        return +d.high;
    });

    var myChart = new Chart("RHChart", {
        type: 'bar',
        data: {
            labels: raisedHands,
            datasets: [{
                label: 'High Grade',
                data: gradeH,
                //backgroundColor: '#59A14F',
                backgroundColor: 'rgba(89, 161, 79, 0.7)',
                hoverBackgroundColor: 'rgba(89, 161, 79, 1)',
                borderColor: 'rgba(89, 161, 79, 1)',
                borderWidth: 1.5,
                barPercentage: 0.8,
                categoryPercentage: 0.8,
            }, {
                label: 'Medium Grade',
                data: gradeM,
                //backgroundColor: '#F28E2B',
                backgroundColor: 'rgba(242, 142, 43, 0.7)',
                hoverBackgroundColor: 'rgba(242, 142, 43, 1)',
                borderColor: 'rgba(242, 142, 43, 1)',
                borderWidth: 1.5,
                barPercentage: 0.8,
                categoryPercentage: 0.8,
            }, {
                label: 'Low Grade',
                data: gradeL,
                //backgroundColor: '#E15759',
                backgroundColor: 'rgba(225, 87, 89, 0.7)',
                hoverBackgroundColor: 'rgba(225, 87, 89, 1)',
                borderColor: 'rgba(225, 87, 89, 1)',
                borderWidth: 1.5,
                barPercentage: 0.8,
                categoryPercentage: 0.8,
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
                    },
                    ticks: {
                        padding: 10,
                    },
                    title: {
                        display: true,
                        text: "Amount of raised hands",
                    },
                },
                y: {
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                        padding: 10,
                    },
                    title: {
                        display: true,
                        text: "Student Percentage (%)",
                    },
                    type: 'linear',
                },
            },
            responsive: true,
            maintainAspectRatio: false,
        }
    });
}