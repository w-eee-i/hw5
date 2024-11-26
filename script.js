Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: '2023來台旅客國籍統計表'
    },
    tooltip: {
        valueSuffix: '人'
    },
    subtitle: {
        text:
        'Source:台灣觀光署'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: '人數',
            colorByPoint: true,
            data: [
                {
                    name: '亞洲地區',
                    y:   504787 ,
                     sliced: true,
                    selected: true
                },
                {
                    name: '非洲地區',
                    y:   9510 
                },
                {
                    name: '美洲地區',
                    y:   670162 
                },
                {
                    name: '大洋洲地區',
                    y:   113772 
                },
                {
                    name: '歐洲地區',
                    y:   33642 
                },
                {
                    name: '其他未列明',
                    y:   854 
                }
            ]
        }
    ]
});