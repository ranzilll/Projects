const text = document.querySelector(".secondtxt");

const textLoad = () => {
    setTimeout(() =>{
        text.textContent =  "De-Stress yourself !";
    },0);

    setTimeout(() =>{
        text.textContent =  "Regain Focus !";
    },4000);

    setTimeout(() =>{
        text.textContent =  "Calm Your Mind !";
    },8000);
}

textLoad();
setInterval(textLoad,12000);

// script for box-element

document.getElementById('start-breathing').addEventListener('click', function () {
    // Hide initial elements
    document.querySelector('.heading').style.display = 'none';
    document.querySelector('.subheading').style.display = 'none';
    document.querySelector('.animatedtext').style.display = 'none';
    this.style.display = 'none';

    // Show countdown
    const countdownEl = document.getElementById('countdown');
    countdownEl.style.display = 'block';

    let countdown = 3;
    countdownEl.textContent = countdown;

    const countdownInterval = setInterval(() => {
        countdown--;
        countdownEl.textContent = countdown;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            countdownEl.style.display = 'none';

            // Show the box and guideline after countdown
            document.getElementById('box-container').style.display = 'block';
            document.getElementById('guideline').style.display = 'block';
            startBoxBreathing();
        }
    }, 1000);
});

function startBoxBreathing() {
    const dot = document.getElementById('dot');
    const guideline = document.getElementById('guideline');
    const stopButton = document.getElementById('stop-breathing');

    dot.style.display = 'block';
    stopButton.style.display = 'block';

    let step = 1;

    function moveDot() {
        switch (step) {
            case 1:
                dot.style.animation = 'move-right 5s linear forwards';
                guideline.textContent = 'Breathe in';
                break;
            case 2:
                dot.style.animation = 'move-down 5s linear forwards';
                guideline.textContent = 'Hold';
                break;
            case 3:
                dot.style.animation = 'move-left 5s linear forwards';
                guideline.textContent = 'Breathe out';
                break;
            case 4:
                dot.style.animation = 'move-up 5s linear forwards';
                guideline.textContent = 'Hold';
                break;
        }

        step++;
        if (step > 4) {
            step = 1;
        }
    }

    moveDot();
    const interval = setInterval(moveDot, 5000);

    stopButton.addEventListener('click', function () {
        clearInterval(interval);
        resetPage();
    });
}

function resetPage() {
    document.getElementById('box-container').style.display = 'none';
    document.getElementById('dot').style.display = 'none';
    document.getElementById('guideline').textContent = '';
    document.getElementById('stop-breathing').style.display = 'none';
    document.getElementById('start-breathing').style.display = 'block';
    document.querySelector('.heading').style.display = 'block';
    document.querySelector('.subheading').style.display = 'block';
    document.querySelector('.animatedtext').style.display = 'block';
}