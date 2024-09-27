import { renderTbl } from "./render.js";
import {determineHouseSizePoints, determinePoints} from "./carbonfp.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const TBL = document.getElementById("tab-data");
const cfpData = [];



function start(houseHoldMembers, houseSize, firstName, lastName) {
    const houseHoldPTS = determinePoints(houseHoldMembers);
    const houseSizePTS = determineHouseSizePoints(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cfpData.push({
    houseHM: houseHoldMembers,
    houseS: houseSize,
    houseHMP: houseHoldPTS,
    houseSP: houseSizePTS,
    firstNM: firstName,
    lastNM: lastName,
    cfpTotal: total
});
}


FORM.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const housemember = parseInt(FORM.housemember.value);
    const housesize = FORM.houses.value;
    start(housemember, housesize, firstName, lastName);
    OUTPUT.innerHTML = "";
    renderTbl(cfpData);
    FORM.reset();
})
