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

function calculateAveragePriceByType(listing){
  const totalPrice = listing.reduce((account, property) => account + property.price, 0);
  return totalPrice / listing.length;
}

function FilbyTyp(listings, type) {
  return listings.filter(property => property.type === type);
}
 
function FinLarProp(listings){
  return listings.reduce((largest, property) => property.size > largest.size ? property : largest, listing[0]);
}
function GruByPriRan( Listings){
  const PriceRan = {
    "0 - 1 Million": [],
    "1 - 5 Million": [],
    "5 - 10 Million": [],
    "10 - 15 Million": [],
    "15 - 20 Million": [],
  };

  Listings.forEach(property => {
    if (property.price < 1000000) {
      PriRan["0 - 1 million"].push(property);
    } else if (property.price < 5000000) {
      PriRan["1 - 5 million"].push(property);
    } else if (property.price < 10000000) {
      PriRan["5 - 10 million"].push(property);
    } else if (property.price < 15000000) {
      PriRan["10 - 15 million"].push(property);
    } else {
       PriRan["15 - 20 million"].push(property);
    }
  });

  return PriRa;
}
function FetNewList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newListings = [
        { location: "Zone 2, UEP Catarman Northern Samar", type: "House and Lot", price: 1200000, size: 34},
        { location: "Lucban, Bobon Northern Samar", type: "House and Lot", price: 2000000, size: 39},
        ];
      resolve(newListings);
    }, 2000);
  });
}
       

console.log("Average Price:", calculateAveragePriceByType(properties));
console.log("Residential Lots:" FilbyTyp(properties, "Residential Lot"));
console.log("Largest Property:" FinLarProp(properties));
console.log("Group by Price Range:", GruByPriRan(properties));

FetNewList().then(newProperties => {
  console.log("Fetched New Listing:", newProperties);
});
  
