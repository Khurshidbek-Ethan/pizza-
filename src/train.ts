function getPositive(arr) {
  let positiveNums = arr.filter( num > 0);
  let result = positiveNums.length > 0 ? positiveNums.join('') : '';
  return result;
}

// Test
console.log(getPositive([1, -4, 2])); // Output: "12"






// function gerReverse(str) {
//     // Stringni massivga aylantiramiz
//     let strArray = str.split('');
    
//     // Massivni teskari tartibda qaytaramiz
//     let reversedArray = strArray.reverse();
    
//     // Massivni qaytarilgan stringga aylantiramiz
//     let reversedStr = reversedArray.join('');
    
//     return reversedStr;
//   }
  
//   // Test qilamiz
//   var result = gerReverse("hello");
//   console.log(result); // Natija: "olleh"