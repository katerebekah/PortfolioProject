//This begins the API Weather integration that changes the background and adds the current conditions to the footer.
var currentWeather = "";
var currentTemp = "";
var bodyClass = "";

//These are the weather options from weather underground, sorted according to the background to be displayed. 
//Note that cloudy weather is not included -- the default background is cloudy/overcast, so we didn't need that array
var sunnyWeather = ["Clear", "Partly Cloudy"];
var snowyWeather = ["Light Snow", "Heavy Snow", "Snow", "Light Snow Grains", "Heavy Snow Grains", "Snow Grains", "Light Ice Crystals", "Heavy Ice Crystals", "Ice Crystals", "Light Ice Pellets", "Heavy Ice Pellets", "Ice Pellets", "Light Low Drifting Snow", "Heavy Low Drifting Snow", "Low Drifting Snow", "Light Blowing Snow", "Heavy Blowing Snow", "Blowing Snow", "Light Snow Showers", "Heavy Snow Showers", "Snow Showers", "Light Snow Blowing Snow Mist", "Heavy Snow Blowing Snow Mist", "Snow Blowing Snow Mist", "Light Ice Pellet Showers", "Heavy Ice Pellet Showers", "Ice Pellet Showers"];
var rainyWeather = ["Light Drizzle", "Heavy Drizzle", "Drizzle", "Light Rain", "Heavy Rain", "Rain", "Light Spray", "Heavy Spray", "Spray", "Light Rain Mist", "Heavy Rain Mist", "Rain Mist", "Light Rain Showers", "Heavy Rain Showers", "Rain Showers", "Light Freezing Drizzle", "Heavy Freezing Drizzle", "Freezing Drizzle", "Light Freezing Rain", "Heavy Freezing Rain", "Freezing Rain"];
var stormyWeather = ["Funnel Cloud", "Squalls", "Small Hail", "Light Hail", "Heavy Hail", "Hail", "Light Hail Showers", "Heavy Hail Showers", "Hail Showers", "Light Thunderstorm", "Heavy Thunderstorm", "Thunderstorm", "Light Thunderstorms and Rain", "Heavy Thunderstorms and Rain", "Thunderstorms and Rain", "Light Thunderstorms and Ice Pellets", "Heavy Thunderstorms and Ice Pellets", "Thunderstorms and Ice Pellets", "Light Thunderstorms with Hail", "Heavy Thunderstorms with Hail", "Thunderstorms with Hail", "Light Thunderstorms with Small Hail", "Heavy Thunderstorms with Small Hail", "Thunderstorms with Small Hail"];
var foggyWeather = ["Light Mist", "Heavy Mist", "Mist", "Light Fog", "Heavy Fog", "Fog", "Light Fog Patches", "Heavy Fog Patches", "Fog Patches", "Light Freezing Fog", "Heavy Freezing Fog", "Freezing Fog", "Patches of Fog", "Shallow Fog", "Partial Fog"];

//This is the call for the API. The callback function here includes the two changes to the footer and the test to change the background
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
        } else if (isItInArray(currentWeather, foggyWeather) === true) {
            bodyClass = "fog";
        } else if (isItInArray(currentWeather, rainyWeather) === true) {
            bodyClass = "rainy";
        } else if (isItInArray(currentWeather, stormyWeather) === true) {
            bodyClass = "stormy";
        } else if (isItInArray(currentWeather, snowyWeather) === true) {
            bodyClass = "snow";
        } else {
            return false
        };
        $('body').addClass(bodyClass);
    }
});

//this function is separate from the callback function because it could be utilized in other places (not specific to this)
function isItInArray(value, array) {
    return $.inArray(value, array) > -1;
}



//On Click Functions for the li buttons to reveal classes below

$('.developer').click(function() {
    //Takes active (class that changes color) off any button and adds it to newly selected button
    $('.buttons').removeClass('active');
    $('.developer').addClass('active');
    //makes the rest of the divs invisible and makes the newly selected section visible
    $('.invisibleSections div').removeClass('visible');
    $('.devSection').addClass('visible');
});
$('.designer').click(function() {
    $('.buttons').removeClass('active');
    $('.designer').addClass('active');
    $('.invisibleSections div').removeClass('visible');
    $('.desSection').addClass('visible');
});
$('.archivist').click(function() {
    $('.buttons').removeClass('active');
    $('.archivist').addClass('active');
    $('.invisibleSections div').removeClass('visible');
    $('.arcSection').addClass('visible');
});
$('.contact').click(function() {
    $('.buttons').removeClass('active');
    $('.contact').addClass('active');
    $('.invisibleSections div').removeClass('visible');
    $('.conSection').addClass('visible');
});
