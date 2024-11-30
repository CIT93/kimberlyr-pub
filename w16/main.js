
import { renderTbl} from "./render.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLS, cfpData} from "./storage.js";
import { FP } from "./fp.js";


renderTbl(cfpData);

const validateField = event => {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);

    if (field === '') {
        fieldError.textContent = `${fieldId} is required`;
        event.target.classList.add('invalid');
    } else {
        fieldError.textContent = '';
        event.target.classList.remove('invalid');
    }
}

FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);


FORM.addEventListener('submit', e =>{
    e.preventDefault();
    if (FNAME.value !== '' && LNAME.value !== '') {
        SUBMIT.textContent = '';
        const fpOji = new FP(
        FNAME.value,
        LNAME.value,
        parseInt(e.target.housemember.value),
        e.target.houses.value,
        e.target.food.value,
        e.target.foodSource.value,
        parseInt(e.target.water.value),
        e.target.dishAndWash.checked,
        parseInt(e.target.purchases.value),
        );
        cfpData.push(fpOji);
        saveLS(cfpData); 
        renderTbl(cfpData);
        FORM.reset();
    } else {
        SUBMIT.textContent = "Form requires first name and last name";
    }
})