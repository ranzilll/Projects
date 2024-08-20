document.getElementById('start-breathing').addEventListener('click', function() {
    const repetitions = parseInt(document.getElementById('repetitions').value);
    const dot = document.getElementById('dot');
    const guideline = document.getElementById('guideline');
    const timer = document.getElementById('timer');
    const breathingSection = document.getElementById('breathing-section');
    const giveUpButton = document.getElementById('give-up');
    let count = 0;
    let stopped = false;

    function stopBreathing() {
        stopped = true;
        guideline.innerText = "Breathing exercise stopped!";
        dot.style.display = 'none';
        giveUpButton.style.display = 'none';
    }

    giveUpButton.addEventListener('click', stopBreathing);

    breathingSection.style.display = 'block'; // Show the breathing section
    giveUpButton.style.display = 'block'; // Show the Give Up button
    dot.style.display = 'block'; // Show the dot

    setTimeout(() => {
        function moveDot() {
            if (count < repetitions && !stopped) {
                count++;

                guideline.innerText = "Breathe in...";
                timer.innerText = "5 seconds";
                dot.style.transition = 'left 5s linear';
                dot.style.left = '180px';

                setTimeout(() => {
                    if (stopped) return;
                    guideline.innerText = "Hold...";
                    timer.innerText = "10 seconds";
                    dot.style.transition = 'top 5s linear';
                    dot.style.top = '180px';

                    setTimeout(() => {
                        if (stopped) return;
                        guideline.innerText = "Breathe out...";
                        timer.innerText = "15 seconds";
                        dot.style.transition = 'left 5s linear';
                        dot.style.left = '0px';

                        setTimeout(() => {
                            if (stopped) return;
                            guideline.innerText = "Hold...";
                            timer.innerText = "20 seconds";
                            dot.style.transition = 'top 5s linear';
                            dot.style.top = '0px';

                            setTimeout(() => {
                                if (count < repetitions && !stopped) {
                                    moveDot();  // Repeat the process
                                } else if (!stopped) {
                                    guideline.innerText = "Breathing exercise completed!";
                                    timer.innerText = "";
                                    dot.style.display = 'none'; // Hide the dot after completion
                                    giveUpButton.style.display = 'none'; // Hide the Give Up button
                                }
                            }, 5000);

                        }, 5000);

                    }, 5000);

                }, 5000);
            }
        }

        moveDot(); // Start the breathing activity
    }, 1000); // Start after 1 second
});