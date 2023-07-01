# Usage of maps-lib

1.calling leaflet map:
    var map = maps().map(id, coordinate, zoomlevel)
    here id is mapid, coordinate to centre map, and zoomlevel 

2.calling intrested base map: 
    var satellite = maps().google('satellite').addTo(map)
    Here'satellite' can be changed with any other google basemaps like 'satellite','street', 'terrain','hybrid'.
    And also you can call osm, esri world imaginary, topography, cycleOSM, watercolor by .osm(), .esri(), .topo(), cycleOSM(), waterColor()
         