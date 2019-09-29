var Soapify = Soapify || {},
    EventTarget = EventTarget || {};

Soapify.model_store = function (backendAdress) {
    "use strict";

    var that = new EventTarget(),
        stores;
    
    function loadStores() {
        // Load Stores from Backend
        
        stores = [
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
            },
            {
                "id": 6,
                "name": "Füllgut",
                "address": {
                    "city": "Regensburg",
                    "street": "Obere Bachgasse",
                    "number": 18
                        },
                "sortiment": ["Bio Blue","Bio Red", "Bio Green"]
            },
            {
                "id": 7,
                "name": "Denn's Biomarkt",
                "address": {
                    "city": "Regensburg",
                    "street": "Kumpfmühler Straße",
                    "number": 8
                        },
                "sortiment": ["Bio Blue","Bio Red", "Bio Green"]
            }
        ]
    }

    // Getter
    function getStores() {
        return stores;
    }

    // Format store to string for google maps request
    function getAddressString(objId) {
        let store = stores.find(function(obj) {
            return obj.id == objId;
        });
        let addressString = store.address.street + " " + store.address.number + ", " + store.address.city;
        return addressString.replace(/\s/g, "+");
    }
    
    // Return stores according to input search string
    function getStoresByInput(input) {
        let result = _.filter(stores, function (store) {
            return store.name.toLowerCase().includes(input.toLowerCase());
        });
        return result;
    }
    
    function init() {
        that.loadStores = loadStores
        that.getStores = getStores
        that.getAddressString = getAddressString
        that.getStoresByInput = getStoresByInput
        
        loadStores();
        return that;
    }

    return init();
};
