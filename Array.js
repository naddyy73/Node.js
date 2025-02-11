const rdl = require('readline');
const rl = rdl.createInterface({input : process.stdin, output : process.stdout});

var arr = [1,7,5,7,7];
const arr1 = ['q','a','z','u','b'];
console.log("Array 1:-" + arr);
console.log("Array 2:-" + arr1);
arr[0] = "new";
arr1[0] = "new1";

console.log("Updated array :- " + arr);
console.log("updated second array:- " + arr1);

arr.push(70);
console.log("Array 1:-" + arr);

arr1.push(80);
console.log("Array 2:-" + arr1);

let arr3 = [1.3,69,56,45];



console.log("Array 3:- " + arr3);
arr3[2] = 34;

console.log("Updated array:- " + arr3);
