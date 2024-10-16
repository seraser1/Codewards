// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
// 	const sArr = s.toUpperCase().split('')
//     let resArr = []
//     for(let i = 0; i < sArr.length; i++){
//         resArr.push(sArr[i] + sArr[i].toLowerCase().repeat(i))
//     }
//     return resArr.join('-')
// }
const accum = (s) => s.toUpperCase().split('').map((el,i) => el + el.toLowerCase().repeat(i)).join('-')


console.log(accum('RqaEzty'));
