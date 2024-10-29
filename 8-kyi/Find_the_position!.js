// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Output :: "Position of alphabet: 1"
// Note: Only lowercased English letters are tested

// the best solution i think
// const position = (letter) => `Position of alphabet: ${letter.charCodeAt() - 96}`

//My solution
function position(letter){
  //Write your own Code!
  let englishAlphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < englishAlphabet.length; i++ ){
    if(englishAlphabet[i] === letter) return `Position of alphabet: ${i + 1}`
  }
}

console.log(position('z'));
