var chart = null; // set chart value to null

// load math chart and title as default chart
d3.csv('datasets/lunch_dataset/math_stats.csv').then(makeMathChart);
document.getElementById("changingChartTitle").innerHTML = "Math Exam Pass Rate Based On Lunch Type";

// ==================================================================================================================

// create chart for Math results
function makeMathChart(myData) {
    let delayed;

    // check if chart is null or not and if its not, destroy chart
    if (chart !== null) {
        chart.destroy();
    }

    // change chart title based on 
    document.getElementById("changingChartTitle").innerHTML = "Math Exam Pass Rate Based On Lunch Type";
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
    chart = new Chart('changingCharts', {
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
                duration: 800,
                easing: "easeOutQuad",
            },
            tooltips: {
                titleFontSize: 30,
            },
            scales: {
                x: {
                    ticks: {
                        padding: 10,
                    },
                    title: {
                        display: true,
                        text: "Lunch Type",
                    },
                },
                y: {
                    ticks: {
                        padding: 10,
                    },
                    title: {
                        display: true,
                        text: "Number of Students",
                    },
                    offset: false,
                },
            },
        }
    });
}

// ==================================================================================================================

// create chart for Reading results
function makeReadingChart(myData) {
    let delayed;

    if (chart !== null) {
        chart.destroy();
    }

    document.getElementById("changingChartTitle").innerHTML = "Reading Exam Pass Rate Based On Lunch Type";
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
    chart = new Chart('changingCharts', {
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
                duration: 800,
                easing: "easeOutQuad",
            },
            tooltips: {
                titleFontSize: 30,
            },
            scales: {
                x: {
                    ticks: {
                        padding: 10,
                    },
                    title: {
                        display: true,
                        text: "Lunch Type",
                    },
                },
                y: {
                    ticks: {
                        padding: 10,
                    },
                    title: {
                        display: true,
                        text: "Number of Students",
                    },
                    offset: false,
                },
            },
        }
    });
}

// ==================================================================================================================

// create chart for Writing results
function makeWritingChart(myData) {
    let delayed;

    if (chart !== null) {
        chart.destroy();
    }

    document.getElementById("changingChartTitle").innerHTML = "Writing Exam Pass Rate Based On Lunch Type";
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
    chart = new Chart('changingCharts', {
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
                duration: 800,
                easing: "easeOutQuad",
            },
            tooltips: {
                titleFontSize: 30,
            },
            scales: {
                x: {
                    ticks: {
                        padding: 10,
                    },
                    title: {
                        display: true,
                        text: "Lunch Type",
                    },
                },
                y: {
                    ticks: {
                        padding: 10,
                    },
                    title: {
                        display: true,
                        text: "Number of Students",
                    },
                    offset: false,
                },
            },
        }
    });
}



// function to switch between charts when selecting an option from dropdown menu
function changeCharts() {
    var myVal = document.getElementById("lunchChartChoices").value;
    if (myVal === "math") {
        d3.csv('datasets/lunch_dataset/math_stats.csv').then(makeMathChart);
    }
    else if (myVal === "reading") {
        d3.csv('datasets/lunch_dataset/reading_stats.csv').then(makeReadingChart);
    }
    else if (myVal === "writing") {
        d3.csv('datasets/lunch_dataset/writing_stats.csv').then(makeWritingChart);
    }
}