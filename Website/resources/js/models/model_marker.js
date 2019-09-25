var Soapify = Soapify || {},
    EventTarget = EventTarget || {};

Soapify.model_marker = function (backendAdress) {
    "use strict";

    var that = new EventTarget(),
        markers;
    
    function loadMarkers() {
        // Load Markers from Backend
        
        markers = [
            {
                "id": 0,
                "name": "Edeka",
                "address": {
                    "city": "Regensburg",
                    "street": "Neupfarrplatz",
                    "number": 8
                        },
                "sortiment": ["Bio Blue", "Bio Red", "Bio Green"]
            },
            {
                "id": 1,
                "name": "Naturmarkt Glockengasse",
                "address": {
                    "city": "Regensburg",
                    "street": "Glockengasse",
                    "number": 16
                        },
                "sortiment": ["Bio Green"]
            },
            {
                "id": 2,
                "name": "Edeka",
                "address": {
                    "city": "Regensburg",
                    "street": "Rennweg",
                    "number": 12
                        },
                "sortiment": ["Bio Yellow", "Bio Green"]
            },
            {
                "id": 3,
                "name": "Alnatura Super Natur Markt",
                "address": {
                    "city": "Regensburg",
                    "street": "D.-Martin-Luther-Straße",
                    "number": 2
                        },
                "sortiment": ["Bio Yellow", "Bio Blue", "Bio Red", "Bio Green"]
            },
            {
                "id": 4,
                "name": "Biomarkt Stadtamhof",
                "address": {
                    "city": "Regensburg",
                    "street": "Andreasstraße",
                    "number": 1
                        },
                "sortiment": ["Bio Yellow", "Bio Blue","Bio Green"]
            },
            {
                "id": 5,
                "name": "Alnatura",
                "address": {
                    "city": "Regensburg",
                    "street": "Donaustaufer Straße",
                    "number": 128
                        },
                "sortiment": ["Bio Blue","Bio Green"]
            }
        ]
    }

    function getMarkers() {
        return markers;
    }

    function getAddressString(objId) {
        let store = markers.find(function(obj) {
            return obj.id == objId;
        });
        let addressString = store.address.street + " " + store.address.number + ", " + store.address.city;
        return addressString.replace(/\s/g, "+");
    }
    
    function init() {
        that.loadMarkers = loadMarkers
        that.getMarkers = getMarkers
        that.getAddressString = getAddressString
        
        loadMarkers();
        return that;
    }

    return init();
};
