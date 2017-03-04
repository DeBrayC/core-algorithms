export default function makeChange({price, amountGiven}) {
var object = {'quarters':0 , 'dimes':0 , 'nickels':0 , 'pennies':0 }
var difference = amountGiven - price
  if  (difference >= 25) {
    // # of quarters
    Math.floor(difference / 25);
    var quarters = Math.floor(difference / 25);
    difference = (difference % 25);
    object.quarters = quarters
    console.log(object)

  }
  // # of dimes
  if (difference >= 10) {
    Math.floor(difference / 10)
    var dimes = Math.floor(difference / 10);
    difference = (difference % 10);
    object.dimes = dimes
    console.log(object)

  }
  // # of nickels
  if (difference >= 5) {
    Math.floor(difference / 5)
    var nickels = Math.floor(difference / 5);
    difference = (difference % 5)
    object.nickels = nickels
    console.log(object)

  }
  // # of pennies
  if (difference > 0){
    var pennies = difference
    object.pennies = pennies
  }
return object
}
