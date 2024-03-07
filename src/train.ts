
/** 
 Tradition Frontend Developmet =>BSSR =>EJS Wramework
 Modern Frontend Developent => SPA => REACT 
*/



/* I-TASK: 

Shunday function tuzing, unga string argument pass bolsin. 
Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"

@MITASK */

function getDigits(str: string) {
    let num_str = str.replace(/[^0-9]/g, "");
    return parseInt(num_str);
  }
  
  const result = getDigits("m14i1t");
  console.log(result);
  










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