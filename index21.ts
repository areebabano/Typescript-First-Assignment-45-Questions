const country = {
    name : "Pakistan",
    capital : "Islamabad",
    currency : "Rs(rupees)"
};

const countries:Array<typeof country> = [];
countries.push(country);
console.log(countries);
// 2nd object
countries.push({
  name: "USA",
  capital: "Washington,D.C.",
  currency: "$(dollar)"
})
console.log(countries);

const country3 = {
  name: "kuwait",
  capital: "kuwait",
  currency: "KWD(kuwaiti dinar)"
}
countries.push(country3);
console.log(countries);

const country4 = {
  name: "Oman",
  capital: "Muscat",
  currency: "OMR(omani rial)"
}
countries.push(country4);
console.log(countries);
