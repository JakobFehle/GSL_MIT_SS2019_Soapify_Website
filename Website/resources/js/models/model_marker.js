var Soapify = Soapify || {},
    EventTarget = EventTarget || {};

Soapify.model_marker = function (backendAdress) {
    "use strict";

    var that = new EventTarget();
    
    function loadMMarkers() {
        
    }

    

    function init() {
        that.loadMarkers = loadMMarkers
        
        return that;
    }

    return init();
};
