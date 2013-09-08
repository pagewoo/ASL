
var load_segments = function(data, callback) {

	$.post('http://192.110.161.26:8891/bygeoidandsegment', function(data) {
		console.log('mongo ' + data)
	  //callback(data);
	});

}