// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.
//DeepSeek
function none(arr, fun){
    if(arr.length === 0) return true
    for(let item of arr){
        if(fun(item)) return false
    }
    return true
  }
  //theFirstOne
  // const none = (arr, func) => !arr.some(func)

console.log(none([1, 2, 3], (x) => x > 10)); // true (ни один элемент не больше 10)
console.log(none([1, 2, 3], (x) => x % 2 === 0)); // false (2 четное число)
console.log(none([], (x) => x > 0)); // true (пустой массив)
console.log(none(['apple', 'bananas', 'cherry'], (x) => x.length > 6)); // false (banana имеет длину > 6)