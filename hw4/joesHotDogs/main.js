var menu = [
  {
    item: "hotDogs", 
    price: 3.25
  },
  {
    item: "frenchFries", 
    price: 2
  },
  {
    item: "drinks", 
    price: 1.5 
  }
];

var currentOrder = [
  {
    item: "hotDogs", 
    quant: 0
  },
  {
    item: "frenchFries", 
    quant: 0
  },
  {
    item: "drinks", 
    quant: 0
  }
];

function order() {
  for (i = 0; i < 3; i++) {
    var type = document.forms[0].elements[i].id;
    var quant = parseInt(document.forms[0].elements[i].value);
    addToOrder(type, quant);
  }
  var orderT = calculatePrice();
  var discount = calculateDiscount(orderT);
  var tax = calculateTax(orderT).toFixed(2);
  var total = parseFloat(orderT) + parseFloat(tax) - parseFloat(discount);
  total = total.toFixed(2);

  displayOrder(orderT, discount, tax, total);
}

function displayOrder(orderT, discount, tax, total) {

    document.getElementById('finalOrder').innerHTML = "Your Order is";
    
    var hotDogs = "Hot Dogs x " + currentOrder[0].quant;
    var frenchFries = "French Fries x " + currentOrder[1].quant;
    var Drinks = "Drinks x " + currentOrder[2].quant;

    document.getElementById('HD').innerHTML = hotDogs;
    document.getElementById('FF').innerHTML = frenchFries;
    document.getElementById('D').innerHTML = Drinks;

    orderT = "Subtotal : " + orderT;
    discount = "Discount : " + discount;
    tax = "Tax : " + tax;
    total = "TOTAL : " + total;

    document.getElementById('subtotal').innerHTML = orderT  + " usd";
    document.getElementById('discount').innerHTML = discount  + " usd";
    document.getElementById('tax').innerHTML = tax  + " usd";
    document.getElementById('total').innerHTML = total  + " usd";

    resetForm();


}

function addToOrder (type, num) {
    if (type == "numHD") {
      currentOrder[0].quant += num;
    } else if (type == "numFF") {
      currentOrder[1].quant += num;
    } else if (type == "numD") {
      currentOrder[2].quant += num;
    }
}

function calculatePrice () {
  var price = 0;
  for (i = 0; i < 3; i++) {
    price += (currentOrder[i].quant * menu[i].price);
  }
  return price;
}

function calculateDiscount( currentTotal ) {

  if (currentTotal > 20) {
    var discount = (currentTotal*0.1);
    return discount;
  }
  return 0;
}

function calculateTax( currentTotal ) {
  var tax = (currentTotal*0.0625);
  return tax;
}

function resetForm() {
  for (i = 0;  i < 3; i++){
    currentOrder[i].quant = 0;
  }
  document.getElementById('numHD').value = 0;
  document.getElementById('numFF').value = 0;
  document.getElementById('numD').value = 0;
}

