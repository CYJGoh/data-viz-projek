// plot the data with Chart.js
function makeMathChart(myData) {
    let delayed;

    // data for test preparation course status
    var lunchType = myData.map(function (d) {
        return d.lunch_type;
    });
    var passRate = myData.map(function (d) {
        return +d.pass;
    });
    var failRate = myData.map(function (d) {
        return +d.fail;
    });


    // create new chart
    var chart = new Chart('changingCharts', {
        type: 'bar',
        data: {
            labels: lunchType,
            datasets: [
                {
                    label: "Pass",
                    data: passRate,
                    backgroundColor: 'rgba(0, 179, 60, 0.5)',
                    hoverBackgroundColor: 'rgba(0, 179, 60, 1)',
                    borderColor: 'rgba(0, 179, 60, 1)',
                    borderWidth: 2,
                    barPercentage: 0.6,
                    categoryPercentage: 0.6,
                },
                {
                    label: "Fail",
                    data: failRate,
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    hoverBackgroundColor: 'rgba(255, 0, 0, 1)',
                    borderColor: 'rgba(255, 0, 0, 1)',
                    borderWidth: 1,
                    barPercentage: 0.6,
                    categoryPercentage: 0.6,
                    borderDash: [2, 6],
                    borderDashOffset: 0.5,
                }
            ]
        },
        options: {
            responsive: true,
            animation: {
                onComplete: () => {
                    delayed = true;
                },
                delay: (context) => {
                    let delay = 0;
                    if (context.type === "data" && context.mode === "default" && !delayed) {
                        delay = context.dataIndex * 400 + context.datasetIndex * 200;
                    }
                    return delay;
                },
                duration: 500,
                easing: "easeOutQuad",
            },
            tooltips: {
                titleFontSize: 30,
            },
        }
    });
}


function changeCharts() {
    var myVal = document.getElementById("chart4choices").value;
    if (myVal === "math") {
        d3.csv('datasets/lunch_dataset/math_stats.csv').then(makeMathChart);
    }
    else if (myVal === "reading") {
        d3.csv('datasets/lunch_dataset/math_stats.csv').then(makeMathChart);
    }
    else if (myVal === "writing") {
        d3.csv('datasets/lunch_dataset/math_stats.csv').then(makeMathChart);
    }
}