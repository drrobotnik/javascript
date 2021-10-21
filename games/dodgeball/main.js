
function createGrid() {
    for (let div = 0; div < 54; div++) {
        cell = document.createElement("div");
        document.querySelector(".grid").appendChild(cell);
        cell.classList.add("cell");
    }
}
createGrid();


const cells = Array.from(document.querySelectorAll(".cell"));
const enemyCells = cells.slice(0, 45);
const playerCells = cells.slice(45);
const scoreDisplay = document.querySelector(".score");

let dropCount, speed, score;

let throwFX = new Audio("./assets/throw.mp3");
let whistleStop = new Audio("./assets/whistlestop.mp3");
let yourout = new Audio("./assets/yourout.mp3");

reset();

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


let bgAudio = new Audio('./assets/ifyoucandodgeawrench.mp3');
if (typeof bgAudio.loop == 'boolean') {
    bgAudio.loop = true;
}
else {
    bgAudio.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
}


// start game after any key is pressed
document.addEventListener("keydown", e => {
    if (!dropCount) {
        startGame();
    }

    const player = document.querySelector(".player");

    if (e.key === "ArrowRight" && playerCells.includes(player.parentElement.nextElementSibling)) {
        player.parentElement.nextElementSibling.appendChild(player);
    }

    if (e.key === "ArrowLeft" && playerCells.includes(player.parentElement.previousElementSibling)) {
        player.parentElement.previousElementSibling.appendChild(player);
    }
});

function reset() {
    dropCount = 0;
    speed = 1000;
    score = 0;
    scoreDisplay.innerHTML = "0";

    cells.forEach(cell => cell.innerHTML = "");
    playerCells[4].innerHTML = '<div class="player"></div>';
}

function startGame() {
    reset();
    bgAudio.play();
    sleep(8000);
    loop();
}

function loop() {
    let stopGame = false;

    for (let i = enemyCells.length - 1; i >= 0; i--) {
        const cell = enemyCells[i];
        const nextCell = cells[i + 9];
        throwFX.play();
        const enemy = cell.children[0];
        if (!enemy) {
            continue;
        }

        nextCell.appendChild(enemy);

        if (playerCells.includes(nextCell)) {
            if (nextCell.querySelector(".player")) {
                stopGame = true;
                yourout.play();

            } else {
                score++;
                speed = Math.max(100, speed - 15);
                scoreDisplay.innerHTML = score;
                enemy.remove();
            }
        }
    }

    // Even drop count, add new enemy
    if (dropCount % 2 === 0) {
        const position = Math.floor(Math.random() * 9);

        enemyCells[position].innerHTML = '<div class="enemy"></div>';
    }

    if (stopGame) {
        bgAudio.pause();
        alert('Your score: ' + score + ". Click OK to play again.");
        location.reload();
        // reset();
    } else {
        dropCount++;
        setTimeout(loop, speed);
    }
}