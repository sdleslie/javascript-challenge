// from data.js
var tableData = data;

// YOUR CODE HERE!
var webTable = d3.select("#ufo-table");

//Delete the existing and get new data in Webtable when a new request is entered

function isDate(val) {
    var d = new Date(val);
    return !isNaN(d.valueOf());
}

var selecteddata
selecteddata = tableData

webTable.selectAll("td").remove()
    selecteddata.forEach((record)=>{
        var row = webTable.append("tr");
        Object.values(record).forEach((value)=> {
            cell = row.append("td").text(value);
            cell.style();
        });
    });

//var datebutton = d3.select("#filter-btn");


d3.selectAll("button").on("click", function() {

    d3.event.preventDefault();

    //var dateselected = d3.select("#datetime").attr("value");
    var dateselected = document.getElementById("datetime").value;

    if(isDate(dateselected)){
        selecteddata = tableData.filter((row)=>{return row.datetime = dateselected});
    }
    else{
        selecteddata = tableData
    };

    webTable.selectAll("td").remove()
    selecteddata.forEach((record)=>{
        var row = webTable.append("tr");
        Object.values(record).forEach((value)=> {
            cell = row.append("td").text(value);
            cell.style();
        });
    });

});




// CreateTable(tableData);

// var button = d3.select("#filter-btn");
// button.on("click", function() {

//     d3.event.preventDefault();



//     var myDate = document.getElementById("datetime").value;

//     if (myDate == "") 
//     {

//         CreateTable(tableData);
//     }
//     else
//     {   
//         console.log("here");
//         var filtered_data = tableData.filter((item)=>{return item.datetime == myDate});

//         CreateTable(filtered_data);

//     };
    
// });
