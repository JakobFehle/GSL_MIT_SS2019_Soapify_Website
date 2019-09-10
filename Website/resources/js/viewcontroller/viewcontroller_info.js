var Soapify = Soapify || {},
    EventTarget = EventTarget || {};

Soapify.viewcontroller_info = function () {
    "use strict";

    var that = new EventTarget(),
        infoTemplate,
        infoEl = $("#info"),
        infoTemplateHTML = $("#templates .template_info").html();

    // Init view
    function initView() {
        infoEl.html(infoTemplate());
    }

    // Init listeners
    function initListeners() {

    }

    // Wire model
    function wireModel() {

    }

    // Activate view
    function activate() {
        infoEl.css({
            display: "block"
        });
        document.title = "Soapify - Info";
    }

    function init() {
        //infoTemplate = _.template(infoTemplateHTML);
        //initView();
        //wireModel();
        //initListeners();

        that.activate = activate;
        return that;
    }

    return init();
}
