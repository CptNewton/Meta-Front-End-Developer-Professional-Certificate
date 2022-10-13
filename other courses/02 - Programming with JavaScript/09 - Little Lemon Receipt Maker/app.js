// Given code
const dishData = [
  {
    name: "Italian pasta",
    price: 9.55,
  },
  {
    name: "Rice with veggies",
    price: 8.65,
  },
  {
    name: "Chicken with potatoes",
    price: 15.55,
  },
  {
    name: "Vegetarian Pizza",
    price: 6.45,
  },
];
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {
  if (taxBoolean == true) {
    for (obj in dishData) {
      var finalPrice = dishData[obj].price * tax;
      console.log("Dish: " + dishData[obj].name + " Price: $" + finalPrice);
    }
  } else if (taxBoolean == false) {
    for (obj in dishData) {
      var finalPrice = dishData[obj].price;
      console.log("Dish: " + dishData[obj].name + " Price: $" + finalPrice);
    }
  } else {
    console.log("You need to pass a boolean to the getPrices call!");
  }
}

getPrices(true);

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);

  if (typeof guests == "number" && 0 < guests && guests < 30) {
    var discount = 0;
    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    }
    console.log("Discount is: $" + discount);
  } else {
    console.log("The second argument must be a number between 0 and 30");
  }
}

// Call getDiscount()
getDiscount(true, 2);
