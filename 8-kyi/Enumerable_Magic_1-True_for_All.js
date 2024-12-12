// Task
// Create a method all which takes two params:
//   a sequence
//   a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

//DeepSeek
// function all( arr, fun ){
//     if(arr.length === 0) return true
//     for(let item of arr){
//         if(!fun(item)) return false
//     }
//     return true
//   }

  //theFirstOne
const all = (arr, func) => arr.every(func)

console.log(all([1, 2, 3], (x) => x > 10)); // true (ни один элемент не больше 10)
console.log(all([1, 2, 3], (x) => x % 2 === 0)); // false (2 четное число)
console.log(all([], (x) => x > 0)); // true (пустой массив)
console.log(all(['apple', 'banana', 'cherry'], (x) => x.length > 6)); // false (banana имеет длину > 6)