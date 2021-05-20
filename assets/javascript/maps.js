     function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 10,
            center: {
                lat: 50.1106444,
                lng: 8.6820917
            }
        });
    
        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        var locations = [
            { lat: 50.0742567, lng: 8.634976522372764 }, // Frankfurter Golf Club e.V. 
            { lat: 50.113990 , lng: 8.460340 }, // Golf-Club Hof Hausen vor der Sonne e.V.
            { lat: 50.18910624890696 , lng: 8.51396441459656 } // Golf- und Land-Club Kronberg e.V.
        ];

        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });

        var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
    }