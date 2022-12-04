import Highcharts from 'highcharts'
import xrange from 'highcharts/modules/xrange';
xrange(Highcharts);
const Configobj ={
    chart: {
        type: 'xrange'
        
    },
    title: {
        text: 'Highcharts X-range'
    },
    accessibility: {
        point: {
            descriptionFormatter: function (point) {
                var ix = point.index + 1,
                    category = point.yCategory,
                    from = new Date(point.x),
                    to = new Date(point.x2);
                return ix + '. ' + category + ', ' + from.toDateString() +
                    ' to ' + to.toDateString() + '.';
            }
        }
    },
    xAxis: {
        type: 'datetime'
    },
    yAxis: {
        title: {
            text: ''
        },
        categories: ['Даваа', 'Мягмар', 'Лхагва', 'Пүрэв','Баасан'],
        reversed: true
    },
    series: [{
        name: 'Project 1',
        // pointPadding: 0,
        // groupPadding: 0,
        borderColor: 'gray',
        pointWidth: 20,
        data: [{
            x: Date.UTC(2022, 11, 21),
            x2: Date.UTC(2022, 11, 30),
            y: 0,
            partialFill: 0.25
        }, {
            x: Date.UTC(2022, 11, 2),
            x2: Date.UTC(2022, 11, 5),
            y: 1
        }, {
            x: Date.UTC(2022, 11, 8),
            x2: Date.UTC(2022, 11, 9),
            y: 2
        }, {
            x: Date.UTC(2022, 11, 9),
            x2: Date.UTC(2022, 11, 19),
            y: 1
        }, {
            x: Date.UTC(2022, 11, 10),
            x2: Date.UTC(2022, 11, 23),
            y: 3
        },{
            x: Date.UTC(2022, 11, 23,8,30   ),
            x2: Date.UTC(2022, 11, 25),
                        y: 4
        }
    ],
        dataLabels: {
            enabled: true
        }
    }]
};

export default Configobj;