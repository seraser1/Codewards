// When provided with a String, capitalize all vowels

// For example:
// Input : "Hello World!"
// Output : "HEllO WOrld!"

// const swap = (string) => {
//     const arr = string.split('');
//     const vowels = 'aeiou'
//     for (let i = 0; i < arr.length; i++){
//         if(vowels.includes(arr[i])) arr[i] = arr[i].toUpperCase()
//     }
//     return arr.join('')
// } 
const swap = (string) => string.split('').map(el => 'aeiou'.includes(el) ? el.toUpperCase() : el).join('')

console.log(swap('Hello World'));



