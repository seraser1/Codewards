// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

//My solution
// function maskify(cc) {
// let res = []
// const enter = cc.split('')
// for (let i = 0; i < enter.length - 4; i++ ){
//     res.push('#');
// }
// const lastFour = enter.slice(-4)
// for(el in lastFour) res.push(lastFour[el])
// return res.join('')
// }

// better solution
const maskify = (cc) => cc.slice(-4).padStart(cc.length, '#')

console.log(maskify("Nananananananananananananananana Batman!"));



