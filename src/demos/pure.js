
/* !!!!!👊👊👊👊👊👊👊 PUSH VERSUS CONCAT 👊👊👊👊👊👊👊!!!!!!!!!!!!  */

let input = [2,4,6,8];

input.push(10);
console.log(input);  // NOT pure

input =['a', 'b', 'c'];
const newTable = input.concat('d');
console.log(newTable, input); // PURE !!!
