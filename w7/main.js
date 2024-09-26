import { renderTbl } from "./render.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const TBL = document.getElementById("tab-data");
const cfpData = [];

function determineHouseSizePoints(SizeOfHouse) {
    let houseSizePoints = 0;
  if (SizeOfHouse === "large") {
    houseSizePoints = 10;
} else if(SizeOfHouse === "medium") {
    houseSizePoints = 7;
} else if(SizeOfHouse === "small") {
    houseSizePoints =  4;
} else if(SizeOfHouse === "apt") {
    houseSizePoints =  2;
} 
return houseSizePoints
}


function determinePoints(numberInHousehold) {
    let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
} else if(numberInHousehold === 2) {
    houseHoldPoints = 12;
}  else if(numberInHousehold === 3) {
    houseHoldPoints = 10;
} else if(numberInHousehold === 4) {
    houseHoldPoints = 8;
} else if(numberInHousehold === 5) {
    houseHoldPoints = 6;
} else if(numberInHousehold === 6) {
    houseHoldPoints = 4;
} else if(numberInHousehold > 6) {
    houseHoldPoints = 2;
}
return houseHoldPoints 
}


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
