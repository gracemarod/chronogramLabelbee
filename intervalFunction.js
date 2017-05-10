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

       //console.log('AFTER', intervals)
        //tempInterval = {x1:0, x2:0,y:0}
    } 
intervals.push(tempInterval)