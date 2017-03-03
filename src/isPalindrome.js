export default function isPalindrome(string) {

  if (typeof string !== 'string') {
    return 'Input is not a string'
  }
  var word = string.replace(/\W+/g, "").toLowerCase();
  var arrStr = word.split('');
  var revStr = arrStr.reverse();
  var joinRevStr = revStr.join('')
  return joinRevStr === word;
}
console.log(isPalindrome('radar'))
