/********************** U - TASK *************************************/

// Shunday function yozing, uni number parametri bolsin va
// 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

function sumOdds(n: number) {
  let sum = 0;

  for (let i = 1; i < n; i+=2){
    sum += 1
  }
  // bu yerda "9 || 11" sonini ham hisobga oladi..
  // for (let i = 1; i <= n; i+=2){
  //   sum += 1
  // }

  return sum;
}

console.log(sumOdds(9));
console.log(sumOdds(11));




// // // *** T - TASK ***
// // Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin
// // va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// // MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]
// function mergeSortedArrays(arr_list1: number[], arr_list2: number[]) {
//   let newArray: number[] = [];
//   let i: number = 0;
//   let j: number = 0;

//   while (i < arr_list1.length && j < arr_list2.length) {
//     if (arr_list1[i] < arr_list2[j]) {
//       newArray.push(arr_list1[i]);
//       i++;
//     } else {
//       newArray.push(arr_list2[j]);
//       j++;
//     }
//   }

//   // mobodo array ichida owiqcha qopketgan number bo`lsa
//   while (i < arr_list1.length) {
//     newArray.push(arr_list1[i]);
//     i++;
//   }

//   while (j < arr_list2.length) {
//     newArray.push(arr_list2[j]);
//     j++;
//   }

//   return newArray;
// }

// const arr_list1: number[] = [0,3,4,31]; 
// const arr_list2: number[] = [4,6,30]; 

// console.log(mergeSortedArrays(arr_list1, arr_list2));








// // *** R - TASK ***
// // Shunday function yozing, u string parametrga ega bolsin.
// // String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// // MASALAN: calculate("1+3") return 4;

// function calculate(str: string) {
//   // '+' belgisi orqali stringni bo'lib alohida qilamiz
//   const parts = str.split('+');

//   // Har bir qiymatni raqamga keltirib, ularni yig'indisini hisoblaymiz
//   const sum = parts.reduce((acc, val) => acc + parseInt(val), 0);

//   // return parts;
//   return sum; 

// }

// console.log(calculate("1+3"));




// function hasProperty(object: any, key: any) {
//   if (object.hasOwnProperty(key)) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"))
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"))


/*
P - TASK:

Shunday function yozing, u object qabul
 qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

@MITASK
*/

// // Solution 1
// function objectToArray(val: any) {
//   const result = [];
//   for (let key in val) {
//     if (val.hasOwnProperty(key)) {
//       result.push([key, val[key]]);
//     }
//   }
//   return result;
// }
// // solution 2 shortest
// /*function objectToArray(obj: {}) {
//   return Object.entries(obj);
// }
// */

// const obj = { a: 10, b: 20 };
// const result = objectToArray(obj);
// console.log("result:", result);







// *** O - TASK ***
// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin
// va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(array: any[]): number {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//       sum += array[i];
//       // quyidagi mantiq ma'lum bir elementning son emasligini aniqlaydi.
//     } else if (typeof array[i] !== "string" && !isNaN(parseFloat(array[i]))) {
//       sum += parseFloat(array[i]);
//     }
//   }
//   return sum;
// }

// const array_list = [10, "10", {son: 10}, true, 35];
// const result = calculateSumOfNumbers(array_list);

// console.log(result);


// function palindromCheck(word: string) {
//   const word2: string = word.split('').reverse().join('').toString()
//   return word === word2
// }

// console.log(palindromCheck("dad"))
// console.log(palindromCheck("son"))

// function getSquareNumbers(numbers: number[]) {
//   return numbers.map(ele => { return { number: ele, square: ele * ele } })
// }

// const result = getSquareNumbers([1, 2, 3]);
// console.log(result);
// console.log("typeof result:", typeof result)
 
// function reverseSentence(sentence: string) {
//   const arr = sentence.split(" ")
//   let newSentence = ""

//   for (let word of arr) {
//     if (word) {
//       newSentence = newSentence + word.split('').reverse().join('').replace(/[.,!@?#$%^&*s]/g, '') + " ";
//     }
//   }
//   return newSentence;
// }

// console.log(reverseSentence("we like coding!?"))
 
 
 /*  Project Standards
-Loggin standards
- Naming standards
function , method ,variable =>CAMEL     goHome
class => PASCAL                        MemberService
folder,file =>KEBAB
css => SNAKE                           button_style
-ERROR handling

*/

/** Resquest:
 Traditinal API = API
 Rest API
 GraphQL API

 */

/**
 * session/cookies
request join req oziga joylashvoladi 
 self destroy ozini ozi
 */
/**  Frontend developmant
 Tradition Frontend Developmet =>BSSR =>EJS Wramework
 Modern Frontend Developent => SPA => REACT 
*/

/** 
datalarni togri kiritiyotganini tekshireydigon valideshinlar 
Validation:
Frontend validation -> frontendda togri kiritilyotganini tekshirish validation 
Backend validation -> Backend 
Database validation -> 
Burakda 3 ta validationdan foydalaniladi 
/
Pipe ->serverga kirish oraligidagi buni Pipelar bn amalga oshirishimiz mumkin 
/
*/



// Shunday function yozing, u string qabul qilsin 
// va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// @MITASK
//  **/
// defining a function to count the vowels in a string
// const countVowel = (str: string) => {
//   // find the count of vowels
//   const matches = str.match(/[aeiou]/gi);
//   // Ternary operator to handle the case when matches is null
//   const count: number = matches ? matches.length : 0;
//   // return number of vowels
//   return count;
// };
// const result = countVowel("string");
// console.log("result:", result);

/*  Project Standards
-Loggin standards
- Naming standards
function , method ,variable =>CAMEL     goHome
class => PASCAL                        MemberService
folder,file =>KEBAB
css => SNAKE                           button_style
-ERROR handling

*/

/** Resquest:
 Traditinal API = API
 Rest API
 GraphQL API

 */

/**
 * session/cookies
request join req oziga joylashvoladi 
 self destroy ozini ozi
 */
/**  Frontend developmant
 Tradition Frontend Developmet =>BSSR =>EJS Wramework
 Modern Frontend Developent => SPA => REACT 
*/

/** 
datalarni togri kiritiyotganini tekshireydigon valideshinlar 
Validation:
Frontend validation -> frontendda togri kiritilyotganini tekshirish validation 
Backend validation -> Backend 
Database validation -> 
Burakda 3 ta validationdan foydalaniladi 
/
Pipe ->serverga kirish oraligidagi buni Pipelar bn amalga oshirishimiz mumkin 
/
*/




/* J-TASK: 

Shunday function yozing, 
u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

@MITASK
*/

// function findLongestWord(str: any) {
//   // Split the string into array
//   let strSplit = str.split(" ");
//   // Return the first sorted item of the Array
//   return strSplit.sort((a: any, b: any) => b.length - a.length)[0];
// }
// const result = findLongestWord("I come from Uzbekistan");
// console.log("result:", result);


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
  

