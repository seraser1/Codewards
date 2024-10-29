// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// //my solution
// const bmi = (weight, height) => {
//     const bmi = weight / (height * height);
//     if (bmi <= 18.5) return "Underweight";
//     if (bmi <= 25.0) return "Normal";
//     if (bmi <= 30.0) return "Overweight";
//     if (bmi >    30) return "Obese";
// }

//best solution... на мое юношеское мнение)
const bmi = (w, h, bmi = w / h / h) => bmi <= 18.5 ? "Underweight" : 
                                       bmi <= 25.0 ? "Normal" : 
                                       bmi <= 30.0 ? "Overweight" : "Obese";

console.log(bmi(30, 40));

