// load the data from csv
d3.csv('datasets/lunch_dataset/math_stats.csv').then(makeMathChart);
d3.csv('datasets/lunch_dataset/reading_stats.csv').then(makeReadingChart);
d3.csv('datasets/lunch_dataset/writing_stats.csv').then(makeWritingChart);

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
    var chart = new Chart('myChartMath', {
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


function makeReadingChart(myData) {
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
    var chart = new Chart('myChartReading', {
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


function makeWritingChart(myData) {
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
    var chart = new Chart('myChartWriting', {
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