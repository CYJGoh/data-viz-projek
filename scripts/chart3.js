// load the data from csv
d3.csv('datasets/lunch_dataset/exam_stats.csv').then(makeChart);

// plot the data with Chart.js
function makeChart(myData) {
    let delayed;

    // data for test preparation course status
    var lunchType = myData.map(function(d) {
        return d.exam;
    });

    // get pass & fail rate for Math exam
    var standardPass = myData.map(function(d) {
        return +d.standard_lunch_pass;
    });
    var standardFail = myData.map(function(d) {
        return +d.standard_lunch_fail;
    });

    // get pass & fail rate for Reading exam
    var freeReducedPass = myData.map(function(d) {
        return +d.free_reduced_lunch_pass;
    });
    var freeReducedFail = myData.map(function(d) {
        return +d.free_reduced_lunch_fail;
    });


    // create new chart
    var chart = new Chart('myChartLunch', {
        type: 'bar',
        data: {
            labels: lunchType,
            datasets: [{
                    label: "Standard Lunch Pass",
                    data: standardPass,
                    backgroundColor: 'rgba(0, 153, 0, 0.5)',
                    hoverBackgroundColor: 'rgba(0, 153, 0, 1)',
                    borderColor: 'rgba(0, 153, 0, 1)',
                    borderWidth: 2,
                    barPercentage: 0.9,
                    categoryPercentage: 0.9,
                },
                {
                    label: "Standard Lunch Fail",
                    data: standardFail,
                    backgroundColor: 'rgba(153, 0, 153, 0.5)',
                    hoverBackgroundColor: 'rgba(153, 0, 153, 1)',
                    borderColor: 'rgba(153, 0, 153, 1)',
                    borderWidth: 1,
                    barPercentage: 0.9,
                    categoryPercentage: 0.9,
                },
                {
                    label: "Free/Reduced Lunch Pass",
                    data: freeReducedPass,
                    backgroundColor: 'rgba(0, 77, 153, 0.5)',
                    hoverBackgroundColor: 'rgba(0, 77, 153, 1)',
                    borderColor: 'rgba(0, 77, 153, 1)',
                    borderWidth: 2,
                    barPercentage: 0.9,
                    categoryPercentage: 0.9,
                },
                {
                    label: "Free/Reduced Lunch Fail",
                    data: freeReducedFail,
                    backgroundColor: 'rgba(153, 77, 0, 0.5)',
                    hoverBackgroundColor: 'rgba(153, 77, 0, 1)',
                    borderColor: 'rgba(153, 77, 0, 1)',
                    borderWidth: 1,
                    barPercentage: 0.9,
                    categoryPercentage: 0.9,
                },
            ]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                x: {
                    ticks: {
                        padding: 0,
                    },
                    title: {
                        display: true,
                        text: "Exam Type",
                    },
                },
                y: {
                    ticks: {
                        padding: 0,
                    },
                    title: {
                        display: true,
                        text: "Number of Students",
                    },
                    offset: false,
                },
            },
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