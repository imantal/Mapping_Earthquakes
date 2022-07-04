// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center (Lat and Long) and zoom level (0-18).
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

//  Add a marker to the map for Los Angeles, California.
// can use Circle or CircleMarker
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color:"black",
    fillColor: "#ffffa1"
 }).addTo(map);


// We create the tile layer that will be the background of our map.
// change the map's style: mapbox/outdoors-v11/mapbox/light-v10/mapbox/dark-v10/mapbox/satellite-v9/mapbox/satellite-v9
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);