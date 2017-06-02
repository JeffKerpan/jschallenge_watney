function decode(str){
  const array = str.split(',').split('');
  const hex = [];
  for (var i=0; i<array.length; i++) {
    let num1 = array[i][0];
    let num2 = array[i][1];
    if (num2 === 'a') {
      num2 = 10;
    } else if (num2 === 'b') {
      num2 = 11;
    } else if (num2 === 'c') {
      num2 = 12;
    } else if (num2 === 'd') {
      num2 = 13;
    } else if (num2 === 'e') {
      num2 = 14;
    } else if (num2 === 'f') {
      num2 = 15;
    }
  }
  return 
}

function encode(str){
  const array = (str.split('').map(element =>
    element.charCodeAt()));
    const hex = [];
    for (var i = 0; i < array.length; i++) {
      let num1 = Math.floor(array[i]/16);
      let num2 = ((array[i]-(num1*16)));
      if (num2 === 10) {
        num2 = 'a';
      } else if (num2 === 11) {
        num2 = 'b';
      } else if (num2 === 12) {
        num2 = 'c';
      } else if (num2 === 13) {
        num2 = 'd';
      } else if (num2 === 14) {
        num2 = 'e';
      } else if (num2 === 15) {
        num2 = 'f';
      }
      hex[i] = [num1, num2].join('');
    }
    return hex.join(',');
}

function encodeArc(str) {

}

module.exports = {decode,encode,encodeArc};
