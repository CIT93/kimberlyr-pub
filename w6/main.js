const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
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


function displayOutput(obj){
    console.log(obj);
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Cardon Footprint ${obj.cfpTotal}`;
    output.appendChild(newH2);
}

function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determinePoints(houseHoldMembers);
    const houseSizePTS = determineHouseSizePoints(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cfpData.push({
    houseHM: houseHoldMembers,
    houseS: houseSize,
    houseHMP: houseHoldPTS,
    houseSP: houseSizePTS,
    firstNM: firstName
    lastNM: lastName
    cfpTotal: total
});
}


function displayOutput() {
    for (obj of cfpData) {
        const newH2 = document.createElement("h2");
        newH2.textContent = `Cardon Footprint ${obj.cfpTotal}`;
        const newH3 = document.createElement("h3");
        newH3.textContent = `Dear, ${obj.firstNM} ${obj.lastNM}`
        const newP = document.createElement("p");
        newP.textContent = `This number is based on the number of people in the house of ${obj.houseHM} (score: ${obj.houseHMP}),`;
        newP.textContent += ` and a ${obj.houseS} size of home (score:${obj.houseSP}).`;
        OUTPUT.appendChild(newH2);
        OUTPUT.appendChild(newH3);
        OUTPUT.appendChild(newP);
    }
}


FORM.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const housemember = parseInt(FORM.housemember.value);
    const housesize = FORM.houses.value;
    start(housemember, housesize, firstName, lastName);
    OUTPUT.innerHTML = "";
    displayOutput();
    FORM.reset();
})
