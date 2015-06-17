$(function () {
    $.get('data.json', function(file) {
        $('#chart').highcharts({
            chart: {zoomType: 'x'},
            title: {text: 'WoW Token Prices'},
            series: [{
                pointInterval: 60 * 60 * 1000, // 1 hour
                pointStart: 1428426758,
                data: file.data
            }],
            credits: {enabled: false},
            legend: {enabled: false},
            yAxis: {title: {text: 'Gold'}},
            xAxis: {type: 'datetime'}
        });
    });
});