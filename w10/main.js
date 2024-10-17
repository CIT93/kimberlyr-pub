import { renderTbl } from "./render.js";
import {determineHouseSizePoints, determinePoints} from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLS, cfpData} from "./storage.js";

const start = (houseHoldMembers, houseSize, firstName, lastName) => {
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

const validateField = event => {
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

FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);


FORM.addEventListener('submit', e =>{
    e.preventDefault();
    if (FNAME.value !== '' && LNAME.value !== '') {
        SUBMIT.textContent = '';
        start(parseInt(FORM.housemember.value), FORM.houses.value, FNAME.value, LNAME.value);
        saveLS(cfpData); 
        renderTbl(cfpData);
        FORM.reset();
    } else {
        SUBMIT.textContent = "Form requires first name and last name";
    }
})


const add2 = (...a) => {
    return 2 + a[3];
}
const result = add2(1, 2, 3, 4);

//spread argument

//IIFE

const a = 3;

((a) =>{
    console.log("inside IIFE");
    console.log(a);
})(a);