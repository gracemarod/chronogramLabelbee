 
//x values interval function
    var intervals = []     //list for intervals object
    var tempInterval = {     //temporary object to hold the current interval
        x1:0,
        x2:0,
        y:0
    }

    tempInterval.x1 = coordsList[0]   
    tempInterval.x2 = coordsList[0]  
    
for (var i = 1; i < coordsList.length; i++){    

           //console.log('BEFORE', intervals)

        if(coordsList[i] - coordsList[i-1]==1){     
             tempInterval.x2 = coordsList[i]    //Extend the existing interval
    }
         else {

           intervals.push(tempInterval)   
       
           tempInterval = {x1: coordsList[i], x2: coordsList[i]}    // New interval
             }
    } 
intervals.push(tempInterval)

//get x values in array and y value
var temp = {}
for (var i =0; i < d.length; i++){
  if(d[i].y in  temp){
  temp[d[i].y].push(d[i].x);
}else{

  temp[d[i].y] = []
  temp[d[i].y].push(d[i].x);
}
}



//Closest one to what we want
    var intervals = []     //list for intervals object
    var tempInterval = {     //temporary object to hold the current interval
        x1:0,
        x2:0,
        y:0
    }

    tempInterval.x1 = Object.values(temp)[0][0] 
    tempInterval.x2 = Object.values(temp)[0][0]
    tempInterval.y = Object.keys(temp)[0] 

for ( var key in temp){
 console.log("key: ", key)
  if( temp[key].length == 1){
    console.log("I'm in");
    tempInterval = {x1: temp[key][0], x2: temp[key][0], y: key }
    intervals.push(tempInterval)   
    
  console.log("key BEFORE: ", key)
  console.log("tempInterval: ", tempInterval);
   console.log("temp[key][0]: ", temp[key][0]);

} else{
  
  for (var j = 1; j< temp[key].length; j++){
    console.log("key AFTER: ", key)
    console.log("TempInternval: " ,tempInterval);
    console.log( temp[key][j], "j: ",j )
    
    if( temp[key][j] - temp[key][j-1] == 1){
      tempInterval.x2 = temp[key][j]
      console.log("Temp int test: ", temp[key][1]);
      }else{
      if(j != 1){
      tempInterval = {x1: temp[key][j], x2: temp[key][j], y: key }      
      intervals.push(tempInterval)   
           console.log("Temp int test: ", temp[key][1]);
            }else{
        tempInterval = {x1:temp[key][j=1], x2:temp[key][j-1], y: key}
        intervals.push(tempInterval);
      }
            }

    }
 }
}


 circles = chronArea.append("g").selectAll("rect").data(chronogramData);

    // circles
    //     .enter()
    //     .insert("rect")
    //     .attr("x", function(d) {
    //         return x(Number(d.x) - 0.5);
    //     })
    //     .attr("y", function(d) {
    //         return y(Number(d.y) - 0.4);
    //     })
    //     .attr("height", function(d) {
    //         return (y(Number(d.y) + 0.4) - y(Number(d.y) - 0.4));
    //     })
    //     .attr("width", function(d) {
    //         return (x(Number(d.x) + 1) - x(d.x));
    //     })
    //     .style("fill", function(d) {
    //         var color = "black";
    //         if (d.Activity == "fanning")
    //             color = "#99CCFF";
    //         else if (d.Activity == "entering")
    //             color = "#FFFF00";
    //         else if (d.Activity == "exiting")
    //             color = "#CC00FF";
    //         else if (d.Activity == "pollenating")
    //             color = "#00CC99";
    //         return color;
    //     })
    //     .style("stroke", "black");


for (var key in tempCoordinates){
    let xValues = tempCoordinates[key]
    //Intialize to first values
    tempInterval.x1 = xValues[0]   
    tempInterval.x2 = xValues[0]
    tempInterval.y = key
    for (var i = 1; i < xValues.length; i++){ 

        if(xValues[i] - xValues[i-1]==1) {     
             tempInterval.x2 = xValues[i]    //Extend the existing interval
    }
         else {
        
           allIntervals.push(tempInterval) 
           tempInterval = {x1: xValues[i], x2: xValues[i],y : key }    // New interval
             } 
        // allIntervals.push(tempInterval)

        
            } //
        } allIntervals.push(tempInterval) 
