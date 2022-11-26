chart = new Chart('PELChart', {
    type: 'bar',
    data: {
        labels: ["Pass", "Fail"],
        datasets: [
            {
                label: "Pass",
                data: [23, 12, 44],
                backgroundColor: 'rgba(0, 179, 60, 0.5)',
                hoverBackgroundColor: 'rgba(0, 179, 60, 1)',
                borderColor: 'rgba(0, 179, 60, 1)',
                borderWidth: 2,
                barPercentage: 0.6,
                categoryPercentage: 0.6,
            },
            {
                label: "Fail",
                data: [5, 65, 13],
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                hoverBackgroundColor: 'rgba(255, 0, 0, 1)',
                borderColor: 'rgba(255, 0, 0, 1)',
                borderWidth: 1,
                barPercentage: 0.6,
                categoryPercentage: 0.6,
                borderDashOffset: 0.5,
            }
        ]
    },
    options: {
        responsive: true,
        tooltips: {
            titleFontSize: 30,
        },
        scales: {
            x: {
                ticks: {
                    padding: 10,
                },
                title: {
                    display: true,
                    text: "Lunch Type",
                },
            },
            y: {
                ticks: {
                    padding: 10,
                },
                title: {
                    display: true,
                    text: "Number of Students",
                },
                offset: false,
            },
        },
    }
});