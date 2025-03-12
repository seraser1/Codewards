// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


const XO = (str) => {
    const strToArr = str.toLowerCase().split('');
    console.log(strToArr);
    let countO = 0;
    let countX = 0;
    for(let i = 0;i < strToArr.length; i++){
        if(strToArr[i] === 'o') countO++;
        if(strToArr[i] === 'x') countX++;
    }  
    return (countO === countX) 
} 

// ...better soulution...
// const XO = (str) => (str.toLowerCase().split('x').length === str.toLowerCase().split('o').length)

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));


