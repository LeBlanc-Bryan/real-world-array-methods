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
//Just give me the temperature - Using the appropriate array method, start with the hourly data and return 
//an array of only the temperatures. Your returned array should have the same number of elements as the original array.
//Example output: [72.9, 70.5, ...]

function gimmeTemps() {
    return weatherData.hourly.data
    .map(function(hourlyData) {
        return hourlyData.temperature
    })
    
}
console.log(gimmeTemps());
// When is it going to rain? - Using a chain of two array methods, start with 
// the hourly data and return an array of Date objects saying when it will rain. 
// To do this, you'll have to: Eliminate any item where it is not raining.
// Extract the time from the remaining items and create a Date object
function whenitRains() {
    return weatherData.hourly.data
    .filter(function(hourlyData) {
        return (hourlyData.precipType === "rain");
    })
        .reduce(function(dateObject, hourlyData) {
            
            var myDateObject = hourlyData.time;
            dateObject.push(new Date(myDateObject * 1000));
            return dateObject;
        },[])
    }

console.log(whenitRains());

// Is it going to be sunny all week?

// Using the appropriate array method, start with the daily data 
// and figure out whether it will be sunny every day of the week. 
// Use the summary and check if it contains the word "sun" using your preferred method

function sunnyWeek() {
    return weatherData.daily.data
    .every(function(dailyData) {
        return (dailyData.summary.includes("sun"));
    })
}
console.log(sunnyWeek());

//How hot will it be today?

// Using the appropriate array method, start with the hourly data and figure out 
// what will be the hottest temperature today. As a hint, notice that you will need
// to visit each item in turn, but also keep track of a separate value.

