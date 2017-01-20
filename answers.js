var weatherData = require("./weatherdata.json");

function rainToday() {
  return weatherData.hourly.data
    .slice(0, 24)
    .some(function(hourlyData) {
      return hourlyData.precipType == "rain";
    })
}
if (rainToday) {
  console.log("It will rain in the next 24h :(");
}
//
function rain8() {
  return weatherData.hourly.data
  .slice(0,8)
  .some(function(hourlyData) {
    return hourlyData.precipType == "rain";
  })
}

if (rain8) {
  console.log("It will rain in the next 8h :(");
}
//
function temps() {
  return weatherData.hourly.data
  .map(function(hourlyData) {
    return hourlyData.temperature;
  })
}
console.log(temps());
//
function whenitRains() {
  return weatherData.hourly.data
  .filter(function(hourlyData) {
    return hourlyData.precipType == "rain";
  })
  .map(function(hourlyData){
    return new Date(hourlyData.time * 1000);
  })
}
console.log(whenitRains());
//
function sunnyWays() {
  return weatherData.daily.data.every(function(dailyData) {
    return dailyData.summary == "sun";
  })
}

if (sunnyWays()) {
  console.log("It's going to be sunny all week!");
}
else {
  console.log("It won't be sunny every day");
}
//
function hottestToday() {
  return weatherData.hourly.data
  .reduce(function(highTemp, hourlyData) {
    if(highTemp < hourlyData.temperature) {
      highTemp = hourlyData.temperature;
    }
    return highTemp;
  }, -Infinity)
}
console.log(hottestToday())
//
console.log("Icon question...")

function weatherStats() {
  var iconObject = {};
  
  weatherData.daily.data
  .map(function(dailyData) {
  return dailyData.icon;
  })
  .forEach(function(icon) {
    if (iconObject[icon]) {
      iconObject[icon] = iconObject[icon] + 1;
    }
    else {
      iconObject[icon] = 1;
    }
  })
  
  return iconObject;
}
console.log(weatherStats());
//
var happyData = require('./happydata.json');

function businessTime() {
  return happyData
 
 .filter(function(data) {
    if(data.email.includes("biz")) {
      return true;
    }
  })
  
  .map(function(bizData) {
    return bizData.address.city;
  })
  
  .filter(function(element, index, array) {
      if(index == array.lastIndexOf(element)) {
        return true;
    
    }
  })
  
  .forEach(function(uniqueCity) {
    console.log(uniqueCity);
  })
}
console.log(businessTime());