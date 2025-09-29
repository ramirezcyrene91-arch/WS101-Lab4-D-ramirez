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

function calculateAveragePriceByType(properties, type) {
  const filteredProperties = properties.filter(property => property.type === type);
  const totalPrice = filteredProperties.reduce<
