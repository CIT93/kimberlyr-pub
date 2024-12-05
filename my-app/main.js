import { renderTable } from './render.js';
import { advData, saveLS } from './storage.js';

let userDataArray = advData;

const handleFormSubmit = (event) => {
    event.preventDefault();
    const energyLevel = parseInt(document.querySelector('#energyLevel').value);
    const timeAvailable = parseInt(document.querySelector('#timeAvailable').value);
    const hasMotivation = document.querySelector('#hasMotivation').value === 'true';

    const userData = { energyLevel, timeAvailable, hasMotivation };
    userDataArray.push(userData);

    saveLS(userDataArray); 
    renderTable(userDataArray);
    document.querySelector('#routineForm').reset();
};

document.addEventListener('DOMContentLoaded', () => {
    renderTable(userDataArray);
});

document.querySelector('#routineForm').addEventListener('submit', handleFormSubmit);