var feature

let selcircuit = d3.select("#selectCircuit")

const API_KEY = "pk.eyJ1IjoicmFtYWRpdHlhNTI0IiwiYSI6ImNrb3NwcTF5NjAzZTIyc252cm9scGhub2QifQ.IF_qMBaHLJeTKcyIVuiBBw"
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom:  18,
	accessToken: API_KEY
});

let map = L.map('map', {
	center: [0,0],
	zoom: 8,
	layers: [dark]
});
let circuitData = "https://rama-course-bucket.s3.us-east-2.amazonaws.com/circuit_map.geojson";

function updatemap()
{
let circuit = selcircuit.node().value;

d3.json(circuitData).then(function(data) {
    data.features.forEach(element => {
        if(element.properties.Name==circuit)
        {
            feature = element;
            var lat = feature.bbox[1]
            var lng = feature.bbox[0]
            console.log(lat,lng);
            L.geoJSON(feature).addTo(map);
            map.flyTo([lat,lng], 14)
            ;

        }
    }); 
    
        
})
}