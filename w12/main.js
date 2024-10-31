const FORM = document.getElementById("form");
const output = document.getElementById("output");

const startWorkout = (Exercise, Reps, Time) => {
    output.textContent = `Start ${Reps} reps of ${Exercise}, you have ${Time} minutes to finish. `
    setTimeout(() => {
        output.textContent = `Stop ${Exercise}! You're done.`
    }, timeout * 60000);
};

FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    const Exercise = FORM.Exercise.value;
    const Reps = FORM.Reps.value
    const Time = FORM.Time.value
    startWorkout(Exercise, Reps, Time);
    FORM.reset()
})