function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

Highcharts.chart('heatmapContainer', {

    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1,
        backgroundColor: '#EFEFEF',
    },


    title: {
        text: 'Students study time by amount of free time'
    },

    xAxis: {
        categories: ['1hr Study Time', '2hrs Study Time', '3hrs Study Time', '4hrs Study Time']
    },

    yAxis: {
        categories: ['1hr Free Time', '2hrs Free Time', '3hrs Free Time', '4hrs Free Time', '5hrs Free Time'],
        title: null,
        reversed: true
    },

    accessibility: {
        point: {
            descriptionFormatter: function (point) {
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
        minColor: '#E6F0FF',
        maxColor: '#003380'
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
        formatter: function () {
            return '<b>' + getPointCategoryName(this.point, 'x') + '</b> for <br><b>' +
                this.point.value + '</b> student/s with <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
        }
    },

    series: [{
        name: 'Sales per employee',
        borderWidth: 1,
        data: [
            [0, 0, 2],
            [0, 1, 19],
            [0, 2, 35],
            [0, 3, 29],
            [0, 4, 20],
            [1, 0, 11],
            [1, 1, 28],
            [1, 2, 82],
            [1, 3, 61],
            [1, 4, 16],
            [2, 0, 3],
            [2, 1, 11],
            [2, 2, 29],
            [2, 3, 21],
            [2, 4, 1],
            [3, 0, 3],
            [3, 1, 6],
            [3, 2, 11],
            [3, 3, 4],
            [3, 4, 3],
        ],
        dataLabels: {
            enabled: true,
            color: '#000000'
        }
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 700
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        formatter: function () {
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