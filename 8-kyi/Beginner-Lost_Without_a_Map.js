// Given an array of integers, return a new array with each value doubled.
//  For example:
// [1, 2, 3] --> [2, 4, 6]


const maps = (x) => x.map(el => el + el)

console.log(maps([1, 2, 3]));