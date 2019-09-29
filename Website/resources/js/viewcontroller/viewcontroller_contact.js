var Soapify = Soapify || {},
    EventTarget = EventTarget || {};

Soapify.viewcontroller_contact = function () {
    "use strict";
    
    var that = new EventTarget(),
        contactEl = $("#contact");

    // Activate view
    function activate() {
        contactEl.css({
            display: "block"
        });
        document.title = "Soapify - Contact";
    }

    function init() {
        that.activate = activate;
        return that;
    }

    return init();
}
