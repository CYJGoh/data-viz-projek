var polarMathData = [
    [50, 25, 25, 20, 10],
    [101, 60, 55, 31, 18]
];

var polarMathDataPercent = [
    [33.11, 29.41, 31.25, 39.22, 35.71],
    [66.89, 70.59, 68.75, 60.78, 64.29],
];

var polarPorData = [
    [28, 21, 23, 16, 12],
    [219, 129, 97, 71, 33]
];

var polarPorDataPercent = [
    [11.34, 14, 19.17, 18.39, 26.67],
    [88.66, 86, 80.83, 81.61, 73.33],
];

function changePolar() {
    var myVal = document.getElementById("polarChoices").value;
    if (myVal === "count") {
        document.getElementById("polarChart1").style.display = "block";
        document.getElementById("polarChart2").style.display = "block";
        document.getElementById("polarChart3").style.display = "none";
        document.getElementById("polarChart4").style.display = "none";
    } else if (myVal === "percent") {
        document.getElementById("polarChart1").style.display = "none";
        document.getElementById("polarChart2").style.display = "none";
        document.getElementById("polarChart3").style.display = "block";
        document.getElementById("polarChart4").style.display = "block";
    }

}

Highcharts.chart('polarContainer1', {
    chart: {
        polar: true,
        type: 'line',
        marginTop: 40,
        marginBottom: 80,
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
        size: '85%'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 100,
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

    series: [{
            name: 'Students Failed',
            data: polarMathData[0]
        },
        {
            name: 'Students Passed',
            data: polarMathData[1]
        }
    ],

    credits: {
        enabled: false
    }

});

Highcharts.chart('polarContainer2', {
    chart: {
        polar: true,
        type: 'line',
        marginTop: 40,
        marginBottom: 80,
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
        size: '85%'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 100,
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

    series: [{
            name: 'Students Failed',
            data: polarPorData[0]
        },
        {
            name: 'Students Passed',
            data: polarPorData[1]
        }
    ],

    credits: {
        enabled: false
    }

});

Highcharts.chart('polarContainer3', {
    chart: {
        polar: true,
        type: 'line',
        marginTop: 40,
        marginBottom: 80,
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
        size: '85%'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 100,
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

    series: [{
            name: 'Students Failed',
            data: polarMathDataPercent[0]
        },
        {
            name: 'Students Passed',
            data: polarMathDataPercent[1]
        }
    ],

    credits: {
        enabled: false
    }

});

Highcharts.chart('polarContainer4', {
    chart: {
        polar: true,
        type: 'line',
        marginTop: 40,
        marginBottom: 80,
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
        size: '85%'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 100,
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

    series: [{
            name: 'Students Failed',
            data: polarPorDataPercent[0]
        },
        {
            name: 'Students Passed',
            data: polarPorDataPercent[1]
        }
    ],

    credits: {
        enabled: false
    }

});

var path = window.location.pathname;
console.log(window.location.origin + '/COS30045/data-viz-projek/datasets/dataset2/student_alcohol_math_fail.csv');