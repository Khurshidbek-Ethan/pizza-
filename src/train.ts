
// Shunday function yozing, u parametridagi arrayni ichidagi 1 marta kelgan elemnetni qaytarsin.
// MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4

function singleNumber(nums: number[]): number {
    const numCount: { [key: number]: number } = {};

    for (const num of nums) {
        if (numCount[num] === undefined) {
            numCount[num] = 1;
        } else {
            numCount[num]++;
        }
    }

    for (const num in numCount) {
        if (numCount[num] === 1) {
            return parseInt(num);
        }
    }

    throw new Error("No single number found");
}

// Test
const result = singleNumber([4, 2, 1, 2, 1]);
console.log(result); // Output: 4



//ZR
// Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}

// function countNumbersAndLetters(input: string): { number: number, letter: number } {
//     let numberCount = 0;
//     let letterCount = 0;

//     for (let char of input) {
//         if (char >= '0' && char <= '9') {
//             numberCount++;
//         } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//             letterCount++;
//         }
//     }

//     return {
//         number: numberCount,
//         letter: letterCount
//     };
// }

// // Misol uchun foydalanish:
// const result = countNumbersAndLetters("string152%\\¥");
// console.log(result);  // { number: 3, letter: 6 }






// Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]

// function findDuplicates(arr: number[]): number[] {
//   const counts: { [key: number]: number } = {};
//   const duplicates: number[] = [];

//   // Array ichidagi elementlarni sanab chiqamiz
//   for (const num of arr) {
//     counts[num] = (counts[num] || 0) + 1;
//   }

//   // 2 martadan ko'p marta kelgan elementlarni qidiramiz
//   for (const num in counts) {
//     if (counts[num] > 1) {
//       duplicates.push(Number(num));
//     }
//   }

//   return duplicates;
// }

// // Funksiyani sinab ko'ramiz
// const result = findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]);
// console.log(result); // [3, 4]

/*
ZP-TASK:

Shunday function yozing, u parametridagi 
array ichida eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

@MITASK
*/

// function majorityElement(arr: any) {
//   const counts = arr.reduce((acc: any, num: any) => {
//     acc[num] = (acc[num] || 0) + 1;
//     return acc;
//   }, {});

//   return Object.keys(counts).reduce((a: any, b: any) =>
//     counts[a] > counts[b] ? a : b
//   );
// }

// const result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);
// console.log("result:", result);

// // ZO-TASK:

// // Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// // MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

// function areParenthesesBalanced(input: string): boolean {
//   let balance = 0;

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === "(") {
//       balance++;
//     } else if (input[i] === ")") {
//       balance--;
//     }

//     // Agar qachondir balans manfiy bo'lsa, bu noto'g'ri joyda yopilgan qavs borligini bildiradi
//     if (balance < 0) {
//       return false;
//     }
//   }

//   // Oxirida balans 0 bo'lishi kerak
//   return balance === 0;
// }

// // Test
// console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda")); // true
// console.log(areParenthesesBalanced("qavslar(notog'ri)joylashgan)(")); // false
// console.log(areParenthesesBalanced("balans(da)(emas")); // false
// console.log(areParenthesesBalanced("(to'g'ri(balansda))")); // true

// Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]

// function rotateArray(arr: any[], index: number): any[] {
//   if (index < 0 || index >= arr.length) {
//     throw new Error("Index is out of bounds");
//   }

//   // Arrayning oxiridan indexgacha bo'lgan qismini olib, boshiga qo'shamiz
//   const partToMove = arr.slice(-index);
//   const remainingPart = arr.slice(0, -index);
//   return partToMove.concat(remainingPart);
// }

// // Misol:
// const result = rotateArray([1, 2, 3, 4, 5, 6], 3);
// console.log(result); // [5, 6, 1, 2, 3, 4]

// Shunday function yozing, u function parametrga berilgan raqamlarni orqasiga ogirib qaytarsin.
// MASALAN: reverseInteger(123456789) return 987654321
// function tarin(number: number) {
//   const result = number.toString().split("").reverse().join("");
//   return result;
// }

// console.log(tarin(123456789));

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

// function stringToKebab(s: string): string {
//   // Boshlang'ich harflarni kichik qilish
//   s = s.toLowerCase();
//   // Bo'shliq belgilarni kebab case gacha almashtirish
//   s = s.replace(/\s+/g, "-");
//   return s;
// }

// // Test qilish
// console.log(stringToKebab("I love Kebab"));

// ZK-TASK:

// Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()

// function printNumbers() {
//   let count = 1; // Raqamlarni hisoblash uchun o'zgaruvchi
//   const interval = setInterval(() => {
//     console.log(count); // Raqamni chop etish
//     if (count === 5) {
//       count = 0; // Agar 5 ga yetib kelsa, qaytadan 1 dan boshlash
//     }
//     count++; // Keyingi raqamga o'tish
//   }, 1000); // Har 1000 millisekundda (1 soniyada) ishga tushadi

//   setTimeout(() => {
//     clearInterval(interval); // 5 soniyadan keyin intervalni to'xtatamiz
//     console.log("Interval to'xtatildi.");
//   }, 5000); // 5000 millisekund (5 soniya) keyin ishga tushadi
// }

// printNumbers();

// ZJ-TASK:

// Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8

// function reduceNestedArray(arr: any[]): number {
//   return arr.reduce((sum, item) => {
//     if (Array.isArray(item)) {
//       // Agar item yana bir array bo'lsa, rekursiv tarzda funksiyani chaqir
//       return sum + reduceNestedArray(item);
//     } else {
//       // Agar item oddiy raqam bo'lsa, uni yig'indiga qo'sh
//       return sum + item;
//     }
//   }, 0);
// }

// // Misollar
// console.log(reduceNestedArray([1, [1, 2, [4]]])); // 8
// console.log(reduceNestedArray([1, [3, 2], 4, [5]])); // 15
// console.log(reduceNestedArray([1, [1, [1, [1, [1]]]]])); // 5

// // ZI-TASK:

// // Shunday function yozing, u function ishga tushgandan 3 soniyadan keyin "Hello World" ni qaytarsin.
// // MASALAN: delayHelloWorld("Hello World") return "Hello World"
// function delayHelloWorld(message: string): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(message);
//     }, 3000); // 3000 milliseconds = 3 seconds
//   });
// }

// // Funksiyani ishlatish misoli:
// delayHelloWorld("Hello World").then(console.log); // 3 soniyadan keyin konsolda "Hello World" chiqaradi

// // Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin.
// // MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]

// function findDisappearedNumbers(nums: number[]): number[] {
//   // Agar berilgan ro'yxat bo'sh bo'lsa, bo'sh ro'yxat qaytariladi.
//   if (nums.length === 0) {
//     return [];
//   }

//   // Ro'yxatdagi eng katta raqamni topamiz.
//   const maxNum = Math.max(...nums);

//   // To'liq raqamlar to'plamini yaratamiz.
//   const fullSet = new Set<number>();
//   for (let i = 1; i <= maxNum; i++) {
//     fullSet.add(i);
//   }

//   // Berilgan raqamlarni to'plamga qo'shamiz.
//   const numSet = new Set<number>(nums);

//   // To'plamdan berilgan raqamlarni olib tashlaymiz.
//   const result: number[] = [];
//   fullSet.forEach((num) => {
//     if (!numSet.has(num)) {
//       result.push(num);
//     }
//   });

//   return result;
// }

// // Test qilish
// console.log(findDisappearedNumbers([1, 3, 4, 7])); // [2, 5, 6]

// // /*
// ZG-TASK:

// Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin.
// MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string'

// @MITASK

// */

// function snakeWords(str: string) {
//   let words = str.split(" ");
//   let capitalize = words.map(function (word) {
//     return word.charAt(0).toLowerCase() + word.slice(1);
//   });
//   return capitalize.join("_");
// }
// const result = snakeWords("name should be a string");
// console.log("result:", result);

// ZF-TASK:

// Shunday function yozing, uni string parametri bolsin. String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
// MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'

// function capitalizeWords(sentence: string): string {
//   return sentence
//     .toLowerCase()
//     .split(" ")
//     .map((word) => {
//       if (word.length <= 2) {
//         return word;
//       }
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }

// console.log("test:", capitalizeWords("NAME should be a string, MIT9"));

/*
ZD-TASK:

Shunday function yozing, uni number, 
array va number parametrlari bolsin 
va berilgan 1-parametr numberga teng 
indexni array ichidan topib 3-parametrdagi 
raqam bilan almashtirib yangilangan arrayni qaytarsin
MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]

@MITASK

// */
// function changeNumberInArray(index: any, value: any, newVal: any) {
//   if (index >= 0 && index < value.length) {
//     value[index] = newVal;
//   }
//   return value;
// }

// const result = changeNumberInArray(1, [1, 3, 7, 2], 2);
// console.log(result);

// Shunday function yozing, uni number, array va number parametrlari bolsin va berilgan 1-parametr numberga teng indexni array ichidan topib 3-parametrdagi raqam bilan almashtirib yangilangan arrayni qaytarsin
// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]

// function changeNumberInArray(
//   index: number,
//   value: number[],
//   new_value: number
// ): number[] {
//   // Array ning uzunligi va indeksni tekshirish
//   if (index >= 0 && index < value.length) {
//     value[index] = new_value;
//   }
//   return value;
// }

// // Test qilish
// const result = changeNumberInArray(1, [1, 3, 7, 2], 2);
// console.log(result); // Kutilgan natija: [1, 2, 7, 2]

// // ZC-TASK:

// // Shunday function yozing, uni number parametri bolsin va function qabul parametrni selsiy miqdori sifatida qabul qilib uni farenhitga ozgartirib bersin
// // MASALAN: celsiusToFahrenheit(0) return 32

// function celsiusToFahrenheit(celsius: number) {
//   const fahrenheit = celsius * 9 / 5 + 32;
//   return fahrenheit;
// }

// console.log(celsiusToFahrenheit(200))

// function randomNumber(min: number, max: number) {
//   return Math.floor(Math.random() * (max - min) + min);
// }
// const result = randomNumber(30, 50);
// console.log("result:", result);

// function sortByAge(array:any) {
//     return array.sort((a:any, b:any) => a.age - b.age);
// }

// // Test
// console.log(sortByAge([{age: 23}, {age: 21}, {age: 13}]));

// Z-TASK:

// Shunday function yozing, uni sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
// MASALAN: sumEvens([1,2,3]) return 2

// function sumEvens(arr: number[]) {
//   return arr.reduce((i, ele) => ele % 2 === 0 ? i + ele : i, 0);
// }
// const result = sumEvens([1, 2, 3, 4, 5])
// console.log(result)

// Y-TASK:

//  Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// function findIntersection(arr1: number[], arr2: number[]) {
//   const intersection: number[] = [];

//   // iteration of arrays
//   arr1.forEach((value) => {
//     if (arr2.includes(value) && !intersection.includes(value)) {
//       intersection.push(value);
//     }
//   });
//   return intersection;
// }
// const result = findIntersection([1, 2, 3], [3, 2, 0]);
// console.log("result:", result);

// // X-TASK:

// // Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
// //  MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// function countOccurences(obj: any, key: any) {
//   let count = 0;

//   function countKeys(val: any) {
//     for (let prop in val) {
//       if (obj.hasOwnProperty(prop)) {
//         if (typeof val[prop] === "object") {
//           countKeys(val[prop]);
//         } else if (prop === key) {
//           count++;
//         }
//       }
//     }
//   }
//   countKeys(obj);
//   return count;
// }

// let data = {
//   model: "Bugatti",
//   steer: { model: "HANKOOK", size: "Bugatti" },
//   bmw: { model: "M5 xiDrive", speed: "320kmh" },
// };

// const result = countOccurences(data, "model");
// console.log("result:", result);

// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

// function chunkArray<T>(arr: T[], num: number) {
//   return arr.reduce((resultArray, item, index) => {
//     const chunkIndex = Math.floor(index / num);
//     if (!resultArray[chunkIndex]) {
//       resultArray[chunkIndex] = [];
//     }
//     resultArray[chunkIndex].push(item);
//     return resultArray;
//   }, [] as T[][]);
// }

// const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// console.log(result);

// /********************** V - TASK *************************************/

// // Shunday function yozing, uni string parametri bolsin va stringdagi harf va
// // u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// // MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// function countChars(str: string) {

//   // bu yerda bo`sh object yaratib olyapmiz
//   const obj: {[key: string]: number} = {};

//   for (let i = 0; i < str.length; i++) {
//       // current char "str[i]".ni "ele" variable ga tenglayapmiz
//       const ele: string = str[i];
//       // obj ichida bu "ele" bowqa yoq bo`lsa uni "1"ga tenglaydi, aks holda unga "+1" qowadi
//       obj[ele] === undefined ? obj[ele] = 1 : obj[ele]++;
//   }

//   return obj;
// }

// const result1 = countChars('hello');
// const result2 = countChars('google');

// console.log("result1:", result1);
// console.log("result2:", result2);

// /********************** U - TASK *************************************/

// // Shunday function yozing, uni number parametri bolsin va
// // 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// // MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// function sumOdds(n: number) {
//   let sum = 0;

//   for (let i = 1; i < n; i+=2){
//     sum += 1
//   }
//   // bu yerda "9 || 11" sonini ham hisobga oladi..
//   // for (let i = 1; i <= n; i+=2){
//   //   sum += 1
//   // }

//   return sum;
// }

// console.log(sumOdds(9));
// console.log(sumOdds(11));

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
