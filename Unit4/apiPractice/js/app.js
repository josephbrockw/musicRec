$(document).ready(function(){
	$.getJSON('http://www.omdbapi.com/?t=star+wars&y=&plot=short&r=json', function(data) {
		console.log(data);
	})
});