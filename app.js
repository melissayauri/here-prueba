
var platform = new H.service.Platform({
  app_id: 'kNvcWGeDcX93OKDhzGXy', // // <-- ENTER YOUR APP ID HERE
  app_code: 'KxJPW0n6SeLi0AFwUk0EAw', // <-- ENTER YOUR APP CODE HERE
});

var defaultLayers = platform.createDefaultLayers();
var mapPlaceholder = document.getElementById('map-container');


var map = new H.Map(mapPlaceholder, defaultLayers.normal.map,mapOptions);
  window.addEventListener('resize', function () {
    map.getViewPort().resize();
  });

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
var coordinates = {
  lat: 52.530974, // HERE HQ in Berlin, Germany
  lng: 13.384944
};

var mapOptions = {
  center: coordinates,
  zoom: 14
}



var iconUrl = 'descarga.png';

var iconOptions = {
// The icon's size in pixel:
size: new H.math.Size(80, 34),
// The anchorage point in pixel,
// defaults to bottom-center
anchor: new H.math.Point(14, 34)
};

var markerOptions = {
              icon: new H.map.Icon(iconUrl, iconOptions)
              };

var marker = new H.map.Marker(coordinates, markerOptions);
map.addObject(marker);
