$(document).ready(function() {
	var map;
	function initialize() {
		var latlng = new google.maps.LatLng (45.519098,-122.672138);
		var mapOpts = {
			zoom:13,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.HYBRID
		};
		map = new google.maps.Map(document.getElementById("map_canvas"), mapOpts);
	}
	initialize();

});