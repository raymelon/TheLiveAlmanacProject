$('.yo div p').ready(function () {
    $('.yo div p').fadeOut(100).fadeIn(500);
});

$(".yo table").ready(function () {
    $(".yo table").fadeOut(100).fadeIn(500);
    $(".yo table").fadeOut(1000).fadeIn(100);
});

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

phProvinces = {
  "phProvinces": [
    {'title': 'Abra_(province)', 'iso': 'PH-ABR' },
    {'title': 'Agusan_del_Norte', 'iso': 'PH-AGN' },
    {'title': 'Agusan_del_Sur', 'iso': 'PH-AGS' },
    {'title': 'Aklan', 'iso': 'PH-AKL' },
    {'title': 'Albay', 'iso': 'PH-ALB' },
    {'title': 'Antique_(province)', 'iso': 'PH-ANT' },
    {'title': 'Apayao', 'iso': 'PH-APA' },
    {'title': 'Aurora_(province)', 'iso': 'PH-AUR' },
    {'title': 'Basilan', 'iso': 'PH-BAS' },
    {'title': 'Bataan', 'iso': 'PH-BAN' },
    {'title': 'Batanes', 'iso': 'PH-BTN' },
    {'title': 'Batangas', 'iso': 'PH-BTG' },
    {'title': 'Benguet', 'iso': 'PH-BEN' },
    {'title': 'Biliran', 'iso': 'PH-BIL' },
    {'title': 'Bohol', 'iso': 'PH-BOH' },
    {'title': 'Bukidnon', 'iso': 'PH-BUK' },
    {'title': 'Bulacan', 'iso': 'PH-BUL' },
    {'title': 'Cagayan', 'iso': 'PH-CAG' },
    {'title': 'Camarines_Norte', 'iso': 'PH-CAN' },
    {'title': 'Camarines_Sur', 'iso': 'PH-CAS' },
    {'title': 'Camiguin', 'iso': 'PH-CAM' },
    {'title': 'Capiz', 'iso': 'PH-CAP' },
    {'title': 'Catanduanes', 'iso': 'PH-CAT' },
    {'title': 'Cavite', 'iso': 'PH-CAV' },
    {'title': 'Cebu', 'iso': 'PH-CEB' },
    {'title': 'Compostela_Valley', 'iso': 'PH-COM' },
    {'title': 'Cotabato', 'iso': 'PH-NCO' },
    {'title': 'Davao_del_Norte', 'iso': 'PH-DAV' },
    {'title': 'Davao_del_Sur', 'iso': 'PH-DAS' },
    {'title': 'Davao_Occidental', 'iso': 'PH-DVO' },
    {'title': 'Davao_Oriental', 'iso': 'PH-DAO' },
    {'title': 'Dinagat_Islands', 'iso': 'PH-DIN' },
    {'title': 'Eastern_Samar', 'iso': 'PH-EAS' },
    {'title': 'Guimaras', 'iso': 'PH-GUI' },
    {'title': 'Ifugao', 'iso': 'PH-IFU' },
    {'title': 'Ilocos_Norte', 'iso': 'PH-ILN' },
    {'title': 'Ilocos_Sur', 'iso': 'PH-ILS' },
    {'title': 'Iloilo', 'iso': 'PH-ILI' },
    {'title': 'Isabela_(province)', 'iso': 'PH-ISA' },
    {'title': 'Kalinga_(province)', 'iso': 'PH-KAL' },
    {'title': 'La_Union', 'iso': 'PH-LUN' },
    {'title': 'Laguna_(province)', 'iso': 'PH-LAG' },
    {'title': 'Lanao_del_Norte', 'iso': 'PH-LAN' },
    {'title': 'Lanao_del_Sur', 'iso': 'PH-LAS' },
    {'title': 'Leyte_(province)', 'iso': 'PH-LEY' },
    {'title': 'Maguindanao', 'iso': 'PH-MAG' },
    {'title': 'Marinduque', 'iso': 'PH-MAD' },
    {'title': 'Masbate', 'iso': 'PH-MAS' },
    {'title': 'Misamis_Occidental', 'iso': 'PH-MSC' },
    {'title': 'Misamis_Oriental', 'iso': 'PH-MSR' },
    {'title': 'Occidental_Mindoro', 'iso': 'PH-MDC' },
    {'title': 'Oriental_Mindoro', 'iso': 'PH-MDR' },
    {'title': 'Mountain_Province', 'iso': 'PH-MOU' },
    {'title': 'Negros_Occidental', 'iso': 'PH-NEC' },
    {'title': 'Negros_Oriental', 'iso': 'PH-NER' },
    {'title': 'Northern_Samar', 'iso': 'PH-NSA' },
    {'title': 'Nueva_Ecija', 'iso': 'PH-NUE' },
    {'title': 'Nueva_Vizcaya', 'iso': 'PH-NUV' },
    {'title': 'Palawan', 'iso': 'PH-PLW' },
    {'title': 'Pampanga', 'iso': 'PH-PAM' },
    {'title': 'Pangasinan', 'iso': 'PH-PAN' },
    {'title': 'Quezon', 'iso': 'PH-QUE' },
    {'title': 'Quirino', 'iso': 'PH-QUI' },
    {'title': 'Rizal', 'iso': 'PH-RIZ' },
    {'title': 'Romblon', 'iso': 'PH-ROM' },
    {'title': 'Samar_(province)', 'iso': 'PH-WSA' },
    {'title': 'Sarangani', 'iso': 'PH-SAR' },
    {'title': 'Siquijor', 'iso': 'PH-SIG' },
    {'title': 'Sorsogon', 'iso': 'PH-SOR' },
    {'title': 'South_Cotabato', 'iso': 'PH-SCO' },
    {'title': 'Southern_Leyte', 'iso': 'PH-SLE' },
    {'title': 'Sultan_Kudarat', 'iso': 'PH-SUK' },
    {'title': 'Sulu', 'iso': 'PH-SLU' },
    {'title': 'Surigao_del_Norte', 'iso': 'PH-SUN' },
    {'title': 'Surigao_del_Sur', 'iso': 'PH-SUR' },
    {'title': 'Tarlac', 'iso': 'PH-TAR' },
    {'title': 'Tawi-Tawi', 'iso': 'PH-TAW' },
    {'title': 'Zambales', 'iso': 'PH-ZMB' },
    {'title': 'Zamboanga_del_Norte', 'iso': 'PH-ZAN' },
    {'title': 'Zamboanga_del_Sur', 'iso': 'PH-ZAS' },
    {'title': 'Zamboanga_Sibugay', 'iso': 'PH-ZSI' }
]};

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

function infoBox(areaCode) {
    this.wikiBaseUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';

    var wikiArticleTitle = phProvinces.phProvinces.filter(function(row) {
        return row.iso === areaCode;
    })[0].title;
  
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
                                $(".yo div").html("<p>" + right[0] + "</p>");
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
