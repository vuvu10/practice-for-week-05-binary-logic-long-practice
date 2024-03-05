// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase16 = element => {
  // Your code here
  if (typeof element === 'string' && element.startsWith('0b')) {

    element = parseInt(element.slice(2), 2);
  }

  if (isNaN(element) || element < 0) {
    throw new Error('Invalid input. Please provide a positive number');
  }

  const hexDigits = '0123456789abcdef';
  let hexString = "";
  while (element > 0) {
    const remainder = element % 16;
    hexString = hexDigits[remainder] + hexString;
    element = Math.floor(element / 16);
  }
  return `0x${hexString}`;



};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
