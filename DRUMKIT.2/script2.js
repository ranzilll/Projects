window.addEventListener('keydown', function (e) {

    const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
    // console.log(audio);
    const key = document.querySelector(`div[data-key = "${e.keyCode}"] `);
    // console.log(key);

    key.classList.add('playing');

    if (!audio) return
    audio.currentTime = 0;
    audio.play();
});

const keys = document.querySelectorAll('.key')
// console.log(keys);

keys.forEach(function(key){
    key.addEventListener('transitionend',function(e){
        // console.log(e);
        if(e.propertyName !== "transform") return;
        this.classList.remove('playing');
    })
});

const bgaudio = document.querySelector('.bgaudio');
bgaudio.addEventListener('play', () => {
    bgaudio.blur();
});

