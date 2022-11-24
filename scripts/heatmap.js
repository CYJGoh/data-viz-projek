function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

document.addEventListener('DOMContentLoaded', function() {
    const chart = Highcharts.chart('container', {

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1
        },


        title: {
            text: 'Number of students who failed Maths according to their weekly study time and free time after school'
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
            maxColor: '#FF0000' //Highcharts.getOptions().colors[7]
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
        },

        tooltip: {
            formatter: function() {
                return '<b>' + getPointCategoryName(this.point, 'x') + '</b> sold <br><b>' +
                    this.point.value + '</b> items on <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
            }
        },

        series: [{
            name: 'Students failed according to their study time and free time',
            borderWidth: 1,
            data: [
                [0, 0, 0],
                [0, 1, 5],
                [0, 2, 14],
                [0, 3, 11],
                [0, 4, 7],
                [1, 0, 6],
                [1, 1, 7],
                [1, 2, 33],
                [1, 3, 21],
                [1, 4, 3],
                [2, 0, 0],
                [2, 1, 2],
                [2, 2, 7],
                [2, 3, 7],
                [2, 4, 0],
                [3, 0, 1],
                [3, 1, 1],
                [3, 2, 2],
                [3, 3, 2],
                [3, 4, 1]
            ],
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
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