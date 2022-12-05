function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

function heatmapCreator(container, colour, csvPath, tooltipType) {
    $.get(csvPath, function(CSVdata) {
        // CSVdata is populated with the file contents...
        // ...ready to be converted into an Array
        data = $.csv.toArrays(CSVdata);
        //parsed csv array's value is converted to actual numbers instead of string
        nums = data.map(arr => arr.map(value => Number(value)));

        Highcharts.chart(container, {
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
                categories: ['< 2 hours', '2 to 5 hours', '5 to 10 hours', '> 10 Hours'],
                title: {
                    text: "Weekly Study Time"
                }
            },

            yAxis: {
                categories: ['Very Low', 'Low', 'Neutral', 'High', 'Very High'],
                title: {
                    text: "Free Time After School"
                }
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
                maxColor: colour,
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
                    if (tooltipType == "count") {
                        return '<b>' + this.point.value + ' </b> students with <b>' + getPointCategoryName(this.point, 'y') + '</b> free time and <br><b>' +
                            getPointCategoryName(this.point, 'x') + '</b> weekly study time';
                    } else if (tooltipType == "percentage") {
                        return '<b>' + this.point.value + '% </b> of students with <b>' + getPointCategoryName(this.point, 'y') + '</b> free time and <br><b>' +
                            getPointCategoryName(this.point, 'x') + '</b> weekly study time';
                    }

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
}

// Math (Count) heatmaps
var heatmap1 = heatmapCreator('heatmapContainer1', '#003380', 'datasets/dataset2/studytimedata.csv', 'count'); //student count
var heatmap2 = heatmapCreator('heatmapContainer2', '#FF0000', 'datasets/dataset2/student_math_fail.csv', 'count'); //fail
var heatmap3 = heatmapCreator('heatmapContainer3', '#00b33c', 'datasets/dataset2/student_math_pass.csv', 'count'); //pass
var heatmap4 = heatmapCreator('heatmapContainer4', '#1d3ee8', 'datasets/dataset2/student_math_80.csv', 'count'); //>80%

// Portugese (Count) heatmaps
var heatmap5 = heatmapCreator('heatmapContainer5', '#003380', 'datasets/dataset2/student_por_count.csv', 'count'); //student count
var heatmap6 = heatmapCreator('heatmapContainer6', '#FF0000', 'datasets/dataset2/student_por_fail.csv', 'count'); //fail
var heatmap7 = heatmapCreator('heatmapContainer7', '#00b33c', 'datasets/dataset2/student_por_pass.csv', 'count'); //pass
var heatmap8 = heatmapCreator('heatmapContainer8', '#1d3ee8', 'datasets/dataset2/student_por_80.csv', 'count'); //>80%

// Math (Percentage) heatmaps
var heatmap9 = heatmapCreator('heatmapContainer9', '#003380', 'datasets/dataset2/studytimedata.csv', 'count'); //student count
var heatmap10 = heatmapCreator('heatmapContainer10', '#FF0000', 'datasets/dataset2/student_math_fail_percent.csv', 'percentage'); //fail
var heatmap11 = heatmapCreator('heatmapContainer11', '#00b33c', 'datasets/dataset2/student_math_pass_percent.csv', 'percentage'); //pass
var heatmap12 = heatmapCreator('heatmapContainer12', '#1d3ee8', 'datasets/dataset2/student_math_80_percent.csv', 'percentage'); //>80%

// Portugese (Percentage) heatmaps
var heatmap13 = heatmapCreator('heatmapContainer13', '#003380', 'datasets/dataset2/student_por_count.csv', 'count'); //student count
var heatmap14 = heatmapCreator('heatmapContainer14', '#FF0000', 'datasets/dataset2/student_por_fail_percent.csv', 'percentage'); //fail
var heatmap15 = heatmapCreator('heatmapContainer15', '#00b33c', 'datasets/dataset2/student_por_pass_percent.csv', 'percentage'); //pass
var heatmap16 = heatmapCreator('heatmapContainer16', '#1d3ee8', 'datasets/dataset2/student_por_80_percent.csv', 'percentage'); //>80%

// function to switch between charts when selecting an option from dropdown menu
function changeHeatmap() {
    var myVal = document.getElementById("heatmapChoices").value;
    if (myVal === "math1") {
        document.getElementById("math_num").style.display = "block";
        document.getElementById("math_percent").style.display = "none";
        document.getElementById("portugese_percent").style.display = "none";
        document.getElementById("portugese_num").style.display = "none";
    } else if (myVal === "math2") {
        document.getElementById("math_num").style.display = "none";
        document.getElementById("math_percent").style.display = "block";
        document.getElementById("portugese_percent").style.display = "none";
        document.getElementById("portugese_num").style.display = "none";
    } else if (myVal === "portugese1") {
        document.getElementById("math_num").style.display = "none";
        document.getElementById("math_percent").style.display = "none";
        document.getElementById("portugese_percent").style.display = "block";
        document.getElementById("portugese_num").style.display = "none";
    } else if (myVal === "portugese2") {
        document.getElementById("math_num").style.display = "none";
        document.getElementById("math_percent").style.display = "none";
        document.getElementById("portugese_percent").style.display = "none";
        document.getElementById("portugese_num").style.display = "block";
    }
}


// Archivess
/* document.addEventListener('DOMContentLoaded', function() {
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
            maxColor: '#FF0000',
            reversed: false,
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 580,
            reversed: true
        },

        tooltip: {

            formatter: function() {
                return '<b>' + this.point.value + ' </b> students with <b>' + getPointCategoryName(this.point, 'y') + '</b> free time and <br><b>' +
                    getPointCategoryName(this.point, 'x') + '</b> weekly study time failed';
            }
        },

        data: {
            csvURL: window.location.origin + '/datasets/student_math_fail.csv'
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
}) */