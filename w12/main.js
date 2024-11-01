document.addEventListener('DOMContentLoaded', () => {
    const FORM = document.getElementById("form");
    const startWorkout = (Exercise, reps, time) => {
        const output = document.getElementById("output");
        output.textContent = `Start ${reps} reps of ${Exercise}, you have ${time} minutes to finish. `
        setTimeout(() => {
            output.textContent = `Stop ${Exercise}! You're done.`
        }, time * 5000);
    };

    FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    const Exercise = FORM.Exercise.value;
    const reps = FORM.Reps.value
    const time = FORM.Time.value
    startWorkout(Exercise, reps, time);
    FORM.reset()
    })
})