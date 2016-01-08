function initialize() {
    var latlng = new google.maps.LatLng(34.698069, 135.503788);
    
    var myOptions = {
        zoom: 17, /*拡大比率*/
        center: latlng, /*表示枠内の中心点*/
        mapTypeId: google.maps.MapTypeId.ROADMAP/*表示タイプの指定*/
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
    
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });
    
    var style = [
      {
        "featureType": "poi",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "road.highway",
        "stylers": [
          { "saturation": -50 },
          { "lightness": 51 }
        ]
      },{
        "stylers": [
          { "saturation": -100 },
          { "gamma": 0.71 }
        ]
      }
    ]
    
    var styleOptions = {
        name: "シンプル"
    };
  
    var MapType = new google.maps.StyledMapType(style, styleOptions);
    map.mapTypes.set('simple', MapType);
    map.setMapTypeId('simple');
}