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

function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determinePoints(houseHoldMembers);
    const houseSizePTS = determineHouseSizePoints(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total]);
}

function displayOutput() {
    for (arr of cfpData) {
        console.log(arr)
        const output = document.getElementById("output");
        const newP = document.createElement("p");
         newP.textContent = `Your score for house members is ${arr[2]}`;
         output.appendChild(newP)
    }
}

start(5, "medium-sized house");
start(4, "Large House");
start(3, "apartment");

displayOutput()