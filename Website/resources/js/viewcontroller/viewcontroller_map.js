var Soapify = Soapify || {},
    EventTarget = EventTarget || {};

Soapify.viewcontroller_map = function (model_store) {
    "use strict";
    
    var that = new EventTarget(),
        mapTemplate,
        mapEl = $("#map"),
        googleMapsEl,
        mapTemplateHTML = $("#templates .template_map").html(),
        mapStoresTemplate,
        mapStoresTemplateHTML = $("#templates .template_mapStores").html(),
        mapStoresEl,
        googleMapsTemplate,
        googleMapsTemplateHTML = $("#templates .template_googleMaps").html(),
        googleMapsInitString = "Arcaden,+Regensburg";

    // Init view
    function initView() {
        mapEl.html(mapTemplate());
        googleMapsEl = $("#googleMaps");
        mapStoresEl = $("#mapStores");
        mapStoresEl.html(mapStoresTemplate({stores: model_store.getStores()}));
        
    }

    function reloadGoogleMaps(query) {
        googleMapsEl.html(googleMapsTemplate({query: query}));
    }
    
    // Init listeners
    function initListeners() {
        $("#map .list-group-item").click(function (event) {
            reloadGoogleMaps(model_store.getAddressString(event.target.id));
            $("#map .list-group-item").removeClass("active")
            $(event.target).addClass("active")
        });
        $('#mapSearchInput').on('input', function() { 
            let searchResult = model_store.getStoresByInput($(this).val());
            mapStoresEl.html(mapStoresTemplate({stores: searchResult}));
        });
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
        mapStoresTemplate = _.template(mapStoresTemplateHTML);
        initView();
        initListeners();

        that.activate = activate;
        return that;
    }

    return init();
}
