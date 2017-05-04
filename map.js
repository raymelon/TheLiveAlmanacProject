
$('#ph-map').css("zoom", 1);

google.charts.load('visualization', '1', {packages: ['geochart']});
google.charts.setOnLoadCallback(drawPHMap);

//google.visualization.events.addListener(chart, 'ready', function() { $("#ph-map").css("zoom",1.4); });

function drawPHMap() {
	var data = google.visualization.arrayToDataTable([
		['Region Name', 'Region Code', 'Region Number'],
		['PH-00' , 'NCR', 0],
    	['PH-01' , 'REGION I', 1],
		['PH-02' , 'REGION II', 2],
		['PH-03' , 'REGION III', 3],
		['PH-40' , 'REGION IV-A', 4],
		['PH-41' , 'REGION IV-B', 5],
        ['PH-05' , 'REGION V', 6],
        ['PH-06' , 'REGION VI', 7],
        ['PH-07' , 'REGION VII', 8],
        ['PH-08' , 'REGION VIII', 9],
        ['PH-09' , 'REGION IX', 10],
		['PH-10' , 'REGION X', 11],
		['PH-11' , 'REGION XI', 12],
		['PH-12' , 'REGION XII', 13],
		['PH-13' , 'CARAGA', 14],
        ['PH-14' , 'ARMM', 15],
	 	['PH-15' , 'CAR', 16]
	]);

	var options = {region:'PH',
        resolution:'provinces',
        colorAxis: {
            minValue: 0,
            maxValue: 16
    	},
    	colors: [
    		'#00FF00',
    		'#de82fe',
    		'#604762',
    		'#da6064',
    		'#64f582',
    		'#a7d463',
    		'#f3405f',
    		'#d31ef8',
    		'#b7a882',
    		'#308aee',
    		'#a2b473'
    	]
	};

	var chart = new google.visualization.GeoChart(document.getElementById('ph-map'));
	
	//google.visualization.events.addListener(chart, 'ready', function() { $("#ph-map").css("zoom",1.4); });
	chart.draw(data, options);

	//google.visualization.events.addListener(chart, 'ready', function() { $("#ph-map").css("zoom",1.4); });
}
