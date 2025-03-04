// Given a string, you progressively need to concatenate the first character from the left and the first character from the right and "1", then the second character from the left and the second character from the right and "2", and so on.

// If the string's length is odd drop the central element.

// For example:

// "abcdef"  --> "af1be2cd3"
// "abc!def" --> "af1be2cd3" // same result



const charConcat = (string) => {
    let res = '';
    for (let i = 0; i < Math.floor(string.length/2); i++){
        const leftChar  = string[i];
        const rightChar = string[string.length - 1 - i];
        res += leftChar + rightChar + (i + 1);
    }
    return res;
    //your code here
}

console.log(charConcat('abc!!def'));






