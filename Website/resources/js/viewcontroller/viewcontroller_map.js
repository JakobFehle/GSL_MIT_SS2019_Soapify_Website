var Soapify = Soapify || {},
    EventTarget = EventTarget || {};

Soapify.viewcontroller_map = function () {
    "use strict";
    
    var that = new EventTarget(),
        mapTemplate,
        mapEl = $("#map"),
        googleMapsEl,
        mapTemplateHTML = $("#templates .template_map").html(),
        googleMapsTemplate,
        googleMapsTemplateHTML = $("#templates .template_googleMaps").html();

    // Init view
    function initView() {
        mapEl.html(mapTemplate());
        googleMapsEl = $("#googleMaps");
    }

    function reloadGoogleMaps() {
        googleMapsEl.html(googleMapsTemplate({query: "Galgenbergstraße,+Regensburg"}));
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
        reloadGoogleMaps();
    }

    function init() {
        mapTemplate = _.template(mapTemplateHTML);
        googleMapsTemplate = _.template(googleMapsTemplateHTML);
        initView();
        //wireModel();
        initListeners();

        that.activate = activate;
        return that;
    }

    return init();
}
