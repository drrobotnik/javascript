const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const score = document.getElementById("score");

let jumpFX = new Audio("./assets/tRexJump-18db.mp3");
let rockRoll = new Audio("./assets/rockRoll2db.mp3");

bgAudio = new Audio('./assets/alteredStateIntroLoop-12db.mp3');
if (typeof bgAudio.loop == 'boolean') {
    bgAudio.loop = true;
}
else {
    bgAudio.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
}
bgAudio.play();


function jump() {
    dino.classList.add("jump-animation");
    setTimeout(() =>
        dino.classList.remove("jump-animation"), 500);
    jumpFX.play();
}

document.addEventListener('keypress', (event) => {
    if (!dino.classList.contains('jump-animation')) {
        jump();
    }

})

setInterval(() => {
    const dinoTop = parseInt(window.getComputedStyle(dino)
        .getPropertyValue('top'));
    const rockLeft = parseInt(window.getComputedStyle(rock)
        .getPropertyValue('left'));
    score.innerText++;

    if (rockLeft < 0) {
        rock.style.display = 'none';
    } else {
        rock.style.display = '';
        rockRoll.play();
    }

    if (rockLeft < 100 && rockLeft > 0 && dinoTop > 200) {
        alert("You got a score of: " + score.innerText +
            "\n\nPlay again?");
        location.reload();
    }
}, 50);