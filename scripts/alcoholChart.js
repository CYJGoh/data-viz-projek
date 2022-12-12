$.get('datasets/dataset2/alcohol_math.csv', function(CSVdata) {
    // CSVdata is populated with the file contents...
    // ...ready to be converted into an Array
    data = $.csv.toArrays(CSVdata);
    data.splice(0, 1); //Removes first row

    for (var i = 0; i < data.length; i++) {
        data[i].splice(0, 1); //Removes first item from each row
    }

    data = data.map(arr => arr.map(value => Number(value))); //Converts data from string to numbers

    Highcharts.chart('polarContainer1', {
        chart: {
            polar: true,
            type: 'line',
            backgroundColor: '#EFEFEF',
            height: 700,
        },

        title: {
            text: '',
        },

        subtitle: {
            text: ''
        },

        pane: {
            size: '90%'
        },

        legend: {
            align: 'right',
            verticalAlign: 'bottom',
            layout: 'vertical'
        },

        xAxis: {
            categories: ['Very Low', 'Low', 'Neutral', 'High', 'Very High'],
            tickmarkPlacement: 'on'
        },

        yAxis: {
            min: 0,
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
        },

        tooltip: {
            shared: true,
            valueSuffix: ' students'
        },

        colors: [
            '#36B37E',
            '#CC0000'
        ],

        series: [{
                name: 'Students Passed',
                data: data[1]
            },
            {
                name: 'Students Failed',
                data: data[0]
            }
        ],

        credits: {
            enabled: false
        }

    });

});

$.get('datasets/dataset2/alcohol_por.csv', function(CSVdata) {
    // CSVdata is populated with the file contents...
    // ...ready to be converted into an Array
    data = $.csv.toArrays(CSVdata);
    data.splice(0, 1); //Removes first row

    for (var i = 0; i < data.length; i++) {
        data[i].splice(0, 1); //Removes first item from each row
    }

    data = data.map(arr => arr.map(value => Number(value))); //Converts data from string to numbers

    Highcharts.chart('polarContainer2', {
        chart: {
            polar: true,
            type: 'line',
            backgroundColor: '#EFEFEF',
            height: 700,
        },

        title: {
            text: '',
        },

        subtitle: {
            text: ''
        },

        pane: {
            size: '90%'
        },

        legend: {
            align: 'right',
            verticalAlign: 'bottom',
            layout: 'vertical'
        },

        xAxis: {
            categories: ['Very Low', 'Low', 'Neutral', 'High', 'Very High'],
            tickmarkPlacement: 'on'
        },

        yAxis: {
            min: 0,
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
        },

        tooltip: {
            shared: true,
            valueSuffix: ' students'
        },

        colors: [
            '#36B37E',
            '#CC0000'
        ],

        series: [{
                name: 'Students Passed',
                data: data[1]
            },
            {
                name: 'Students Failed',
                data: data[0]
            }
        ],

        credits: {
            enabled: false
        }

    });

});

$.get('datasets/dataset2/alcohol_math_percent.csv', function(CSVdata) {
    // CSVdata is populated with the file contents...
    // ...ready to be converted into an Array
    data = $.csv.toArrays(CSVdata);
    data.splice(0, 1); //Removes first row

    for (var i = 0; i < data.length; i++) {
        data[i].splice(0, 1); //Removes first item from each row
    }

    data = data.map(arr => arr.map(value => Number(value))); //Converts data from string to numbers

    Highcharts.chart('stackedContainer1', {
        chart: {
            type: 'column',
            marginTop: 40,
            marginBottom: 100,
            backgroundColor: '#EFEFEF',
            height: 700
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Very Low', 'Low', 'Neutral', 'High', 'Very High'],
            title: {
                text: 'Weekend Alcohol Consumption'
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'Percentage of Students'
            }
        },
        legend: {
            align: 'right',
            floating: true,
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        colors: [
            '#36B37E',
            '#CC0000'
        ],
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}%<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },

        series: [{
                name: 'Students Passed',
                data: data[1]
            },
            {
                name: 'Students Failed',
                data: data[0]
            }
        ],

        credits: {
            enabled: false
        }

    });

});

$.get('datasets/dataset2/alcohol_por_percent.csv', function(CSVdata) {
    // CSVdata is populated with the file contents...
    // ...ready to be converted into an Array
    data = $.csv.toArrays(CSVdata);
    data.splice(0, 1); //Removes first row

    for (var i = 0; i < data.length; i++) {
        data[i].splice(0, 1); //Removes first item from each row
    }

    data = data.map(arr => arr.map(value => Number(value))); //Converts data from string to numbers

    Highcharts.chart('stackedContainer2', {
        chart: {
            type: 'column',
            marginTop: 40,
            marginBottom: 100,
            backgroundColor: '#EFEFEF',
            height: 700
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Very Low', 'Low', 'Neutral', 'High', 'Very High'],
            title: {
                text: 'Weekend Alcohol Consumption'
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'Percentage of Students'
            }
        },
        legend: {
            align: 'right',
            floating: true,
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        colors: [
            '#36B37E',
            '#CC0000'
        ],
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}%<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },

        series: [{
                name: 'Students Passed',
                data: data[1]
            },
            {
                name: 'Students Failed',
                data: data[0]
            }
        ],

        credits: {
            enabled: false
        }

    });

});

function changeAlcoholChart() {
    var myVal = document.getElementById("polarChoices").value;
    if (myVal === "count") {
        document.getElementById("polarChart1").style.display = "block";
        document.getElementById("polarChart2").style.display = "block";
        document.getElementById("stackedChart1").style.display = "none";
        document.getElementById("stackedChart2").style.display = "none";
    } else if (myVal === "percent") {
        document.getElementById("polarChart1").style.display = "none";
        document.getElementById("polarChart2").style.display = "none";
        document.getElementById("stackedChart1").style.display = "block";
        document.getElementById("stackedChart2").style.display = "block";
    }

}