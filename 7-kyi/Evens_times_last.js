// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.


const evenLast = (numbers) => {
    if (numbers.length === 0) return 0;
    let summ = 0;
    for(let i = 0; i < numbers.length; i += 2 ){
        summ += numbers[i];
    }
    return summ * numbers[numbers.length - 1];
  }

console.log(evenLast([1, 2, 3, 4, 5, 6]));//54


