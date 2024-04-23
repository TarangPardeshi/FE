//Data 1
const markMass1 = 78; 
const markHeight1 = 1.69; 
const johnMass1 = 92; 
const johnHeight1 = 1.95;

// Data 2
const markMass2 = 95; 
const markHeight2 = 1.88; 
const johnMass2 = 85; 
const johnHeight2 = 1.76; 


function BMIMehtod(mass, height) {
    return mass / (height * height);
}


function calculateBMI(){
    const markBMI1 = BMIMehtod(markMass1, markHeight1);
    const johnBMI1 = BMIMehtod(johnMass1, johnHeight1);
    const markBMI2 = BMIMehtod(markMass2, markHeight2);
    const johnBMI2 = BMIMehtod(johnMass2, johnHeight2);
    
    //Comparison
    const markHigherBMI1 = markBMI1 > johnBMI1;
    const markHigherBMI2 = markBMI2 > johnBMI2;
    
    
    console.log("Data 1:");
    console.log("Mark's BMI:", markBMI1);
    console.log("John's BMI:", johnBMI1);
    console.log("Is Mark's BMI higher than John's BMI?", markHigherBMI1);
    
    console.log("\nData 2:");
    console.log("Mark's BMI:", markBMI2);
    console.log("John's BMI:", johnBMI2);
    console.log("Is Mark's BMI higher than John's BMI?", markHigherBMI2);
}


