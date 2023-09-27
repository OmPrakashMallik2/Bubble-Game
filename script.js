
// add score
var score = 0;
function addScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

// get new target
var newTarget = 0;
function getNewTarget() {
    newTarget = Math.floor(Math.random() * 10);
    document.querySelector("#target").textContent = newTarget;
}

// Make Bubble
function makeBubble() {
    var balls = "";
    for (var j = 1; j <= 152; j++) {
        var num = Math.floor(Math.random() * 10);
        balls += `<div class="bubble">${num}</div>`;
    }
    document.querySelector("#page").innerHTML = balls;
}

// timer
var time = 10;
function runTimer() {
    var timer = setInterval(function () {
        if (time > 0) {
            time--;
            document.querySelector("#timerVal").textContent = time;
        }
        else {
            clearInterval(timer);
            document.querySelector("#page").innerHTML = `<div id="gameover"><h1>Game Over!</h1><h1>Your score is : ${score}</h1><p>Refresh the page to start a new game.</p></div>`;
        }
    }, 1000);
}


// get number by click
var clickedNumber;
document.querySelector("#page").addEventListener("click", function (dats) {
    clickedNumber = Number(dats.target.textContent);
    if (clickedNumber == newTarget) {
        addScore();
        getNewTarget();
        time = 10;
        makeBubble();
    }
});


makeBubble();
runTimer();
getNewTarget();