export default function fizzBuzz() {
  var numbers = []
  for (var number = 1; number <= 100; number++) {

    if (number % 3 == 0 && number % 5 == 0){
      numbers.push('FizzBuzz')

    } else if (number % 5 == 0 && number % 3 !== 0) {
          numbers.push('Buzz')

      } else if (number % 3 == 0) {
            numbers.push('Fizz')

          } else {
            numbers.push(number)
    }
  }
  return numbers
}
console.log(fizzBuzz())
