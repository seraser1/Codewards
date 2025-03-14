// Write a function that calculates the original product price, without VAT.
// Example
// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00
// Thus, if your function receives 230.00 as input, it should return 200.00
// Notes:
// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1

//My solution
//return price without vat
const excludingVatPrice = (price) => {
    if (price === null) return -1;
    return parseFloat(((price / 115) * 100).toFixed(2))
// Результат округляется до двух десятичных знаков с помощью метода toFixed(2).
// Метод toFixed возвращает строку, поэтому используется parseFloat ( + )для преобразования результата обратно в число.
}

//esiest soulution
// const excludingVatPrice = (price) => null === price ? -1 : +(price / 1.15).toFixed(2)
console.log(excludingVatPrice(0)); 
