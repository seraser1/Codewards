// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

// my solution,not truth...
// const oddCount = (n) => {
//     let res = [];
//     for (let i = 0; i < n; i++) {
//         if(i % 2 !== 0) res.push(i)
//     }
// return res.length
// }

//Chat helper...
const oddCount = (n) => Math.floor(n / 2);
console.log(oddCount(7));
