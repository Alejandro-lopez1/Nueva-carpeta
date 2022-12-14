const stopwatch = document.getElementById("stopwatch");
const playPauseButton = document.getElementById("playPauseButton");
const secondsSphere = document.getElementById("secondsSphere");

let stopwatchInterval; 
let runningTime =0;

const playPause = () => {
    const isPaused = !playPauseButton.classList.contains("running");
    if (isPaused) {
        playPauseButton.classList.add("running");
        start();
    } else {
        playPauseButton.classList.remove("running");
        pause();
    }
}
//referido al botón de pausa
const pause = () => {
    secondsSphere.style.animationPlayState = "paused";
    clearInterval(stopwatchInterval);
}

//botón de stop
const stop = () => {
    secondsSphere.style.transform = "rotate(-90deg) traslateX(60px)";
    secondsSphere.style.animation = "none";
    playPauseButton.classList.remove("running");
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = "00:00";
}

//referido al botón de start
const start = () => {
    secondsSphere.style.animation = "rotation 60s linear infinite";
    let startTime = Date.now() - runningTime;
    secondsSphere.style.animationPlayState = "running";
    stopwatchInterval = setInterval( () => {
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
    }, 1000)
}

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_miutes = Math.floor(total_seconds / 60);
    
    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = total_minutes.toString().padStart(2, "0");

    return "${display_minutes}:${display_seconds}"
}