var Soapify = Soapify || {},
    EventTarget = EventTarget || {};

Soapify.viewcontroller_map = function (model_marker) {
    "use strict";
    
    var that = new EventTarget(),
        mapTemplate,
        mapEl = $("#map"),
        googleMapsEl,
        mapTemplateHTML = $("#templates .template_map").html(),
        googleMapsTemplate,
        googleMapsTemplateHTML = $("#templates .template_googleMaps").html(),
        googleMapsInitString = "Arcaden,+Regensburg";

    // Init view
    function initView() {
        let storeObject = {stores: model_marker.getMarkers()};
        console.log(storeObject)
        mapEl.html(mapTemplate(storeObject));
        googleMapsEl = $("#googleMaps");
    }

    function reloadGoogleMaps(query) {
        googleMapsEl.html(googleMapsTemplate({query: query}));
    }
    
    // Init listeners
    function initListeners() {
        $("#map .list-group-item").click(function (event) {
            console.log(event.target.id)
            reloadGoogleMaps(model_marker.getAddressString(event.target.id));
        });
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
        reloadGoogleMaps(googleMapsInitString);
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
