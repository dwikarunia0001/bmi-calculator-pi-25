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
}