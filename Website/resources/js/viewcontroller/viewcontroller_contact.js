var Soapify = Soapify || {},
    EventTarget = EventTarget || {};

Soapify.viewcontroller_contact = function () {
    "use strict";
    
    var that = new EventTarget(),
        contactTemplate,
        contactEl = $("#contact"),
        contactTemplateHTML = $("#templates .template_contact").html();

    // Init view
    function initView() {
        contactEl.html(contactTemplate());
    }

    // Init listeners
    function initListeners() {

    }

    // Wire model
    function wireModel() {

    }

    // Activate view
    function activate() {
        contactEl.css({
            display: "block"
        });
        document.title = "Soapify - Contact";
    }

    function init() {
        //contactTemplate = _.template(contactTemplateHTML);
        //initView();
        //wireModel();
        initListeners();

        that.activate = activate;
        return that;
    }

    return init();
}
