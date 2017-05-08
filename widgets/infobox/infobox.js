phProvinces = {
  "phProvinces": [
    {'title':'Abra_(province)', 'iso':'PH-ABR'},
    {'title':'Agusan_del_Norte', 'iso':'PH-AGN'},
    {'title':'Agusan_del_Sur', 'iso':'PH-AGS'},
    {'title':'Aklan', 'iso':'PH-AKL'},
    {'title':'Albay', 'iso':'PH-ALB'},
    {'title':'Antique_(province)', 'iso':'PH-ANT'},
    {'title':'Apayao', 'iso':'PH-APA'},
    {'title':'Aurora_(province)', 'iso':'PH-AUR'},
    {'title':'Basilan', 'iso':'PH-BAS'},
    {'title':'Bataan', 'iso':'PH-BAN'},
    {'title':'Batanes', 'iso':'PH-BTN'},
    {'title':'Batangas', 'iso':'PH-BTG'},
    {'title':'Benguet', 'iso':'PH-BEN'},
    {'title':'Biliran', 'iso':'PH-BIL'},
    {'title':'Bohol', 'iso':'PH-BOH'},
    {'title':'Bukidnon', 'iso':'PH-BUK'},
    {'title':'Bulacan', 'iso':'PH-BUL'},
    {'title':'Cagayan', 'iso':'PH-CAG'},
    {'title':'Camarines_Norte', 'iso':'PH-CAN'},
    {'title':'Camarines_Sur', 'iso':'PH-CAS'},
    {'title':'Camiguin', 'iso':'PH-CAM'},
    {'title':'Capiz', 'iso':'PH-CAP'},
    {'title':'Catanduanes', 'iso':'PH-CAT'},
    {'title':'Cavite', 'iso':'PH-CAV'},
    {'title':'Cebu', 'iso':'PH-CEB'},
    {'title':'Compostela_Valley', 'iso':'PH-COM'},
    {'title':'Cotabato', 'iso':'PH-NCO'},
    {'title':'Davao_del_Norte', 'iso':'PH-DAV'},
    {'title':'Davao_del_Sur', 'iso':'PH-DAS'},
    {'title':'Davao_Occidental', 'iso':'PH-DVO'},
    {'title':'Davao_Oriental', 'iso':'PH-DAO'},
    {'title':'Dinagat_Islands', 'iso':'PH-DIN'},
    {'title':'Eastern_Samar', 'iso':'PH-EAS'},
    {'title':'Guimaras', 'iso':'PH-GUI'},
    {'title':'Ifugao', 'iso':'PH-IFU'},
    {'title':'Ilocos_Norte', 'iso':'PH-ILN'},
    {'title':'Ilocos_Sur', 'iso':'PH-ILS'},
    {'title':'Iloilo', 'iso':'PH-ILI'},
    {'title':'Isabela_(province)', 'iso':'PH-ISA'},
    {'title':'Kalinga_(province)', 'iso':'PH-KAL'},
    {'title':'La_Union', 'iso':'PH-LUN'},
    {'title':'Laguna_(province)', 'iso':'PH-LAG'},
    {'title':'Lanao_del_Norte', 'iso':'PH-LAN'},
    {'title':'Lanao_del_Sur', 'iso':'PH-LAS'},
    {'title':'Leyte_(province)', 'iso':'PH-LEY'},
    {'title':'Maguindanao', 'iso':'PH-MAG'},
    {'title':'Marinduque', 'iso':'PH-MAD'},
    {'title':'Masbate', 'iso':'PH-MAS'},
    {'title':'Misamis_Occidental', 'iso':'PH-MDC'},
    {'title':'Misamis_Oriental', 'iso':'PH-MDR'},
    {'title':'Mountain_Province', 'iso':'PH-MSC'},
    {'title':'Negros_Occidental', 'iso':'PH-MSR'},
    {'title':'Negros_Oriental', 'iso':'PH-MOU'},
    {'title':'Northern_Samar', 'iso':'PH-NEC'},
    {'title':'Nueva_Ecija', 'iso':'PH-NER'},
    {'title':'Nueva_Vizcaya', 'iso':'PH-NSA'},
    {'title':'Occidental_Mindoro', 'iso':'PH-NUE'},
    {'title':'Oriental_Mindoro', 'iso':'PH-NUV'},
    {'title':'Palawan', 'iso':'PH-PLW'},
    {'title':'Pampanga', 'iso':'PH-PAM'},
    {'title':'Pangasinan', 'iso':'PH-PAN'},
    {'title':'Quezon', 'iso':'PH-QUE'},
    {'title':'Quirino', 'iso':'PH-QUI'},
    {'title':'Rizal', 'iso':'PH-RIZ'},
    {'title':'Romblon', 'iso':'PH-ROM'},
    {'title':'Samar_(province)', 'iso':'PH-WSA'},
    {'title':'Sarangani', 'iso':'PH-SAR'},
    {'title':'Siquijor', 'iso':'PH-SIG'},
    {'title':'Sorsogon', 'iso':'PH-SOR'},
    {'title':'South_Cotabato', 'iso':'PH-SCO'},
    {'title':'Southern_Leyte', 'iso':'PH-SLE'},
    {'title':'Sultan_Kudarat', 'iso':'PH-SUK'},
    {'title':'Sulu', 'iso':'PH-SLU'},
    {'title':'Surigao_del_Norte', 'iso':'PH-SUN'},
    {'title':'Surigao_del_Sur', 'iso':'PH-SUR'},
    {'title':'Tarlac', 'iso':'PH-TAR'},
    {'title':'Tawi-Tawi', 'iso':'PH-TAW'},
    {'title':'Zambales', 'iso':'PH-ZMB'},
    {'title':'Zamboanga_del_Norte', 'iso':'PH-ZAN'},
    {'title':'Zamboanga_del_Sur', 'iso':'PH-ZAS'},
    {'title':'Zamboanga_Sibugay', 'iso':'PH-ZSI'}
]};

var needed = [
    ["name", "Name: "],
    ["official_name", "Official Name: "],
    //["native_name", "Native Name: "],
    ["nickname", "Nickname: "],
    // ["motto", "Motto: "],
    // ["established_date2", "Founded: "],
    // ["established_date3", "Establised as city: "],
    //("leader_title",), // mayor
    ["leader_name", "Governor: "],
    //("leader_title2",), // vice mayor
    ["leader_name1", "Vice Governor: "],
    ["area_total_km2", "Total square km: "],
    ["elevation_m", "Elevation in meters: "],
    ["timezone","Time Zone: "],
    ["utc_offset", "UTC: "]
];

function phUnit(url, callback) {
    this.docUrl =  url;
    $.ajax({
        url: this.docUrl,
        dataType: "jsonp",
        success: callback
    });
}

function infoBox(areaCode) {
    this.wikiBaseUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';

    this.wikiArticleTitle = phProvinces.phProvinces.filter(function(row) {
        return row.iso === areaCode;
    })[0].title;
  
  // console.log(this.wikiBaseUrl + this.wikiArticleTitle)
  new phUnit(this.wikiBaseUrl + this.wikiArticleTitle, function(json) {
    var id = Object.keys(json.query.pages)[0];
    var article = json.query.pages[id].revisions[0]['*'];

    var infoBox = article.split("<!-- Infobox Ends -->");
    var chunks = infoBox[0].split("\n|");
  
    // console.log(chunks);
    
    var n = 0;
    chunks.forEach(function(chunk) {
    //for(var c = 0; c < chunks.length; c++) {
        var row = chunk.split("=");

        if (row[0] !== undefined)
            var key = row[0].trim();

        if (row[1] !== undefined)
            var val = row[1].trim();

        //console.log(key + ": " + val);
        if (needed[n] !== undefined)
            if (key === needed[n][0]) {
                right = val.split("(");
                $(".yo table").append("<tr><td class='left'>" 
                    + needed[n][1] 
                    + "</td>" 
                    + "<td class='right'>" 
                    + right[0] 
                    + "</td></tr>");
                n++;
            }
    //}
    });
  });
  
  // this.data = function(url, callback) {
  //   this.docUrl =  url;
  //   $.ajax({
  //       url: this.docUrl,
  //       dataType: "jsonp",
  //       success: callback
  //   });
  // };
}

// console.log(new infoBox('PH-MAD'));
