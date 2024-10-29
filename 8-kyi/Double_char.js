// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

//My solution_1
// function doubleChar(str) {
//     // Your code here
//     const arrStr = []
//     for (let i = 0; i < str.length; i++ ){
//         arrStr.push(str[i] + str[i])
//     }
//     return arrStr.join('')
// }

//My solution_2
const doubleChar = str => str.split('').map(el => el + el).join('')

console.log(doubleChar("String"));



