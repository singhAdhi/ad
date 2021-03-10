function cart(item1, item2, item3){
    var cartTotal = item1 + item2 + item3;
    var deliveryFee = 50
    if (cartTotal >= 500) {
        return false;
    } else {
        return true
    }
}

var deliveryCheck = cart(10,20,400);
if (deliveryCheck) {
    console.log("You are not Eligible for free Delivery");
} else {
    console.log("You are eligible for free Delivery");
}