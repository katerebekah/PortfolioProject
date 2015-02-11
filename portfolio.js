$.ajax({
	url: "http://api.wunderground.com/api/33c41345d1292535/conditions/q/TN/Nashville.json",
	datatype: 'jsonp',
	success: function(results) {
		var currentWeather = results.current_observation.weather;
		$('.weatherNashville').text(currentWeather);
		if (currentWeather === "Heavy Fog" || currentWeather === "Light Fog" 
			|| currentWeather === "Patches of Fog" || currentWeather === "Fog" || currentWeather === "Mist") {
		   $('body').addClass("fog");
		}
		else if (currentWeather === "Sunny" || currentWeather === "Fair" || currentWeather === "Clear") {
			$('body').addClass("sunny");
		}
		else if (currentWeather === "Heavy Snow Showers" || currentWeather === "Light Snow Showers" 
				|| currentWeather === "Snow Showers" || currentWeather === "Blowing Snow" 
				|| currentWeather === "Low Drifting Snow" || currentWeather === "Heavy Snow" 
				|| currentWeather === "Snow" || currentWeather === "Light Snow") {
			$('body').addClass("snow");
		}
		else if (currentWeather === "Thunderstorm and Rain" || currentWeather === "Thunderstorm") {
			$('body').addClass("stormy");
		}
		else if (currentWeather === "Freezing Rain" || currentWeather === "Heavy Rain" 
				|| currentWeather === "Light Rain" || currentWeather === "Heavy Drizzle" 
				|| currentWeather === "Light Drizzle" || currentWeather === "Rain" 
				|| currentWeather === "Showers" || currentWeather === "Scattered Showers") {
			$('body').addClass("rainy");
		}
		else {
			console.log(currentWeather);
		}
	}
});

	