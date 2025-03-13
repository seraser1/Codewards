// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

const drawStairs = (n) => {
    let res = 'I'
    for(let i = 0;i < (n - 1); i++){
        res += '\n' + " ".repeat(i+1) + 'I' 
    }
    return res
}

console.log(drawStairs(7));