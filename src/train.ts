
function gerReverse(str) {
    // Stringni massivga aylantiramiz
    let strArray = str.split('');
    
    // Massivni teskari tartibda qaytaramiz
    let reversedArray = strArray.reverse();
    
    // Massivni qaytarilgan stringga aylantiramiz
    let reversedStr = reversedArray.join('');
    
    return reversedStr;
  }
  
  // Test qilamiz
  var result = gerReverse("hello");
  console.log(result); // Natija: "olleh"