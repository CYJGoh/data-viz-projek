function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

function heatmapCreator(container, colour, csvPath, tooltipType, minValue) {
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
                min: minValue,
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
var heatmap1 = heatmapCreator('heatmapContainer1', '#003380', 'datasets/dataset2/studytimedata.csv', 'count', 0); //student count
var heatmap2 = heatmapCreator('heatmapContainer2', '#FF5630', 'datasets/dataset2/student_math_fail.csv', 'count', 0); //fail
var heatmap3 = heatmapCreator('heatmapContainer3', '#36B37E', 'datasets/dataset2/student_math_pass.csv', 'count', 0); //pass
var heatmap4 = heatmapCreator('heatmapContainer4', '#1d3ee8', 'datasets/dataset2/student_math_80.csv', 'count', 0); //>80%

// Portugese (Count) heatmaps
var heatmap5 = heatmapCreator('heatmapContainer5', '#003380', 'datasets/dataset2/student_por_count.csv', 'count', 0); //student count
var heatmap6 = heatmapCreator('heatmapContainer6', '#FF5630', 'datasets/dataset2/student_por_fail.csv', 'count', 0); //fail
var heatmap7 = heatmapCreator('heatmapContainer7', '#36B37E', 'datasets/dataset2/student_por_pass.csv', 'count', 0); //pass
var heatmap8 = heatmapCreator('heatmapContainer8', '#1d3ee8', 'datasets/dataset2/student_por_80.csv', 'count', 0); //>80%

// Math (Percentage) heatmaps
var heatmap9 = heatmapCreator('heatmapContainer9', '#003380', 'datasets/dataset2/studytimedata.csv', 'count', 0); //student count
var heatmap10 = heatmapCreator('heatmapContainer10', '#FF5630', 'datasets/dataset2/student_math_fail_percent.csv', 'percentage', 0); //fail
var heatmap11 = heatmapCreator('heatmapContainer11', '#36B37E', 'datasets/dataset2/student_math_pass_percent.csv', 'percentage', 45); //pass
var heatmap12 = heatmapCreator('heatmapContainer12', '#1d3ee8', 'datasets/dataset2/student_math_80_percent.csv', 'percentage', 0); //>80%

// Portugese (Percentage) heatmaps
var heatmap13 = heatmapCreator('heatmapContainer13', '#003380', 'datasets/dataset2/student_por_count.csv', 'count'); //student count
var heatmap14 = heatmapCreator('heatmapContainer14', '#FF5630', 'datasets/dataset2/student_por_fail_percent.csv', 'percentage', 0); //fail
var heatmap15 = heatmapCreator('heatmapContainer15', '#36B37E', 'datasets/dataset2/student_por_pass_percent.csv', 'percentage', 65); //pass
var heatmap16 = heatmapCreator('heatmapContainer16', '#1d3ee8', 'datasets/dataset2/student_por_80_percent.csv', 'percentage', 0); //>80%

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
        document.getElementById("portugese_percent").style.display = "none";
        document.getElementById("portugese_num").style.display = "block";
    } else if (myVal === "portugese2") {
        document.getElementById("math_num").style.display = "none";
        document.getElementById("math_percent").style.display = "none";
        document.getElementById("portugese_percent").style.display = "block";
        document.getElementById("portugese_num").style.display = "none";
    }
}