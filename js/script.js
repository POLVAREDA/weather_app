function weathers(city) {
  const url = "//api.openweathermap.org/data/2.5/forecast";

  const wdata = {
    q: city,
    appid: "61817fe9871c5ce196a7b67a92ce3a6b",
    units: "metric",
    lang: "kr",
  };
  $.ajax({
    dataType: "json",
    url: url,
    data: wdata,
    success: function (data) {
      $("#latitude").text(data.city.coord.lat);
      $("#longitude").text(data.city.coord.lon);
      const weatherList = data.list;
      for (const item of weatherList) {
        $("#weather-list").append(
          "<li>" +
            item.main.temp +
            "°C, " +
            item.weather[0].description +
            "</li>"
        );
      }
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });
}

weathers("Seoul");

// function getWeatherIcon(iconName) {
//   let color, icon;
//   switch (iconName) {
//     case "01d":
//       color = "#ff8000";
//       icon = "wi-day-sunny";
//       break;
//     case "02d":
//       color = "#e8e8e8";
//       icon = "wi-day-cloudy";
//       break;
//     case "03d":
//       color = "#e8e8e8";
//       icon = "wi-cloud";
//       break;
//     case "04d":
//       color = "#cfcfcf";
//       icon = "wi-cloud";
//       break;
//     case "09d":
//       color = "#deeef0";
//       icon = "wi-day-rain";
//       break;
//     case "10d":
//       color = "#deeef0";
//       icon = "wi-day-rain-wind";
//       break;
//     case "11d":
//       color = "#e8d79a";
//       icon = "wi-day-thunderstorm";
//       break;
//     case "13d":
//       color = "#efefef";
//       icon = "wi-day-snow";
//       break;
//     case "50d":
//       color = "#bebbb1";
//       icon = "wi-fog";
//       break;
//     case "01n":
//       color = "#ffea00";
//       icon = "wi-night-clear";
//       break;
//     case "02n":
//       color = "#b5b5b5";
//       icon = "wi-night-alt-cloudy";
//       break;
//     case "03n":
//       color = "#b5b5b5";
//       icon = "wi-cloud";
//       break;
//     case "04n":
//       color = "#949494";
//       icon = "wi-cloud";
//       break;
//     case "09n":
//       color = "#51686b";
//       icon = "wi-night-alt-rain";
//       break;
//     case "10n":
//       color = "#51686b";
//       icon = "wi-night-alt-rain-wind";
//       break;
//     case "11n":
//       color = "#8a7a42";
//       icon = "wi-night-thunderstorm";
//       break;
//     case "13n":
//       color = "#d9d9d9";
//       icon = "wi-night-snow";
//       break;
//     case "50n":
//       color = "#bebbb1";
//       icon = "wi-night-fog";
//       break;
//   }
//   const weathers = [icon, color];
//   return weathers;
// }
