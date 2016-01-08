function initialize() {
    var latlng = new google.maps.LatLng(34.698069, 135.503788);
    
    var myOptions = {
        zoom: 18, /*拡大比率*/
        center: latlng, /*表示枠内の中心点*/
        mapTypeId: google.maps.MapTypeId.ROADMAP/*表示タイプの指定*/
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
    /*アイコン設定▼*/
    var icon = new google.maps.MarkerImage('../img/map_icon.png',
        new google.maps.Size(80,124),/*アイコンサイズ設定*/
        new google.maps.Point(0,0)/*アイコン位置設定*/
    );
    var markerOptions = {
        position: latlng,
        map: map,
        icon: icon,
        title: 'MOERADO'
    };
    var marker = new google.maps.Marker(markerOptions);
　   /*アイコン設定ここまで▲*/
}