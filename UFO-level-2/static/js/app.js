// from data.js
var tableData = data;

// YOUR CODE HERE!
var webTable = d3.select("tbody");
var filtercontrols = d3.select("list-group");

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

// Part 2

filteroptions = ["datetime", "city", "state", "country", "shape"]

filteroptions.forEach((filteroption)=>{
    options = tableData.map(data =>data[filteroption]).filter(onlyUnique)
    options.unshift('All')
    var selectElement = document.getElementById(filteroption);
    populateSelectElement(selectElement, options);
  })

function populateSelectElement (element, array) {
  var newElement, i;
  for(i = 0; i < array.length; i += 1) {
      newElement = document.createElement('option');
      newElement.value = array[i];
      newElement.text = array[i];
      element.appendChild(newElement);
  }
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// Get values and filter

d3.selectAll("#filter-btn").on("click", function() {

//  d3.event.preventDefault();

  var selecteddata = tableData

  filteroptions.forEach((filteroption)=>{

    var selected = d3.select("[id=" + filteroption +"]").property("value");

    if (selected !== "All")  {
      selecteddata = selecteddata.filter((row)=>{return row[filteroption] === selected});
      }

  })

publishdata(selecteddata);

});

d3.selectAll("#clear-btn").on("click", function() {
  location.reload()
});