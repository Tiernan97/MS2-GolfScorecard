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
            { lat: 50.07436072207846, lng: 8.634940082778794 }, // Frankfurter Golf Club e.V. 
           { lat: 50.11363566002675, lng: 8.45990218463149 }, // Golf-Club Hof Hausen vor der Sonne e.V.
            { lat: 50.1891297174854, lng: 8.510156025111467 } // Golf- und Land-Club Kronberg e.V.
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