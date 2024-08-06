let selectedGender = '';

function ShowCalculationPage(gender) {
    selectedGender = gender;
    document.getElementById('page1').style.display = 'none';

    document.getElementById('page2').style.display = 'block';
}


// Function to display the height value dynamically
function displayHeightValue() {
    const height = document.getElementById('height').value;
    document.getElementById('heightValue').textContent = `${height} cm`;
}

function populateDropdown(id, min, max, step) {
    const dropdown = document.getElementById(id);
    for (let i = min; i <= max; i += step) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        dropdown.appendChild(option);
    }
}

populateDropdown('weight', 30, 150, 1); // Weight range from 30kg to 150kg
populateDropdown('age',5, 100, 1);    // Age range from 10 to 100 years

// Function to calculate BMI
function calculateBMI() {
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value) / 100;
    const age = parseInt(document.getElementById('age').value);
    const bmi = (weight / (height * height)).toFixed(2);

    const gender = document.querySelectorAll('gender'); // Get gender from URL
    let idealBMI = "18.5 - 24.9";
    // console.log(gender);
    // alert(`Your BMI is ${bmi}. An ideal and healthy BMI range for a ${gender} is ${idealBMI}.`);

    // Display the result in a modal
    document.getElementById('bmiResult').textContent = `Your BMI is ${bmi}. An ideal and healthy BMI range for a ${selectedGender} is ${idealBMI}.`;
    showModal();
    console.log(bmi);
}


// Function to show the modal
function showModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = "block";
}

// Function to hide the modal
function hideModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = "none";
}

// Close the modal when the user clicks on <span> (x)
document.querySelector('.close').onclick = function () {
    hideModal();
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        hideModal();
    }
}