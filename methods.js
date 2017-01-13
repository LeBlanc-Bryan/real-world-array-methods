var weatherData = require("./data.json")
//Is it going to rain today?
//if under hourly, precipType is rain, then it rained.
//hourly is an object which contains an array called data.

function didItRainToday() {
   return weatherData.hourly.data
   .slice(0,24)
    .some(function(hourlyData) {
        return (hourlyData.precipType === "rain")
    })
}

if (didItRainToday()) {
    console.log("It rained today!");
}
else {
    console.log("It did not rain!");
}
//Is it going to rain in the next 8h?
function didItRain8() {
    return weatherData.hourly.data
    .slice(0,8)
    .some(function(hourlyData) {
        return(hourlyData.precipType === "rain");
    })
}
if (didItRain8()) {
    console.log("It rained in the last 8 hours!");
}
else {
    console.log("It did not rain in the last 8 hours!");
}
