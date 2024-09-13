const cfpData = [];

function determineHouseSizePoints(SizeOfHouse) {
    let houseSizePoints = 0;
  if (SizeOfHouse === "Large House") {
    houseSizePoints = 10;
} else if(SizeOfHouse === "medium-sized house") {
    houseSizePoints = 7;
} else if(SizeOfHouse === "small house") {
    houseSizePoints =  4;
} else if(SizeOfHouse === "apartment") {
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
    const pointObj = {
    houseHM: houseHoldMembers,
    houseS: houseSize,
    houseHMP: houseHoldPTS,
    houseSP: houseSizePTS,
    cfpTotal: total
}
cfpData.push(pointObj);


//displayOutput(pointObj);
    //cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total]);
}


function displayOutput() {
    for (obj of cfpData) {
        console.log(obj) 
        const output = document.getElementById("output");
        const newH2 = document.createElement("h2");
        newH2.textContent = `Cardon Footprint ${obj.cfpTotal}`;
        const newH3 = document.createElement("h3");
        newH3.textContent = `Based on number in and size of home`
        const newP = document.createElement("p");
        newP.textContent = `This number is based on the number of people in the house of ${obj.houseHM} (score: ${obj.houseHMP}),`;
        newP.textContent = ` and a ${obj.houseS} size of home (score:${obj.houseSP}).`;
        output.appendChild(newH2);
        output.appendChild(newH3);
        output.appendChild(newP);
    }
}

start(5, "medium-sized house");
start(4, "Large House");
start(3, "apartment");

displayOutput()