var Soapify = Soapify || {},
    EventTarget = EventTarget || {};

Soapify.viewcontroller_info = function () {
    "use strict";

    var that = new EventTarget(),
        infoEl = $("#info");

    // Activate view
    function activate() {
        infoEl.css({
            display: "block"
        });
        document.title = "Soapify - Info";
    }

    function init() {
        that.activate = activate;
        return that;
    }

    return init();
}
