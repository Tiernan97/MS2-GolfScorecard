     function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 10,
            center: {
                lat: 50.11965404079257,  
                lng: 8.663006717928539
            }
        });
    
        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        var locations = [
         //  { lat: 50.07436072207846, lng: 8.634940082778794 }, // Frankfurter Golf Club e.V. 
         //  { lat: 50.11363566002675, lng: 8.45990218463149 }, // Golf-Club Hof Hausen vor der Sonne e.V.
          //  { lat: 50.1891297174854, lng: 8.510156025111467 } // Golf- und Land-Club Kronberg e.V.
    //    ];

        [`<h6 class="popup-header">Frankfurter Golf Club e.V.</h6> <p class="popup-content"> ipsim imsap snasjnd akama kakad </br> and try our famous <strong>Holychino <i class="fas fa-mug-hot" aria-hidden="true"></i>.</strong></p>
        <a class="popup-link" href="https://goo.gl/maps/61eDWDqqRhK91W3y5" target="_blank"> Get directions</a>`, 50.07436072207846, 8.634940082778794 ],
        [`<h6 class="popup-header">Golf-Club Hof Hausen vor der Sonne e.V.</h6> <p class="popup-content"> ipsim imsap snasjnd akama kakad </br> ipsim imsap snasjnd akama kakad</p>
        <a class="popup-link" href="https://goo.gl/maps/uSmUje2NXm1irkdC8" target="_blank"> Get directions</a>`, 50.11363566002675, 8.45990218463149 ],
        [`<h6 class="popup-header">Golf- und Land-Club Kronberg e.V.</h6> <p class="popup-content">Welcome to our <span class="popup-new-promo">s</span> ipsim</br>You know what, we have discounts for you!</br> Click <a class="popup-link-promo" href="index.html#promo" target="_blank"> HERE </a> to get yours.</p>
        <a class="popup-link" href="https://goo.gl/maps/MWuHpxCrvS878Ysn9" target="_blank"> Get directions</a>`, 50.1891297174854, 8.510156025111467 ]
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