var Soapify = Soapify || {},
    EventTarget = EventTarget || {};

Soapify.viewcontroller_navbar = function () {
    "use strict";
    var that = new EventTarget(),
        navbarTemplate,
        navbarTemplateHTML = $('#templates .template_navbar').html(),
        navbarEl = $('#navbar'),
        navbarItems;

    // Activate navbar and set state
    function activate(status) {
        navbarEl.css({
            display: "block"
        });
        navbarItems.removeClass('active');
        switch (status) {

            case 'info':
                $('#navbar_info').addClass('active');
                break;

            case 'map':
                $('#navbar_map').addClass('active');
                break;

            case 'contact':
                $('#navbar_contact').addClass('active');
                break;
        }
    }

    // Init listeners
    function initListeners() {

        // Info
        $('#navbar_info').click(function (event) {
            that.dispatchEvent({
                type: "redirect",
                data: {
                    target: "info"
                }
            });
        });
        
        // Map
        $('#navbar_map').click(function (event) {
            that.dispatchEvent({
                type: "redirect",
                data: {
                    target: "map"
                }
            });
        });
        
        // Contact
        $('#navbar_contact').click(function (event) {
            that.dispatchEvent({
                type: "redirect",
                data: {
                    target: "contact"
                }
            });
        });
        
    }

    // Init view
    function initView() {
        
        // Attach navbar template to dom
        navbarEl.html(navbarTemplate());
        
        navbarItems = $('.nav-item');
    }

    function init() {
        navbarTemplate = _.template(navbarTemplateHTML);
        initView();
        initListeners();

        that.activate = activate;
        return that;
    }

    return init();
}
