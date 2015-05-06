'use strict';

$(document).ready(function() {

  //This begins the API Weather integration that changes the background and adds the current conditions to the footer.

  //These are the weather options from weather underground, sorted according to the background to be displayed. 
  //Note that cloudy weather is not included -- the default background is cloudy overcast, so we didn't need that array
  var sunnyWeather = ['Clear', 'Partly Cloudy'];
  var snowyWeather = ['Light Snow', 'Heavy Snow', 'Snow', 'Light Snow Grains', 'Heavy Snow Grains', 'Snow Grains', 'Light Ice Crystals', 'Heavy Ice Crystals', 'Ice Crystals', 'Light Ice Pellets', 'Heavy Ice Pellets', 'Ice Pellets', 'Light Low Drifting Snow', 'Heavy Low Drifting Snow', 'Low Drifting Snow', 'Light Blowing Snow', 'Heavy Blowing Snow', 'Blowing Snow', 'Light Snow Showers', 'Heavy Snow Showers', 'Snow Showers', 'Light Snow Blowing Snow Mist', 'Heavy Snow Blowing Snow Mist', 'Snow Blowing Snow Mist', 'Light Ice Pellet Showers', 'Heavy Ice Pellet Showers', 'Ice Pellet Showers'];
  var rainyWeather = ['Light Drizzle', 'Heavy Drizzle', 'Drizzle', 'Light Rain', 'Heavy Rain', 'Rain', 'Light Spray', 'Heavy Spray', 'Spray', 'Light Rain Mist', 'Heavy Rain Mist', 'Rain Mist', 'Light Rain Showers', 'Heavy Rain Showers', 'Rain Showers', 'Light Freezing Drizzle', 'Heavy Freezing Drizzle', 'Freezing Drizzle', 'Light Freezing Rain', 'Heavy Freezing Rain', 'Freezing Rain'];
  var stormyWeather = ['Funnel Cloud', 'Squalls', 'Small Hail', 'Light Hail', 'Heavy Hail', 'Hail', 'Light Hail Showers', 'Heavy Hail Showers', 'Hail Showers', 'Light Thunderstorm', 'Heavy Thunderstorm', 'Thunderstorm', 'Light Thunderstorms and Rain', 'Heavy Thunderstorms and Rain', 'Thunderstorms and Rain', 'Light Thunderstorms and Ice Pellets', 'Heavy Thunderstorms and Ice Pellets', 'Thunderstorms and Ice Pellets', 'Light Thunderstorms with Hail', 'Heavy Thunderstorms with Hail', 'Thunderstorms with Hail', 'Light Thunderstorms with Small Hail', 'Heavy Thunderstorms with Small Hail', 'Thunderstorms with Small Hail'];
  var foggyWeather = ['Light Mist', 'Heavy Mist', 'Mist', 'Light Fog', 'Heavy Fog', 'Fog', 'Light Fog Patches', 'Heavy Fog Patches', 'Fog Patches', 'Light Freezing Fog', 'Heavy Freezing Fog', 'Freezing Fog', 'Patches of Fog', 'Shallow Fog', 'Partial Fog'];

  //This is the call for the API. The callback function here includes the two changes to the footer and the test to change the background
  $.ajax({
    url: 'http://api.wunderground.com/api/33c41345d1292535/conditions/q/TN/Nashville.json',
    datatype: 'jsonp',
    success: function(results) {
      var currentWeather = results.current_observation.weather;
      var currentTemp = results.current_observation.temp_f;
      console.log(results);
      $('.weatherNashville').text(currentWeather.toLowerCase());
      $('.tempNashville').text(currentTemp);
      if (isItInArray(currentWeather, sunnyWeather)) {
        $('body').addClass('sunny');
      } else if (isItInArray(currentWeather, foggyWeather)) {
        $('body').addClass('fog');
      } else if (isItInArray(currentWeather, rainyWeather)) {
        $('body').addClass('rainy');
      } else if (isItInArray(currentWeather, stormyWeather)) {
        $('body').addClass('stormy');
      } else if (isItInArray(currentWeather, snowyWeather)) {
        $('body').addClass('snow');
      }
    }
  });

  //check to see if item is in array
  function isItInArray(value, array) {
    return $.inArray(value, array) > -1;
  }



  //On Click Functions for the li buttons to reveal content below

  function onClickSelect(button, section) {
    $('.buttons').removeClass('active');
    button.addClass('active');
    //makes selected div visible, other divs invisible
    $('.invisibleSections div').removeClass('visible');
    section.addClass('visible');
  }

  $('.developer').click(function() {
    onClickSelect($(this), $('.devSection'));
  });
  $('.designer').click(function() {
    onClickSelect($(this), $('.desSection'));
  });
  $('.archivist').click(function() {
    onClickSelect($(this), $('.arcSection'));
  });
  $('.contact').click(function() {
    onClickSelect($(this), $('.conSection'));
  });
});
