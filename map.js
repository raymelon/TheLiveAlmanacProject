
// https://editor.zinoui.com/Rd3

$('#ph-map').css("zoom", 1);

google.charts.load('visualization', '1', {packages: ['geochart']});
google.charts.setOnLoadCallback(drawPHMap);

//google.visualization.events.addListener(chart, 'ready', function() { $("#ph-map").css("zoom",1.4); });

// $('[name=region]:radio').click(function () {
//     options.region = $('[name=region]:radio:checked').attr('value');
//     chart.draw(result, options);
// });

// google.visualization.events.addListener(chart, 'select', function() { 
// 	$("#ph-map").css("zoom",1.4); 
// });

function drawPHMap() {
	var data = google.visualization.arrayToDataTable([
		['Name', 'Region', 'Region Number'],
		['PH-00', 'NCR', 0],
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
	 	['PH-15' , 'CAR', 16],
	]);

	var options = {region:'PH',
        resolution:'provinces',
        // displayMode: 'markers',
        sizeAxis: {
        	minValue: 0,
        	maxValue: 60
        },
        colorAxis: {
            minValue: 0,
            maxValue: 16
    	},
    	explorer: {
	        maxZoomOut:2,
	        keepInBounds: true
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
    	],
    	showLegend: true,
    	// showZoomOut: true,
    	// zoomOutLabel: 'Zoom Out',
    	// magnifyingGlass: {enable: true, zoomFactor: 7.5},


	};

	var chart = new google.visualization.GeoChart(document.getElementById('ph-map'));
	
	//google.visualization.events.addListener(chart, 'ready', function() { $("#ph-map").css("zoom",1.4); });
	chart.draw(data, options);
	google.visualization.events.addListener(chart, 'regionClick', function(eventData) { 
		// $("#ph-map").css("transform", "scale(1.4)");
		console.log(eventData);

		$("#ph-map").css("transform", "scale(.5)");
		$("#ph-map").css("float", "right");

		$('.details').html('<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=' + eventData.region + '&key=AIzaSyDFerPsMydkhGU9CAHQA8Xr1qtXh67oVM4" allowfullscreen></iframe>');
		// $('.details').css('style', 'block');
		// $('.details').css('z-index', '1');
		// $('#ph-map').css('z-index', '1');
	});
	//google.visualization.events.addListener(chart, 'ready', function() { $("#ph-map").css("zoom",1.4); });
}

// $('#zoom-out').click(function() { 
// 	$("#ph-map").css("transform", "scale(1)");

// });


// jQuery(function($) {
// 	var phMap = $('#ph-map').chartinator({

// 		columns: [
// 			{label: 'Name', type: 'string'},
// 			{label: 'Region', type: 'string'},
// 			{label: 'Region Number', type: 'number'},
// 		],

// 		rows: [
// 			['PH-00', 'NCR', 0],
// 	    	['PH-01' , 'REGION I', 1],
// 			['PH-02' , 'REGION II', 2],
// 			['PH-03' , 'REGION III', 3],
// 			['PH-40' , 'REGION IV-A', 4],
// 			['PH-41' , 'REGION IV-B', 5],
// 	        ['PH-05' , 'REGION V', 6],
// 	        ['PH-06' , 'REGION VI', 7],
// 	        ['PH-07' , 'REGION VII', 8],
// 	        ['PH-08' , 'REGION VIII', 9],
// 	        ['PH-09' , 'REGION IX', 10],
// 			['PH-10' , 'REGION X', 11],
// 			['PH-11' , 'REGION XI', 12],
// 			['PH-12' , 'REGION XII', 13],
// 			['PH-13' , 'CARAGA', 14],
// 	        ['PH-14' , 'ARMM', 15],
// 		 	['PH-15' , 'CAR', 16],
// 		],

// 		chartType: 'GeoChart',
// 		geochart: {
// 			// width: null,
// 			// height: 200,
// 			title: 'PH Live Almanac',
// 			region:'Philippines',
//         	resolution:'provinces',

// 			sizeAxis: {
// 	        	minValue: 0,
// 	        	maxValue: 60
// 	        },

// 			colorAxis: {
// 				minValue: 0,
//             	maxValue: 16,
// 				colors: [
// 		    		'#00FF00',
// 		    		'#de82fe',
// 		    		'#604762',
// 		    		'#da6064',
// 		    		'#64f582',
// 		    		'#a7d463',
// 		    		'#f3405f',
// 		    		'#d31ef8',
// 		    		'#b7a882',
// 		    		'#308aee',
// 		    		'#a2b473'
// 		    	],
// 		    },
// 		    tooltip: {
// 	            trigger: 'focus',
// 	        },
// 	        displayMode: 'markers',
// 		},
// 		//showTable: 'show'
// 	});
// 	console.log('DONE.');
// });
