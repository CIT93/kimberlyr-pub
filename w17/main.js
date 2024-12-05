import { renderTbl} from "./render.js";
import {FORM, FNAME, LNAME, SUBMIT, WATER, BOTH} from "./global.js";
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

const determineRecycleItems = e => {
    const numberChecked = document.querySelectorAll('.recycle:checked').length;
    return {
        glass: e.target.glass.checked,
        plastic: e.target.plastic.checked,
        paper: e.target.paper.checked,
        aluminum: e.target.aluminum.checked,
        steel: e.target.steel.checked,
        food: e.target.foodw.checked,
        recyclePoints: (24 - (numberChecked * 4))
    }
}

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
        e.target.water.value,
        e.target.dish_washer.checked ? parseInt(e.target.water.value) * 2 : parseInt(e.target.water.value),
        e.target.dish_washer.checked,
        parseInt(e.target.purchases.value),
        parseInt(e.target.waste.value),
        determineRecycleItems(e),
        parseInt(e.target.personal.value),
        parseInt(e.target.publicTrans.value),
        parseInt(e.target.flightsTrans.value)
        );
        cfpData.push(fpOji);
        saveLS(cfpData); 
        renderTbl(cfpData);
        FORM.reset();
        BOTH.disabled = false;
    } else {
        SUBMIT.textContent = "Form requires first name and last name";
    }
})

WATER.addEventListener("change",e => {
    if(parseInt(WATER.value) === 0){
        BOTH.disabled = true;
    } else {
        BOTH.disabled = false;
    }
})