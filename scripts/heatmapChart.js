function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}


$.get("datasets/studytimedata.csv", function (CSVdata) {
    // CSVdata is populated with the file contents...
    // ...ready to be converted into an Array
    data = $.csv.toArrays(CSVdata);
    //parsed csv array's value is converted to actual numbers instead of string
    nums = data.map(arr => arr.map(value => Number(value)));

    Highcharts.chart('heatmapContainer', {
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
                descriptionFormatter: function (point) {
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
            formatter: function () {
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
});