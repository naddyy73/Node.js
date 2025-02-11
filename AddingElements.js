const rls= require("readline-sync");
var arr = [];
for(let i = 0; i <=5; i++){
    const x = rls.question("Enter elements of array");
    //console.log(`Element at index ${i}: ${arr[i]}`);
    arr.push(x);
}
console.log(arr);
