var DataConverter = function() {
    DataConverter.toFormat = function(data, chartType) {
        var finalData;
        var result = [];
        var rowData = [];
        var cols = [];
        
        var columnNames = data.columnNames();

        if (chartType === "table") {
            data.each(function(row) {
                columnNames.forEach(function(col) {
                    rowData.push(row[col]);
                });
                result.push(rowData);
                rowData = [];
            });
            columnNames.forEach(function(col) {
                cols.push({"sTitle": col});
            });
            finalData = {data: result, columns: cols};
        }
        //else if (chartType === 'linebar') {
        
        
        //}
        else { // stacked/grouped bar chart
            for (var i = 1; i < columnNames.length; i++) {
                result.push( { key: columnNames[i], values: [] } );
            }
            data.each(function(row) {
                for (i = 1; i < columnNames.length; i++) {
                    result[i - 1].values.push( { x: row[columnNames[0]], y: row[ columnNames[i] ] } );
                }        
            });
            finalData = result;
        }
        return finalData;
    };
};