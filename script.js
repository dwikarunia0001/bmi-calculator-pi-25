window.onload = () => {
    // Getting button id
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

    // Getting input from user into height variable and parse into Int
    let height = parseInt(document
        .querySelector("#height").value);

    // Getting input from user into weight variableand parse into Int
    let weight = parseInt(document
        .querySelector("#weight").value);
    
    // Getting result id
    let result = document.querySelector("#result");

    // Checking the user providing a proper value or not
    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";

     // If both input is valid, calculate the bmi
    else {

        // BMI Calculation
        let bmi = (weight / (height/100)**2).toFixed(1);

        // Dividing as per the bmi conditions
        if (bmi < 18.5) result.innerHTML =
            `Your BMI is <span><strong>${bmi}</strong></span> which means You are <strong>Underweight</strong> `;

        else if (bmi >= 18.5 && bmi <= 24.9)
            result.innerHTML =
            `Your BMI is <span><strong>${bmi}</strong></span> which means You are <strong>Normal</strong> `;

        else if (bmi >= 25 && bmi <= 29.9) result.innerHTML =
            `Your BMI is <span><strong>${bmi}</strong></span> which means You are <strong>Overweight</strong> `;
        
        else result.innerHTML =
            `Your BMI is <span><strong>${bmi}</strong></span> which means You are <strong>Obesity</strong> `;
    }
}