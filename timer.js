const gameTime = 3 // min
const activityTime = 10 // sec

function countdown(minutes) {
    var seconds = 60
    var mins = minutes
    function tick(skipTime) {
        var counter = document.getElementById("counter")
        var current_minutes = mins - 1
        skipTime ? seconds = seconds - skipTime : seconds--
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)
        if (seconds > 0 ) {
            setTimeout(tick, 1000)
        } else if (mins > 1) {
            countdown(mins - 1)
        }
    }
    tick()
}
countdown(gameTime)
