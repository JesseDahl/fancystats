function foo(data) {
    var bla = data.where({columns: ['playername', 'GF', 'GA'], rows: function(row) {
                  return row.minutes > 400 && row.position !== 'G' && row.team === 'Los Angeles';
              } } );//groupBy('playername', ['GF', 'GA']);
    var charts = new ChartTypes();
    var stackedBar = charts.StackedBar('#chart svg', DataConverter.toFormat(bla, "stackedBar"));  
    var lineBar;
    var table;
    
    table = DataConverter.toFormat(bla, "table");
    
    var oTable = $("#table_id").dataTable({
        aaData: table.data,
        aoColumns: table.columns,
        "bJQueryUI": true            
    });
    
    setTimeout(function() {
        bla.sortByCol("GF", 'desc');
        stackedBar.updateData(DataConverter.toFormat(bla, "stackedBar"));
        table = DataConverter.toFormat(bla, "table");
        $("#table_id").dataTable().fnDestroy();
        $("#table_id").empty();
        $("#table_id").dataTable({
            aaData: table.data,
            aoColumns: table.columns,
            "bJQueryUI": true
        });        
    }, 7000);

    setTimeout(function() {
        bla = data.where({ columns: ['position', 'GF', 'GA'], rows: function(row) {
                  return row.team > 'Los Angeles';
              } } );
        bla = bla.groupBy('position', ['GF', 'GA'])
        bla.addComputedColumn('diff', 'number', function(row) {
                  return row.GF - row.GA;
        });
        stackedBar.updateData(DataConverter.toFormat(bla, "stackedBar"));
        table = DataConverter.toFormat(bla, "table");
        $("#table_id").dataTable().fnDestroy();
        $("#table_id").empty();
        $("#table_id").dataTable({
            aaData: table.data,
            aoColumns: table.columns,
            "bJQueryUI": true
        });
    }, 14000);
};

$(document).ready(function() {
    var dataSetMgr = new DataSetMgr();
    dataSetMgr.init(foo);
    var converter = new DataConverter();
    
});