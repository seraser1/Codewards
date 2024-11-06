// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//не я(
function validatePIN(pin) {
    // Проверяем, что длина строки равна 4 или 6
    if (pin.length === 4 || pin.length === 6) {
      // Проверяем, что все символы в строке являются цифрами
      for (let char of pin) {
        if (char < '0' || char > '9') {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
console.log(validatePIN('12348l'));


