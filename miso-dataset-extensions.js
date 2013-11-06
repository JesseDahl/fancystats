Miso.Dataset.prototype.sortByCol = function(column, direction) {
    var retVals = [-1, 1];
    if (arguments.length > 1 && direction === 'desc')
        retVals = [1, -1];        
    return this.sort(function(rowA, rowB) {
        if (rowA[column] < rowB[column]) { 
            return retVals[0]; 
        }
        if (rowA[column] > rowB[column]) { 
            return retVals[1];  
        }
        return 0;    
    });
};

Miso.Dataset.DataView.prototype.sortByCol = function(column, direction) {
    var retVals = [-1, 1];
    if (arguments.length > 1 && direction === 'desc')
        retVals = [1, -1];      
    return this.sort(function(rowA, rowB) {
        if (rowA[column] < rowB[column]) { 
            return retVals[0];  
        }
        if (rowA[column] > rowB[column]) { 
            return retVals[1]; 
        }
        return 0;    
    });
};
