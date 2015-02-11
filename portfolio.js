var currentWeather = "";
$.ajax({
	url: "http://api.wunderground.com/api/33c41345d1292535/conditions/q/TN/Nashville.json",
	datatype: 'jsonp',
	success: function(results) {
		currentWeather = results.current_observation.weather;
		$('.weatherNashville').text(currentWeather);
		if (currentWeather === "Mostly Cloudy" || currentWeather === "Mist") {
		   $('body').addClass("fog");
		}
		else if (currentWeather === "Sunny" || currentWeather === "Fair") {
			$('body').addClass("sunny");
		}
		else if (currentWeather === "Snow") {
			$('body').addClass("snow");
		}
		else if (currentWeather === "Thunderstorm") {
			$('body').addClass("stormy");
		}
		else if (currentWeather === "Rain" || currentWeather === "Showers" || currentWeather === "Scattered Showers") {
			$('body').addClass("rainy");
		}
		else {
			console.log(currentWeather);
		}
	}
});

	