function initMap() {
    var uluru = {lat: 45.5205947, lng: 16.6139014};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
}