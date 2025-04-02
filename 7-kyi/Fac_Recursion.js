// The code is a recursive attempt in calculating the result of a factorial function.
// I.e. the result of 3! (Factorial of 3) is 3x2x1 = 6.
// In case of 0! the result is 1 and in case of a negative factorial the result should be 0.

// The goal is to find the bugs in the sourcecode and fix them (play a little pest control).


// const facRecursion = (value) => (value === 1 || value === 0) ? 1 :  value < 0 ? 0 : value * facRecursion(value - 1);
function facRecursion(value){
    if(value < 0) return 0;
    if(value < 2) return 1;
    
    return value * facRecursion(--value);
  }

console.log(facRecursion(4));


