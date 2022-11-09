// load the data from csv
d3.csv('datasets/test_preparation_course_status.csv').then(makeChart);

// plot the data with Chart.js
function makeChart(students) {
    let delayed;

    // data for test preparation course status
    var genderLabels = students.map(function (d) {
        return d.gender;
    });
    var preparationComplete = students.map(function (d) {
        return +d.completed;
    });
    var preparationIncomplete = students.map(function (d) {
        return +d.incomplete;
    });


    // create new chart
    var chart = new Chart('myChart', {
        type: 'bar',
        data: {
            labels: genderLabels,
            datasets: [
                {
                    label: "Completed",
                    data: preparationComplete,
                    backgroundColor: 'rgba(0, 179, 60, 0.5)',
                    hoverBackgroundColor: 'rgba(0, 179, 60, 1)',
                    borderColor: 'rgba(0, 179, 60, 1)',
                    borderWidth: 2,
                    barPercentage: 0.6,
                    categoryPercentage: 0.6,
                },
                {
                    label: "Incomplete",
                    data: preparationIncomplete,
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
            // use this scale when dealing with money values on y axis
            /*scales: {
                y: {
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, ticks) {
                            return value + " students";
                        }
                    }
                }
            }*/
        }
    });
}