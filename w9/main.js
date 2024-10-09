import { renderTbl } from "./render.js";
import {determineHouseSizePoints, determinePoints} from "./cfp.js";
import {FORM} from "./global.js";
import {saveLS, cfpData} from "./storage.js";

function start(houseHoldMembers, houseSize, firstName, lastName) {
    const houseHoldPTS = determinePoints(houseHoldMembers);
    const houseSizePTS = determineHouseSizePoints(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cfpData.push({
    firstNM: firstName,
    lastNM: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
});
}

renderTbl(cfpData);

FORM.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const housemember = parseInt(FORM.housemember.value);
    const housesize = FORM.houses.value;
    start(housemember, housesize, firstName, lastName);
    saveLS(cfpData); 
    renderTbl(cfpData);
    FORM.reset();
})


function validateField(event) {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);

    if (field === '') {
        fieldError.textContent = `${fieldId} is required`;
        event.target.callsList.add('invalid');
    } else {
        fieldError.textContent = '';
        event.target.callsList.remove('invalid');
    }
}

document.getElementById('firstName').addEventListener('blur', validateField);
document.getElementById('lastName').addEventListener('blur', validateField);

document.getElementById('simpleForm').addEventListener('submit', function(event){
    event.preventDefault();
    const firstNameIsValid = document.getElementById('firstName').value !== '';
    const lastNameIsValid = document.getElementById('lastName').value !== '';
    if (firstNameIsValid && lastNameIsValid) {
        alert('Form is valid. You can proceed with submitting the form to the server.');
    }
})

