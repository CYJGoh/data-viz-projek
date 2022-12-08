$.get('datasets/dataset2/six_categories_fail.csv', function(CSVdata) {
    // CSVdata is populated with the file contents...
    // ...ready to be converted into an Array
    data = $.csv.toArrays(CSVdata);
    data[0].splice(0, 1); //Removes first item from first row

    var cat = data[0]; //Extract first row as x-axis categories
    data.splice(0, 1);

    for (var i = 0; i < data.length; i++) {
        data[i].splice(0, 1); //Removes first item from each row
    }

    data = data.map(arr => arr.map(value => Number(value))); //Converts data from string to numbers

    Highcharts.chart('sixCategoriesStackedBar1', {
        chart: {
            type: 'column',
            marginTop: 40,
            marginBottom: 80,
            backgroundColor: '#EFEFEF',
            height: 700
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: cat,
            title: {
                text: 'Categories'
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
                name: 'Yes',
                data: data[0]
            },
            {
                name: 'No',
                data: data[1]
            }
        ],

        credits: {
            enabled: false
        }

    });
});

$.get('datasets/dataset2/six_categories_pass.csv', function(CSVdata) {
    // CSVdata is populated with the file contents...
    // ...ready to be converted into an Array
    data = $.csv.toArrays(CSVdata);
    data[0].splice(0, 1); //Removes first item from first row

    var cat = data[0]; //Extract first row as x-axis categories
    data.splice(0, 1);

    for (var i = 0; i < data.length; i++) {
        data[i].splice(0, 1); //Removes first item from each row
    }

    data = data.map(arr => arr.map(value => Number(value))); //Converts data from string to numbers

    Highcharts.chart('sixCategoriesStackedBar2', {
        chart: {
            type: 'column',
            marginTop: 40,
            marginBottom: 80,
            backgroundColor: '#EFEFEF',
            height: 700
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: cat,
            title: {
                text: 'Categories'
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
                name: 'Yes',
                data: data[0]
            },
            {
                name: 'No',
                data: data[1]
            }
        ],

        credits: {
            enabled: false
        }

    });
});

$.get('datasets/dataset2/six_categories_fail_por.csv', function(CSVdata) {
    // CSVdata is populated with the file contents...
    // ...ready to be converted into an Array
    data = $.csv.toArrays(CSVdata);
    data[0].splice(0, 1); //Removes first item from first row

    var cat = data[0]; //Extract first row as x-axis categories
    data.splice(0, 1);

    for (var i = 0; i < data.length; i++) {
        data[i].splice(0, 1); //Removes first item from each row
    }

    data = data.map(arr => arr.map(value => Number(value))); //Converts data from string to numbers

    Highcharts.chart('sixCategoriesStackedBar3', {
        chart: {
            type: 'column',
            marginTop: 40,
            marginBottom: 80,
            backgroundColor: '#EFEFEF',
            height: 700
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: cat,
            title: {
                text: 'Categories'
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
                name: 'Yes',
                data: data[0]
            },
            {
                name: 'No',
                data: data[1]
            }
        ],

        credits: {
            enabled: false
        }

    });
});

$.get('datasets/dataset2/six_categories_pass_por.csv', function(CSVdata) {
    // CSVdata is populated with the file contents...
    // ...ready to be converted into an Array
    data = $.csv.toArrays(CSVdata);
    data[0].splice(0, 1); //Removes first item from first row

    var cat = data[0]; //Extract first row as x-axis categories
    data.splice(0, 1);

    for (var i = 0; i < data.length; i++) {
        data[i].splice(0, 1); //Removes first item from each row
    }

    data = data.map(arr => arr.map(value => Number(value))); //Converts data from string to numbers

    Highcharts.chart('sixCategoriesStackedBar4', {
        chart: {
            type: 'column',
            marginTop: 40,
            marginBottom: 80,
            backgroundColor: '#EFEFEF',
            height: 700
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: cat,
            title: {
                text: 'Categories'
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
                name: 'Yes',
                data: data[0]
            },
            {
                name: 'No',
                data: data[1]
            }
        ],

        credits: {
            enabled: false
        }

    });
});

function changeStackedChart() {
    var myVal = document.getElementById("stackedChoices").value;
    if (myVal === "math") {
        document.getElementById("sixCatMath").style.display = "block";
        document.getElementById("sixCatPor").style.display = "none";
    } else if (myVal === "portugese") {
        document.getElementById("sixCatMath").style.display = "none";
        document.getElementById("sixCatPor").style.display = "block";
    }

}