function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}


$.get("datasets/studytimedata.csv", function(CSVdata) {
    // CSVdata is populated with the file contents...
    // ...ready to be converted into an Array
    data = $.csv.toArrays(CSVdata);
    //parsed csv array's value is converted to actual numbers instead of string
    nums = data.map(arr => arr.map(value => Number(value)));

    Highcharts.chart('heatmapContainer1', {
        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1,
            backgroundColor: '#EFEFEF',
            height: 700,
        },


        title: {
            text: ''
        },

        xAxis: {
            categories: ['< 2 hours', '2 to 5 hours', '5 to 10 hours', '> 10 Hours']
        },

        yAxis: {
            categories: ['Very Low', 'Low', 'Neutral', 'High', 'Very High'],
            title: null,
            reversed: true
        },

        accessibility: {
            point: {
                descriptionFormatter: function(point) {
                    var ix = point.index + 1,
                        xName = getPointCategoryName(point, 'x'),
                        yName = getPointCategoryName(point, 'y'),
                        val = point.value;
                    return ix + '. ' + xName + ' students ' + yName + ', ' + val + '.';
                }
            }
        },

        colorAxis: {
            min: 0,
            minColor: '#E6F0FF',
            maxColor: '#003380',
            reversed: false,
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 580
        },

        tooltip: {
            formatter: function() {
                return '<b>' + getPointCategoryName(this.point, 'x') + ' Study Time </b> for <br><b>' +
                    this.point.value + '</b> students with <br><b>' + getPointCategoryName(this.point, 'y') + ' Free Time </b>';
            }
        },

        series: [{
            name: 'Student Count',
            borderWidth: 1,
            data: nums,
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 900
                },
                chartOptions: {
                    yAxis: {
                        labels: {
                            formatter: function() {
                                return this.value.charAt(0);
                            }
                        }
                    }
                }
            }]
        },

        credits: {
            enabled: false
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const chart2 = Highcharts.chart('heatmapContainer2', {

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1,
            backgroundColor: '#EFEFEF',
            height: 700,
        },


        title: {
            text: 'Students who failed Maths by weekly study time and free time after school'
        },

        subtitle: {
            text: ''
        },

        xAxis: {
            categories: ['< 2 hours', '2 to 5 hours', '5 to 10 hours', '> 10 hours'],
            title: {
                text: "Weekly Study Time"
            }
        },

        yAxis: {
            categories: ['Very Low', 'Low', 'Neutral', 'High', 'Very High'],
            title: {
                text: "Free Time After School"
            },
        },

        accessibility: {
            point: {
                descriptionFormatter: function(point) {
                    var ix = point.index + 1,
                        xName = getPointCategoryName(point, 'x'),
                        yName = getPointCategoryName(point, 'y'),
                        val = point.value;
                    return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
                }
            }
        },

        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: '#FF0000'
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280,
            reversed: true
        },

        tooltip: {

            formatter: function() {
                return '<b>' + this.point.value + ' </b> students with <b>' + getPointCategoryName(this.point, 'y') + '</b> free time and <br><b>' +
                    getPointCategoryName(this.point, 'x') + '</b> weekly study time failed';
            }
        },

        data: {
            csvURL: window.location.origin + '/COS30045/data-viz-projek/datasets/student_math_fail.csv'
        },

        series: [{
            name: 'Students failed according to their study time and free time',
            borderWidth: 1,
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }],

        credits: {
            enabled: false
        },

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 900
                },
                chartOptions: {
                    yAxis: {
                        labels: {
                            formatter: function() {
                                return this.value.charAt(0);
                            }
                        }
                    }
                }
            }]
        }

    });
})

document.addEventListener('DOMContentLoaded', function() {
    const chart3 = Highcharts.chart('heatmapContainer3', {

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1,
            backgroundColor: '#EFEFEF',
            height: 700,
        },


        title: {
            text: 'Students who passed Maths by weekly study time and free time after school'
        },

        subtitle: {
            text: ''
        },

        xAxis: {
            categories: ['< 2 hours', '2 to 5 hours', '5 to 10 hours', '> 10 hours'],
            title: {
                text: "Weekly Study Time"
            }
        },

        yAxis: {
            categories: ['Very Low', 'Low', 'Neutral', 'High', 'Very High'],
            title: {
                text: "Free Time After School"
            },
        },

        accessibility: {
            point: {
                descriptionFormatter: function(point) {
                    var ix = point.index + 1,
                        xName = getPointCategoryName(point, 'x'),
                        yName = getPointCategoryName(point, 'y'),
                        val = point.value;
                    return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
                }
            }
        },

        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: '#00b33c'
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280,
            reversed: true
        },

        tooltip: {

            formatter: function() {
                return '<b>' + this.point.value + ' </b> students with <b>' + getPointCategoryName(this.point, 'y') + '</b> free time and <br><b>' +
                    getPointCategoryName(this.point, 'x') + '</b> weekly study time passed';
            }
        },

        data: {
            csvURL: window.location.origin + '/COS30045/data-viz-projek/datasets/student_math_pass.csv'
        },

        series: [{
            name: 'Students passed according to their study time and free time',
            borderWidth: 1,
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }],

        credits: {
            enabled: false
        },

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 900
                },
                chartOptions: {
                    yAxis: {
                        labels: {
                            formatter: function() {
                                return this.value.charAt(0);
                            }
                        }
                    }
                }
            }]
        }

    });
})

document.addEventListener('DOMContentLoaded', function() {
    const chart4 = Highcharts.chart('heatmapContainer4', {

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1,
            backgroundColor: '#EFEFEF',
            height: 700,
        },


        title: {
            text: 'Students who scored > 80% for Maths by weekly study time and free time after school'
        },

        subtitle: {
            text: ''
        },

        xAxis: {
            categories: ['< 2 hours', '2 to 5 hours', '5 to 10 hours', '> 10 hours'],
            title: {
                text: "Weekly Study Time"
            }
        },

        yAxis: {
            categories: ['Very Low', 'Low', 'Neutral', 'High', 'Very High'],
            title: {
                text: "Free Time After School"
            },
        },

        accessibility: {
            point: {
                descriptionFormatter: function(point) {
                    var ix = point.index + 1,
                        xName = getPointCategoryName(point, 'x'),
                        yName = getPointCategoryName(point, 'y'),
                        val = point.value;
                    return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
                }
            }
        },

        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: '#00b33c'
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280,
            reversed: true
        },

        tooltip: {

            formatter: function() {
                return '<b>' + this.point.value + ' </b> students with <b>' + getPointCategoryName(this.point, 'y') + '</b> free time and <br><b>' +
                    getPointCategoryName(this.point, 'x') + '</b> weekly study time passed';
            }
        },

        data: {
            csvURL: window.location.origin + '/COS30045/data-viz-projek/datasets/student_math_80.csv'
        },

        series: [{
            name: 'Students who scored > 80% according to their study time and free time',
            borderWidth: 1,
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }],

        credits: {
            enabled: false
        },

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 900
                },
                chartOptions: {
                    yAxis: {
                        labels: {
                            formatter: function() {
                                return this.value.charAt(0);
                            }
                        }
                    }
                }
            }]
        }

    });
})