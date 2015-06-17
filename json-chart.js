$(function () {
    $.get('json-chart.json', function(file) {
        $('#chart').highcharts({
            chart: {zoomType: 'x'},
            title: {text: 'Microphone signal amplitude'},
            series: [{
                data: file.data
            }],
            credits: {enabled: false},
            legend: {enabled: false},
            yAxis: {title: {enabled: false}}
        });
    });
});