
var Soapify = Soapify || {};

Soapify = (function () {
    "use strict";
    
    const views = document.querySelectorAll('.viewcontainer');
    var that = {},
        vc_navbar,
        vc_info,
        vc_map,
        vc_contact;

    // Init necessary modules at start
    function initModules() {
        vc_navbar = new Soapify.viewcontroller_navbar();
        vc_info = new Soapify.viewcontroller_info();
        vc_map = new Soapify.viewcontroller_map();
        vc_contact = new Soapify.viewcontroller_contact();
    }

    // Init necessary listeners at start
    function initListeners() {
        vc_navbar.addEventListener("redirect", goTo);
    }

    // Visablility Controller
    // Activates views according to state
    function goTo(event) {

        function hideAllViews() {
            _.each(views, function (viewcontainer) {
                viewcontainer.style.display = "none";
            });
        }

        hideAllViews();

        switch (event.data.target) {
            case 'info':
                vc_navbar.activate(event.data.target)
                vc_info.activate();
                break;

            case 'map':
                vc_navbar.activate(event.data.target)
                vc_map.activate();
                break;

            case 'contact':
                vc_navbar.activate(event.data.target)
                vc_contact.activate();
                break;

        }
    }

    function init() {
        initModules();
        initListeners();
    }

    that.init = init;
    return that;
})();
