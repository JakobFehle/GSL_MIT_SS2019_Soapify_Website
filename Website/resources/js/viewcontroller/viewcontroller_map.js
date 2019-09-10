var Soapify = Soapify || {},
    EventTarget = EventTarget || {};

Soapify.viewcontroller_map = function () {
    "use strict";
    
    var that = new EventTarget(),
        mapTemplate,
        mapEl = $("#map"),
        mapTemplateHTML = $("#templates .template_map").html();

    // Init view
    function initView() {
        mapEl.html(mapTemplate());
    }

    // Init listeners
    function initListeners() {

    }

    // Wire model
    function wireModel() {

    }

    // Activate view
    function activate() {
        mapEl.css({
            display: "block"
        });
        document.title = "Soapify - Map";
    }

    function init() {
        //mapTemplate = _.template(mapTemplateHTML);
        //initView();
        //wireModel();
        initListeners();

        that.activate = activate;
        return that;
    }

    return init();
}
