/** 
 Tradition Frontend Developmet =>BSSR =>EJS Wramework
 Modern Frontend Developent => SPA => REACT 
*/

/* J-TASK: 

Shunday function yozing, 
u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

@MITASK
*/

function findLongestWord(str: any) {
  // Split the string into array
  let strSplit = str.split(" ");
  // Return the first sorted item of the Array
  return strSplit.sort((a: any, b: any) => b.length - a.length)[0];
}
const result = findLongestWord("I come from Uzbekistan");
console.log("result:", result);












/* I-TASK: 

Shunday function tuzing, unga string argument pass bolsin. 
Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"

@MITASK */

// function getDigits(str: string) {
//     let num_str = str.replace(/[^0-9]/g, "");
//     return parseInt(num_str);
//   }
  
//   const result = getDigits("m14i1t");
//   console.log(result);
  










/*  Project Standards
-Loggin standards
- Naming standards
function , method ,variable =>CAMEL     goHome
class => PASCAL                        MemberService
folder,file =>KEBAB
css => SNAKE                           button_style
-ERROR handling

*/

/**
 Traditinal API = API
 Rest API
 GraphQL API

 */













// function getPositive(arr: number[]) {
//   return arr.reduce((result: string, num: number) => {
//     if (num > 0) {
//       result += num.toString();
//     }
//     return result;
//   }, "");
// }
// const result = getPositive([1, -4, 2]);
// console.log(result);






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