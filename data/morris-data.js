$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            contas: 2666,
            atrassadas: null,
            pagas: 2647
        }, {
            period: '2010 Q2',
            contas: 2778,
            atrassadas: 2294,
            pagas: 2441
        }, {
            period: '2010 Q3',
            contas: 4912,
            atrassadas: 1969,
            pagas: 2501
        }, {
            period: '2010 Q4',
            contas: 3767,
            atrassadas: 3597,
            pagas: 5689
        }, {
            period: '2011 Q1',
            contas: 6810,
            atrassadas: 1914,
            pagas: 2293
        }, {
            period: '2011 Q2',
            contas: 5670,
            atrassadas: 4293,
            pagas: 1881
        }, {
            period: '2011 Q3',
            contas: 4820,
            atrassadas: 3795,
            pagas: 1588
        }, {
            period: '2011 Q4',
            contas: 15073,
            atrassadas: 5967,
            pagas: 5175
        }, {
            period: '2012 Q1',
            contas: 10687,
            atrassadas: 4460,
            pagas: 2028
        }, {
            period: '2012 Q2',
            contas: 8432,
            atrassadas: 5713,
            pagas: 1791
        }],
        xkey: 'period',
        ykeys: ['contas', 'atrassadas', 'pagas'],
        labels: ['Contas', 'Atrassadas', 'Pagas'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
