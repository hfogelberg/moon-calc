var suncalc = require('suncalc');

var lat = 28.411413;
var lon = -16.544961;
var sunTimes = suncalc.getTimes(new Date(),  lat, lon);
console.log("Suntimes");
console.log(sunTimes);

console.log("\nMoon illumination");
var moonTimes = suncalc.getMoonIllumination(new Date(), lat, lon);
console.log(moonTimes);
