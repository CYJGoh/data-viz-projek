d3.csv('datasets/lunch_dataset/PELData.csv').then(makePELChart);

function makePELChart(myData) {
    var PELType = myData.map(function (d) {
        return d.ParentalEducationLevel;
    });
    var passRate = myData.map(function (d) {
        return +d.Pass;
    });
    var failRate = myData.map(function (d) {
        return +d.Fail;
    });

    var myChart = new Chart("PELChart", {
        type: 'bar',
        data: {
            labels: PELType,
            datasets: [{
                label: 'Fail',
                data: failRate,
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                hoverBackgroundColor: 'rgba(255, 0, 0, 1)',
                borderColor: 'rgba(255, 0, 0, 1)',
                borderWidth: 1.5,
                barPercentage: 0.8,
                categoryPercentage: 0.8,
            }, {
                label: 'Pass',
                data: passRate,
                backgroundColor: 'rgba(0, 179, 60, 0.5)',
                hoverBackgroundColor: 'rgba(0, 179, 60, 1)',
                borderColor: 'rgba(0, 179, 60, 1)',
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
                        text: "Parental Education Level",
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
                        text: "Number of Students",
                    },
                    type: 'linear',
                },
            },
            responsive: true,
            maintainAspectRatio: false,
        }
    });
}