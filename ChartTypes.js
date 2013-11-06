var ChartTypes = function() {
    var StackedBar = function(element, data) {
        var chart;
        var el = element;
        var updateData = function(newData) {
            d3.select(el).datum(newData).transition().duration(1500).call(chart);    
        };
        
        nv.addGraph(function() {
            chart = nv.models.multiBarChart()
                             .reduceXTicks(false)
                             .rotateLabels(-90)
                             .margin({top: 10, right: 20, bottom: 160, left: 40})
                             .height(0);
            console.log(data);
            chart.yAxis.tickFormat(d3.format(',.0f'));
            d3.select(el).datum(data)
                                   .transition().duration(1500).call(chart);
            
            nv.utils.windowResize(chart.update);
            return chart;
        });
        
        return {updateData: updateData};
    };
    

    
    return { StackedBar: StackedBar
             };
};    