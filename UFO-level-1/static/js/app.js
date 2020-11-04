// from data.js
var tableData = data;

// YOUR CODE HERE!
var webTable = d3.select("tbody");

function isDate(val) {
    var d = new Date(val);
    return !isNaN(d.valueOf());
}

function publishdata(datainput) {
//Delete the existing and get new data in Webtable when a new request is made
    webTable.html("");
    datainput.forEach((record)=>{
        var row = webTable.append("tr");
        Object.values(record).forEach((value)=> {
            var cell = row.append("td")
            cell.text(value);
        });
    });
}

var selecteddata
selecteddata = tableData

publishdata(selecteddata);

d3.selectAll("button").on("click", function() {

    d3.event.preventDefault();

    var dateselected = d3.select("#datetime").property("value");

   console.log(dateselected)

    if(isDate(dateselected)){
        selecteddata = tableData.filter((row)=>{return row.datetime === dateselected});
    }
    else{
        selecteddata = tableData
    };

    publishdata(selecteddata);
});
