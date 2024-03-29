$('.yo div p').ready(function () {
    $('.yo div p').fadeOut(100).fadeIn(500);
});

$(".yo table").ready(function () {
    $(".yo table").fadeOut(100).fadeIn(500);
    $(".yo table").fadeOut(1000).fadeIn(100);
});

function collapseClick() {
    if ($("#collapse").text() === '▶') {
        $(".yo table").css('animation', 'none');
        $(".yo").css('width', '100%');
        $(".yo").css('z-index', '1');
        $("#ph-map").css('margin-left', '-30%');
        $("#collapse").text('◀');
    } else {
        $(".yo").css('width', '0');
        $(".yo").css('z-index', '0');
        $("#ph-map").css('margin-left', '0');
        $("#collapse").text('▶');
    }
}

function loadPopulationSheet(callback) {
    var tabletop1 = Tabletop.init({
        key: "10g7afHi53TaGfrujRldIzRO_Yv8fkqs0XS6Cz1fzx0U",
        callback: callback,
        simpleSheet: true
    });
}

function loadProvincesSheet(callback) {
    var tabletop2 = Tabletop.init({
        key: "1UBma8XcPbQwnVTKBn_lwj0CuKNunL3nlKS2y07FJd1Y",
        callback: callback,
        simpleSheet: true
    });
}

var needed = [
    ["name", "Name: "],
    ["official_name", "Official Name: "],
    ["native_name", "Native Name: "],
    ["nickname", "Nickname: "],
    ["motto", "Motto: "],
    ["image_skyline", ""],
    // ["established_date", "Founded: "],
    // ["established_date3", "Establised as city: "],
    //("leader_title",), // mayor
    ["leader_name", "Governor: "],
    //("leader_title2",), // vice mayor
    ["leader_name1", "Vice Governor: "],
    // ["area_total_km2", "Total square km: "],
    ["elevation_m", "Elevation in meters: "],
    ["timezone","Time Zone: "],
    ["utc_offset", "UTC: "]
];

function wikiLoader(url, callback) {
    this.docUrl =  url;
    $.ajax({
        url: this.docUrl,
        dataType: "jsonp",
        success: callback
    });
}

function provincesLoader() {
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=ISO_3166-2:PH",
        dataType: "jsonp",
        success: getProvinces
    });
    console.log("DONE.");
}

var phProvinces = null;
function getProvinces(json) {
    var id = Object.keys(json.query.pages)[0];
    var article = json.query.pages[id].revisions[0]['*'];
    provinces = article.split("===Provinces===")[1]
                            .split("; Notes")[0]
                            .split("|-");

    for(var i = 0; i < provinces.length; i++) {
        provinces[i] = provinces[i].split("|");
        for(var j = 0; j < provinces[i].length; j++) {
            provinces[i][j] = 
                provinces[i][j]
                    .trim()
                    .split('')
                    .filter(function(ch) {
                        return ch.search(/[^\{\}\[\]\n]/) !== -1;
                    })
                    .join('');
        }
        provinces[i] = provinces[i].filter(function (data) {
            return data.search("mono") === -1 && data !== '';
        });
    }
    provinces.push(["PH-00", "Metro_Manila", "National Capital Region", "00"]);
    // console.log(provinces);
    phProvinces = provinces;

    var randomColorMap = [];
    for (var i = 2; i < phProvinces.length; i++) {
        var end = phProvinces[i].length - 1;
        var region = phProvinces[i][end];
        region = region.replace('PH-', '').replace(').</ref>', '');

        switch (region) {
            case "40": region = "16"; break;
            case "41": region = "17"; break;
        }
        if (randomColorMap[region] === undefined) {
            randomColorMap[region] = getRandomColor();
        }
        var color = randomColorMap[region];
        map.dataProvider.areas.push({
            "id": phProvinces[i][0],
            "value": region,
            "color": color,
            // "groupID": "PH-" + region
        });

        var regionName = phProvinces[i][2].split(' ');
        if (regionName[1] !== undefined) {
            if (regionName[1].search('(region)') !== -1)
                regionName = regionName[0];
            else
                regionName = regionName.join('\n');
        }

        var data = {
            "title": regionName,
            "color": color
        };
        map.legend.data.splice(region, 1, data);
    }
    // console.log(map.legend.data);
    // console.log(randomColorMap);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var map = AmCharts.makeChart("ph-map", {
  "type": "map",
  "theme": "light",
  // "centerMap": false,
  "dataProvider": {
    "map": "philippinesHigh",
    // "getAreasFromMap": true,
    "areas": [{ 
        // "id": "PH-00",
        // "value": 00,
        // "color": "#e65100",
        // "groupID": "PH-00"
    }]
  },
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#e65100",
    "outlineColor": "#33691e",
    "outlineThickness": 1,
    "rollOverColor": "#e65100",
    // "color": "#33691e",
    // "colorSolid": "#e65100"
  },
  "listeners": [{
    "event": "clickMapObject",
    "method": function(e) {
        if (e.mapObject.objectType !== "MapArea")
            return;

        var area = e.mapObject;
        // console.log(area.id);
        $(".yo table").css('animation', 'none');
        // $(".yo").css('display', 'flex');
        $(".yo").css('width', '100%');
        $(".yo").css('z-index', '1');
        $("#ph-map").css('margin-left', '-30%');
        // $("#ph-map").css('width', '50%');
        // $(".yo").css('width', '50%');
        new infoBox(area.id);
    }
  }],
  "backgroundZoomsToTop": true,
  "colorSteps": 18, //81,
  "preventDragOut": true,

  "zoomControl": {
    "top": "35%",
    "left": "65%",
    "buttonSize": 60,
    "buttonBorderThickness": .8,
    "buttonFillColor": "#efebe9",
    "buttonRollOverColor": "#f5f5f5",
    "buttonBorderColor": "#616161",
    "buttonBorderAlpha": .8,
    "buttonIconColor": "#616161",
  },

  "balloon": {
    "adjustBorderColor": true,
    "fillColor": "#efebe9",
    "color": "#494949",
    "fillAlpha": .9,
    "cornerRadius": 5,
    "borderAlpha": 0,
    "shadowAlpha": .7,
    "shadowColor": "#494949",
    "verticalPadding": 12,
    "horizontalPadding": 18,
    "fontSize": 20
  },

  "fontFamily": "Roboto",
  "fontSize": 30,

  // "smallMap": {
  //   "enabled": true,
  //   "backgroundAlpha": 0.5,
  //   "mapColor": "#e65100",
  //   "top": 30,
  //   "left": 42,
  //   "right": NaN,
  //   "rectangleColor": "#33691e"
  // },
/*  "valueLegend": {
    "enabled": true
  },*/
  "legend": {
    "data": [],
    "color": "#494949",
    "fontSize": 10,
    // "align": "left",
    "autoMargins": false,
    "maxColumns": 1,
    "position": "absolute",
    "left": 510,
    "top": 0,
    "useMarkerColorForLabels": true,
    "backgroundAlpha": .4,
    "backgroundColor": "#efebe9",
    "showEntries": false
  },
  "creditsPosition": "bottom-left"
});

provincesLoader();

function infoBox(areaCode) {

    this.wikiBaseUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';

    // var wikiArticleTitle = phProvinces.phProvinces.filter(function (row) {
    //     return row.iso === areaCode;
    // })[0].title;

    var wikiArticleTitle = phProvinces.filter(function (province) {
        return province[0] === areaCode;
    })[0][1];

    var temp = wikiArticleTitle.split(' ');

    if (temp[0] === "Mindoro") {
        [temp[0], temp[1]] = [temp[1], temp[0]];
        wikiArticleTitle = temp.join(' ');

    } else if (wikiArticleTitle.search("Sulu") !== -1) {
        wikiArticleTitle = "Sulu";
    }

    console.log(wikiArticleTitle);
  
    var phArea = new wikiLoader(this.wikiBaseUrl + wikiArticleTitle, function(json) {
        var id = Object.keys(json.query.pages)[0];
        var article = json.query.pages[id].revisions[0]['*'];

        var infoBox = article.split("<!-- Infobox Ends -->");
        var chunks = infoBox[0].split("\n|");
        
        $(".yo table").html("");

        chunks.forEach(function(chunk) {
            var row = chunk.split("=");

            if (row[0] !== undefined)
                var key = row[0].trim();

            var needLabel = undefined;
            for(var n = 0; n < needed.length; n++) {
                if (needed[n][0] === key) {
                    needLabel = needed[n][1];
                    break;
                }
            }

            // console.log(needLabel + "'" + row[1] + "'");

            if (row[1] !== ' ' && row[1] !== '')
            if (needLabel !== undefined) {
                if (row[1] !== undefined) {
                    var val = row[1].trim();

                    right = val.split("(");

                    if (key === 'image_skyline') {
                        // var imag = right[0];
                        // imag = imag.split(' ').join('_');
                        // imag = "<img src='https://en.wikipedia.org/wiki/File:".concat(imag).concat("#/media/File:").concat(imag).concat("'>");
                        // console.log(imag);
                        // $(".yo div").append(imag);
                    } else {

                        right[0] = right[0].split('').filter(function (nick) {
                                return nick.search(/[\w\s\d\.,]/) != -1;
                        }).join('');

                        switch(key) {
                            case 'name': 

                                var region = phProvinces.filter(function (province) {
                                    return province[0] === areaCode;
                                })[0];

                                if (region[2] === right[0])
                                    region = region[3];
                                else
                                    region = region[2];

                                $(".yo div").html("<p>" + right[0] + "</p>");
                                $(".yo div").append("<p style='font-size:22px; padding-left:5%; font-weight:lighter;'>" + region + "</p>");
                                $('.yo div p').fadeOut(10).fadeIn(500);
                                $(".yo table").fadeOut(10).fadeIn(500);
                                break;
                            case 'timezone': 
                                right[0] = 'Philippine Standard Time (PST)';
                                break;
                            // case 'nickname':
                            //     var nickname = 
                            //         right[0]
                            //         .split('')
                            //         .filter(function (nick) {
                            //             return nick.search(/[\w\s\d]/) != -1;
                            //         }).join('');
                            //     right[0] = nickname;
                            //     break;
                        }

                        $(".yo table").append("<tr><td class='left'>" 
                            /*+ needed[n][1] */ + needLabel
                            + "</td>" 
                            + "<td class='right'>" 
                            + right[0] 
                            + "</td></tr>");
                    }
                }
            }
        });

        loadPopulationSheet(function(populationSheet, tabletop1) {
            for (var row in populationSheet) {
                if (populationSheet[row].Province === $(".yo div p").text()) {
                    $(".yo table").append("<tr><td class='left'>Population: </td><td class='right'>" 
                        +  populationSheet[row].Population + "</td></tr>");
                }
            }
        });

        loadProvincesSheet(function(provincesSheet, tabletop2) {
            for (var row in provincesSheet) {
                if (areaCode === provincesSheet[row]['ISO[4]']) {
                    $(".yo table").append("<tr><td class='left'>Population %: </td><td class='right'>" 
                            +  provincesSheet[row]['Population[5]'] + "</td></tr>");

                    $(".yo table").append("<tr><td class='left'>Area: </td><td class='right'>" 
                            +  provincesSheet[row]['Area[6]'] + "</td></tr>");

                    $(".yo table").append("<tr><td class='left'>Density: </td><td class='right'>" 
                            +  provincesSheet[row]['Density'] + "</td></tr>");

                    $(".yo table").append("<tr><td class='left'>ISO: </td><td class='right'>" 
                            +  provincesSheet[row]['ISO[4]'] + "</td></tr>");

                    $(".yo table").append("<tr><td class='left'>LGUs: </td><td class='right'>" 
                            +  provincesSheet[row]['Town'] + "</td></tr>");

                    $(".yo table").append("<tr><td class='left'>Capital: </td><td class='right'>" 
                            +  provincesSheet[row]['Capital'] + "</td></tr>");

                    $(".yo table").append("<tr><td class='left'>Founded: </td><td class='right'>" 
                            +  provincesSheet[row]['Division'] + "</td></tr>");
                }
            }
        });

        var municipalities = new wikiLoader("https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=List_of_cities_and_municipalities_in_the_Philippines", function(json) {
            var id = Object.keys(json.query.pages)[0];
            var article = json.query.pages[id].revisions[0]['*'];
            var chunks = article.split("|");

            var provinceName = wikiArticleTitle;
            provinceName = provinceName.split('_').join(' ');
            provinceName = provinceName.split('(')[0];
            provinceName = provinceName.slice(0, provinceName.length - 1);

            var results = chunks.filter(function(row) {
                return row.includes(', ' + provinceName);
            });
            
            $(".yo table").append("<tr><td class='left'>Municipalities:</td><td class='right'>" 
                    + results.length + "</td></tr>");

            results.forEach(function(result) {
                var municipality = result.slice(3).split(',')[0];
                $(".yo table").append("<tr><td class='left'></td><td class='right'>" 
                    + municipality + "</td></tr>");
            });
        });

    });
}
