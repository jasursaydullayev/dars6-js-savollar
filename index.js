// 1
// let a = 10;
// for (let index = 1; index <= a; index++) {
//     if(index % 2 == 0 ){
//         console.log(index);
//     }
// };
// 2
// let son = prompt('Raqam kiriting');

// if(son < 100) {
//    son = prompt("Raqam kiriting")
// }

// Uyga vazifa
// 1-misol
// function findFirstRepeated(gifts) {
//   const duplicates = gifts.filter((item, index) => (gifts.indexOf(item) !== index));
//  const duplicatedArr = gifts ? duplicates[0] : -1
//   return duplicatedArr;
// }
// console.log(findFirstRepeated([5, 1, 5, 1]));

// 2-misol
// const original = "abcd";
// const modified = "abcde";
// function findNaughtyStep(original, modified) {
//   const orginalArr = Array.from(original);
//   const modifiedArr = Array.from(modified);
//   const result =
//     orginalArr.length == modifiedArr.length
//       ? console.log("")
//       : console.log(
//           String(
//             modifiedArr.filter((org) => orginalArr.includes(org) ? org : '')
//           )
//         );
//   return result;
// }
// findNaughtyStep(original, modified);

//3-misol
