//function to start the Leaflet map
function createMap(){

    //Varibles needed for running the funcation
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a> | <a href="https://github.com/YOKADDOURA/2018-NEON-Data-Institute-Git-Demo">Youssef O. Kaddoura</a>';

    var apitoken = 'pk.eyJ1IjoibWFyYW0yMDE2IiwiYSI6ImNrMnhrMnk3MjBjejgzY283ZXMyNHZuNW4ifQ.ZpKwxVSEbXUE5KESIqNQqw' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */

    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}'; //URL used for Stanard MaxBox Styles

    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}'; //URL used for Custom MapBox Styles


    //Variables for the different basemaps
    var darkTerrain = L.tileLayer(mbStyleUrl, {id: 'maram2016/ck3djrh4d0cgz1ctdcqsyfkq3', token: apitoken,  attribution: mbAttr});

    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});

    var dark  = L.tileLayer(mbUrl, {id: 'mapbox.dark', token: apitoken,  attribution: mbAttr});

    var outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken,  attribution: mbAttr});



    //create the map*/
    var map = L.map('map', {
        center: [29.689282, -81.993431],//Coordinated to center the map
        zoom: 12, //zoom level
        layers:darkTerrain //default base
    });
   
    //create the basemap control layer*/
    var baseLayers = {
		"Outdoors": outdoors,
        "Grayscale": grayscale,
		"Darkscale": dark,
        "Dark Terrain": darkTerrain
    };

    L.control.layers(baseLayers).addTo(map);
};

//calling the funcation
$(document).ready(createMap);
