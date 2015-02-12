var currentWeather = "";
var currentTemp = "";
var bodyClass = "";
$.ajax({
	url: "http://api.wunderground.com/api/33c41345d1292535/conditions/q/TN/Nashville.json",
	datatype: 'jsonp',
	success: function(results) {
		currentWeather = results.current_observation.weather;
		currentTemp = results.current_observation.temp_f;
		$('.weatherNashville').text(currentWeather.toLowerCase());
		$('.tempNashville').text(currentTemp);
		if (isItInArray(currentWeather, sunnyWeather) === true) {
			bodyClass = "sunny";		
		}
		else if (isItInArray(currentWeather, foggyWeather) === true) {
			bodyClass = "fog";			
		}
		else if (isItInArray(currentWeather, rainyWeather) === true) {
			bodyClass = "rainy";			
		}
		else if (isItInArray(currentWeather, stormyWeather) === true) {
			bodyClass = "stormy";			
		}
		else if (isItInArray(currentWeather, snowyWeather) === true) {
			bodyClass = "snow";			
		}
		else {return false};
		$('body').addClass(bodyClass);
	}
});

var sunnyWeather = ["Clear", "Partly Cloudy"];
var snowyWeather = ["Light Snow", "Heavy Snow", "Snow", "Light Snow Grains", "Heavy Snow Grains", "Snow Grains", "Light Ice Crystals", "Heavy Ice Crystals", "Ice Crystals", "Light Ice Pellets", "Heavy Ice Pellets", "Ice Pellets", "Light Low Drifting Snow", "Heavy Low Drifting Snow", "Low Drifting Snow", "Light Blowing Snow", "Heavy Blowing Snow", "Blowing Snow", "Light Snow Showers", "Heavy Snow Showers", "Snow Showers", "Light Snow Blowing Snow Mist", "Heavy Snow Blowing Snow Mist", "Snow Blowing Snow Mist", "Light Ice Pellet Showers", "Heavy Ice Pellet Showers", "Ice Pellet Showers"];
var rainyWeather = ["Light Drizzle", "Heavy Drizzle", "Drizzle", "Light Rain", "Heavy Rain", "Rain", "Light Spray", "Heavy Spray", "Spray", "Light Rain Mist", "Heavy Rain Mist", "Rain Mist", "Light Rain Showers", "Heavy Rain Showers", "Rain Showers", "Light Freezing Drizzle", "Heavy Freezing Drizzle", "Freezing Drizzle", "Light Freezing Rain", "Heavy Freezing Rain", "Freezing Rain"];
var stormyWeather = ["Funnel Cloud", "Squalls", "Small Hail", "Light Hail", "Heavy Hail", "Hail", "Light Hail Showers", "Heavy Hail Showers", "Hail Showers", "Light Thunderstorm", "Heavy Thunderstorm", "Thunderstorm", "Light Thunderstorms and Rain", "Heavy Thunderstorms and Rain", "Thunderstorms and Rain", "Light Thunderstorms and Ice Pellets", "Heavy Thunderstorms and Ice Pellets", "Thunderstorms and Ice Pellets", "Light Thunderstorms with Hail", "Heavy Thunderstorms with Hail", "Thunderstorms with Hail", "Light Thunderstorms with Small Hail", "Heavy Thunderstorms with Small Hail", "Thunderstorms with Small Hail"];
var foggyWeather = ["Light Mist", "Heavy Mist", "Mist", "Light Fog", "Heavy Fog", "Fog", "Light Fog Patches", "Heavy Fog Patches", "Fog Patches", "Light Freezing Fog", "Heavy Freezing Fog", "Freezing Fog", "Patches of Fog", "Shallow Fog", "Partial Fog"];

function isItInArray (value, array) {
	return $.inArray(value, array) > -1;
	}

//On Click Functions for the li buttons
$('.developer').click(function() {
	console.log("developer");
	$('#home').css("margin", "0 auto");
	$('#developer').css("display", "block");
});
$('.designer').click(function() {
	console.log("designer");
	$('#home').css("margin", "0 auto");
	$('#designer').css("display", "block");
});
$('.archivist').click(function() {
	console.log("archivist");
	$('#home').css("margin", "0 auto");
	$('#archivist').css("display", "block");
});
$('.contact').click(function() {
	console.log("contact");
	$('#home').css("margin", "0 auto");
	$('#contact').css("display", "block");
});