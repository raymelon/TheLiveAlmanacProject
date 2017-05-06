function City(url, callback) {

    this.docUrl =  url;

    $.ajax({
        url: this.docUrl,
        dataType: "jsonp",
        success: callback
    });
}

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

var Muntinlupa = new City("https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=Palawan", function(json) {
  
    var id = Object.keys(json.query.pages)[0];
    var article = json.query.pages[id].revisions[0]['*'];

    var infoBox = article.split("<!-- Infobox Ends -->");
    var chunks = infoBox[0].split("\n|");
  
    //console.log(chunks);
    
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
