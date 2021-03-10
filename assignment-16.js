//Instrutions :- create a function called as verify, and the function should display
// a message if the cart total is greater than 500 and the total number of items in the
// cart is greater or equal to 5.

function verify(cartTotal, noOfItems) {
  cartTotal >= 500 && noOfItems >= 5
    ? console.log("you are eligble for free delivery")
    : console.log("you are not eligible for free delivery");
}

verify(600, 6);
