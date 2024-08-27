function determinePoints(numberInHousehold) {
    console.log("Inside the function");
  if (numberInHousehold === 1) {
    carbonFootprintPoints = carbonFootprintPoints + 14;
} else if(numberInHousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
}  else if(numberInHousehold === 3) {
    carbonFootprintPoints = carbonFootprintPoints + 10;
} else if(numberInHousehold === 4) {
    carbonFootprintPoints = carbonFootprintPoints + 8;
} else if(numberInHousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
} else if(numberInHousehold === 6) {
    carbonFootprintPoints = carbonFootprintPoints + 4;
} else if(numberInHousehold > 6) {
    carbonFootprintPoints = carbonFootprintPoints + 2;
}
console.log(`Based on the number of member of the household of ${numberInHousehold} the points will be ${carbonFootprintPoints}`);
}

let carbonFootprintPoints = 0;
//const numberInHousehold = 3;


// global scope

determinePoints(3)
determinePoints(4)

//Consider the size of your home

function determineHouseSizePoints(SizeOfHouse) {
    console.log("Inside the function");
  if (SizeOfHouse === "Large House") {
    carbonFpPoint = carbonFpPoint + 10;
} else if(SizeOfHouse === "medium-sized house") {
    carbonFpPoint = carbonFpPoint + 7;
} else if(SizeOfHouse === "small house") {
    carbonFpPoint = carbonFpPoint + 4;
} else if(SizeOfHouse === "apartment") {
    carbonFpPoint = carbonFpPoint + 2;
} 
console.log(`Based on the size of your House: ${SizeOfHouse}, the points would be ${carbonFpPoint}`);
}

let carbonFpPoint = 0;

// global scope

determineHouseSizePoints("medium-sized house")

