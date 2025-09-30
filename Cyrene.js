var http = require('http');
var server = http.createServer( (request, response) => {
  response.end('Versions: ' + JSON.stringify(process.versions));
});
server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});

  const properties = [
  { location: "Town and country north marilao, Bulacan", type: "Residential lot", price: 1700000, size: 231 },
  { location: "Camarin north,Caloocan", type: "Residential lot", price: 5500000, size: 375 },
  { location: "Sacred heart village, Quezon City", type: "Residential lot", price: 9500000, size: 306 },
  { location: "Fairmount hills, Antipolo city", type: "Residential lot", price: 15000000, size: 813 },
  { location: " 11th Avenue, BGC, Taguig", type: "Commercial", price: 1700000, size: 100 },
  { location: "Capitol hills drive, Quezon City", type: "House and lot", price: 10000000, size: 306 },
  { location: "Capas Tarlac", type: "House and lot", price: 20000000, size: 1000 },
  { location: "Greenhills Garden Square, Quezon city", type: "Condominium", price: 17000000, size: 900 },
];

function calculateAveragePriceByType(listing) {
  const totalPrice = listing.reduce((account, property) => account + property.price, 0);
  return totalPrice / listing.length;
}

function FilbyTyp(listings, type) {
  return listings.filter(property => property.type === type);
}
 
function FinLarProp(listings) {
  return listings.reduce((largest, property) => property.size > largest.size ? property : largest, listing[0]);
}

console.log("average price:", calculateAveragePriceByType(properties));
console.log("residential lots:" FilbyTyp(properties, "residential lot"));
console.log("largest property:" FinLarProp(properties));
  
