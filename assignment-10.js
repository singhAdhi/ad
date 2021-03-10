// Instructions:- The Price for 1 ltr of petrol cost Rs. 97.
// There are 4 Vehicles, given to you
// A car has requires 10 Ltr of Petrol.
// A bike requires 5 ltr of Petrol.
// A Truck requires 30 ltr of Petrol.
// A Bus requires 25 ltr of Petrol.

// Calculate the cost of petrol required for each vehicle, and display the cost of each like
// "The Cost of Petrol for a Car will be YOUR_ANSWER"

// =========================== Your Code ============================== //
var vehicle = "car";
var petrolPrice = 97;
var carPrice = 10 * petrolPrice;
var truckPrice = 30 * petrolPrice;
var busPrice = 25 * petrolPrice;
var bikePrice = 10 * petrolPrice;

if (vehicle === "car") console.log(`the cost of ${vehicle} will be ${carPrice}`);
else if (vehicle === "truck") console.log(`the cost of ${vehicle} will be ${truckPrice}`);
else if (vehicle === "bus") console.log(`the cost of ${vehicle} will be ${busPrice}`);
else if (vehicle === "bike") console.log(`the cost of  ${vehicle} will be ${bikePrice}`);
