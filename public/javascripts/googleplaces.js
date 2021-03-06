// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.
var placeSearch, autocomplete;
var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
};

var GooglePlaces = {
    initializeGooglePlaces: function(inputId) {
        // Create the autocomplete object, restricting the search
        // to geographical location types.
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {HTMLInputElement} */(document.getElementById(inputId)),
            {types: ['geocode']});
        // When the user selects an address from the dropdown,
        // populate the address fields in the form.
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            GooglePlaces.fillInAddress();
        });
    },

    // [START region_fillform]
    fillInAddress: function() {

    },
    // [END region_fillform]
    // [START region_geolocation]
    // Bias the autocomplete object to the user's geographical location,
    // as supplied by the browser's 'navigator.geolocation' object.
    geolocate: function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var geolocation = new google.maps.LatLng(
                    position.coords.latitude, position.coords.longitude);
                var circle = new google.maps.Circle({
                    center: geolocation,
                    radius: position.coords.accuracy
                });
                autocomplete.setBounds(circle.getBounds());
            });
        }
    }
}



