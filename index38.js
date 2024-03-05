"use strict";
function describe_city(city, country = "Pakistan") {
    return console.log(`${city} is in ${country}.`);
}
describe_city("karachi");
describe_city("Silicon Valley", "USA");
describe_city("Toronto", "Canada");
