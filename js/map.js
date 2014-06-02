// add_listing map Leaflet plugin




// Offecial way
/*var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/MapID/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

var circle = L.circle([51.508, -0.11], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);*/




// First Google Plugin
/*var map = new L.Map('map', {center: new L.LatLng(51.51, -0.11), zoom: 9});
var googleLayer = new L.Google('ROADMAP');
map.addLayer(googleLayer);*/




// Second Google Plugin
var map = new L.Map('map', {center: new L.LatLng(26.629715, 30.070562), zoom: 5});
var ggl = new L.Google('ROADMAP');
map.addLayer(ggl);




map.addEventListener('contextmenu', function(e) {
    //alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);

    //var coords = e.latlng.toString();

    console.log(e.latlng.toString());

    document.getElementById("lat").value = e.latlng.lat;
    document.getElementById("lng").value = e.latlng.lng;

    var ellipse = L.ellipse([e.latlng.lat, e.latlng.lng], [5, 5], 90).addTo(map);

});


//var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
//map.addControl(new L.Control.Layers( {'OSM':osm, 'Google':ggl, 'Google Terrain':ggl2}, {}));