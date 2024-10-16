// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

// const fakeBin = (x) => {
//     let res = '';
//     for(let i = 0; i < x.length; i++){
//         if(x[i] < 5)  res += '0';
//         if(x[i] >= 5) res += '1';
//     }
//     return res
// }
const fakeBin = (x) => x.split('').map(el => el < 5 ? 0 : 1).join('')


console.log(fakeBin('456'));















