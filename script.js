// function consoleNumbers(array) {
//   let newarray = [];
//   let length = array.length;

//   for (let i = 1; i < length; i += 2) {
//     newarray.push(array[i]);
//   }
//   return newarray;
// }
// console.log(consoleNumbers([4, 10, 5, 6, 9, 0, -2, -3]));
// //[10,6,0,-3]
//------------------------
// function conosleArray(array) {
//   let newarray = [];
//   let length = array.length;
//   for (let i = length - 1; i > 0; i -= 2) {
//     newarray.push(array[i]);
//   }
//   return newarray;
// }

// console.log(
//   conosleArray([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//   ])
// );
//----------------------------
// function addTwoNumbers(a, b) {
//   let sum = a + b;
//   return sum;
// }
// console.log(addTwoNumbers(2, 3));
//----------------------------------

// function addTwoNumbers(a, b) {
//   let sum = a + b;
//   return sum;
// }
// function doubleNumber(number) {
//   let double = number + number;
//   return double;
// }
// console.log(doubleNumber(addTwoNumbers(3, 4)));
//----------------------------at end------
// function checkPrimeNumber(number) {
//   let result = true;
//   for (let i = 2; i < number; i++) {
//     console.log(number, i, number % i);
//     if (number % i == 0) {
//       result = false;
//       //if !=0 ...it has also values else 0 will always return true.
//     }
//     return result;
//   }
// }
// checkPrimeNumber(21);
// console.log(checkPrimeNumber(7));
// console.log(checkPrimeNumber(17));
// console.log(checkPrimeNumber(70));
// function getSum(array) {
//   let sum = 0;
//   let newArray = [];
//   for (let i = 0; i <=che; i++) {
//     newArray.push(checkPrimeNumber(array[i]));
//   }
//   return newArray;+-
// }
// let pnum=checkPrimeNumber([1, 2, 3, 4, 5, 6, 7, 8])
// console.log(getSum());
//---------------------------------

// console.log(countLetters());
//k4j4r4p4l5s1m1s1m3s1m1s1j2g3n2r1
//--------------------------------

// console.log(concatArrays([1, 2, 3], [4, 5, 6]));
//[1,2,3,4,5,6]
//-------------------------------------
// function printStars(string) {
//   let str = string.split(" ");
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].length > 4) {
//       let num = str[i];
//       console.log(num);
//       let number = String(num);
//       console.log(number);
//       let sum = "*";
//       for (let j = 0; j < number.length - 1; j++) {
//         // console.log(number[j].length);
//         sum += "*";
//         console.log(sum);
//       }
//     }
//   }
// }

// console.log(printStars("This is number forty"));
//------------------------
function getRepeated(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] == array[i] && !newArray.includes(array[j])) {
        newArray.push(array[j]);
      }
    }
  }
  return newArray;
}
console.log(getRepeated([1, 2, 2, 2, 3, 3, 5, 5, 9, 8, 6, 7]));
