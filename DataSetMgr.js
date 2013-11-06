var DataSetMgr = function() {
    var ds;
    var data;
    var init = function(callback) {
        ds = new Miso.Dataset({
            url: "data201213_5v5closePARTIAL.json"
        });
        ds.fetch({
            success: function() {
                data = this;
                callback(data);
            },
            error: function() {
                console.log('nooooo error'); 
            }
        });
    };
    return { init: init };
};