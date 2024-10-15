// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    const strRev = str.split('').reverse();
    const endingRev = ending.split('').reverse();
    if (endingRev.length > strRev.length) return false;
    for (let i = 0; i < endingRev.length; i++){
        if (endingRev[i] !== strRev[i]) return false
    }
  return true
}
console.log(solution('abc', 'bc')); // returns true
console.log(solution('abc', 'd'));  // returns false
