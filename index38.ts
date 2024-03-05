function describe_city(city: string , country: string = "Pakistan"): void{
    return console.log(`${city} is in ${country}.`);
}

describe_city("karachi");

describe_city("Silicon Valley", "USA")

describe_city("Toronto", "Canada");
