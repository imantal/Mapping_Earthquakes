// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center (Lat and Long) and zoom level (0-18).
//let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJSON data.
// coordinates in GeoJSON is [x=longitude, y=latitude]
// let sanFranAirport =
//{"type":"FeatureCollection","features":[{
//    "type":"Feature",
//    "properties":{
//        "id":"3469",
//        "name":"San Francisco International Airport",
//        "city":"San Francisco",
//        "country":"United States",
//        "faa":"SFO",
//        "icao":"KSFO",
//        "alt":"13",
//       "tz-offset":"-8",
//        "dst":"A",
//        "tz":"America/Los_Angeles"},
//        "geometry":{
//            "type":"Point",
//            "coordinates":[-122.375,37.61899948120117]}}
//]};

// Grabbing our GeoJSON data.
  // We turn each feature into a marker on the map.
  // feature is the JS object "geometry" and "properties"
  // The properties in each JavaScript object can be accessed using the dot notation.

//L.geoJSON(sanFranAirport, {
//  pointToLayer: function(feature, latlng) {
//   console.log(feature);
//    console.log(latlng);
//    return L.marker(latlng)
//    .bindPopup("<h2>" + feature.properties.city + "</h2>");
//  }
//}).addTo(map);

// second approach
//L.geoJSON(sanFranAirport, {
//  onEachFeature: function(feature, layer) {
//    console.log(feature);
//    console.log(layer);
//    return layer.bindPopup();
//  }
//}).addTo(map);



// Get data from cities.js
//let cityData = cities;

// Loop through the cities array and create one marker for each city.
//tolocalstring(): converts to comma seperated
//cityData.forEach(function(city) {
//    console.log(city)
//    L.circleMarker(city.location,{radius:city.population/100000})
//    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//  .addTo(map);
//});

//  Add a marker to the map for Los Angeles, California.
// can use Circle or CircleMarker
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
//L.circleMarker([34.0522, -118.2437], {
//    radius: 300,
//    color:"black",
//    fillColor: "#ffffa1"
// }).addTo(map);


// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// We create the tile layer that will be the background of our map.
// change the map's style: mapbox/outdoors-v11/mapbox/light-v10/mapbox/dark-v10/mapbox/satellite-v9/mapbox/satellite-v9/mapbox/streets-v11
let street = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: street,
  Satellite: satellite
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [street]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
// Having the tileLayer() method before accessing large datasets 
// ensures that the map gets loaded before the data is added to it.
let torontoHoods = "https://raw.githubusercontent.com/imantal/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Create a style for the lines.
let myStyle = {
  color: "lightblue",
  fillColor:"yellow",
  weight: 1
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data,{
  style:myStyle,  
  onEachFeature: function(feature, layer) {
  layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME + "</h3>");  
}
}).addTo(map);
});









// Grabbing our GeoJSON data.
//d3.json(torontoHoods).then(function(data) {
//  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
//L.geoJSON(data,{
//  style:myStyle,  
//  onEachFeature: function(feature, layer) {
//  layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr> <h3> Destination: " + feature.properties.dst + "</h3>");  
  //console.log(feature.properties.airline); 
//}
//}).addTo(map);
//});

// Grabbing our GeoJSON data.
//d3.json(airportData).then(function(data) {
//  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
//L.geoJSON(data,{
//  pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     console.log(latlng);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.city + "</h2> <hr> <h3>Airport Name: " + feature.properties.name + "</h3>");  
//}
//}).addTo(map);
//});


//L.geoJSON(sanFranAirport, {
//  pointToLayer: function(feature, latlng) {
//   console.log(feature);
//    console.log(latlng);
//    return L.marker(latlng)
//    .bindPopup("<h2>" + feature.properties.city + "</h2>");
//  }
//}).addTo(map);