const toggle_btn = document.querySelector('#checkbox');
const mainImg = document.querySelector('.mainimg img');
const benefitText = document.querySelector('.benifit');
const keypoints = document.querySelector('.keypoints');

// Function to save user preference
function saveData() {
    localStorage.setItem("mode", toggle_btn.checked ? "dark" : "light");
}

// Function to load and apply saved preference
function loadData() {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        toggle_btn.checked = true;
        applyDarkMode();
    } else {
        toggle_btn.checked = false;
        applyLightMode();
    }
}

// Function to apply dark mode
function applyDarkMode() {
    document.body.classList.add('dark-mode');
    mainImg.src = 'morningrun.jpg';
    benefitText.textContent = 'Benefits of Working out in the Morning';
    keypoints.innerHTML = `
    <div class="key1">Boosts metabolism</div>
    <div class="key1">Enhances mood and energy levels</div>
    <div class="key1">Improves focus and concentration</div>
    <div class="key1">Promotes consistency in workout routine</div>`;
    saveData();
}

// Function to apply light mode
function applyLightMode() {
    document.body.classList.remove('dark-mode');
    mainImg.src = 'eveningrun.jpg';
    benefitText.textContent = 'Benefits of Working out in the Evening';
    keypoints.innerHTML = `
    <div class="key1">Promotes better sleep</div>
    <div class="key1">Enhances cardiac health</div>
    <div class="key1">Lowers stress levels</div>
    <div class="key1">Improves physical activity</div>`;
    saveData();
}

// Event listener for toggle button change
toggle_btn.addEventListener('change', () => {
    if (toggle_btn.checked) {
        applyDarkMode();
    } else {
        applyLightMode();
    }
});

// Load the saved mode when the page loads
loadData();