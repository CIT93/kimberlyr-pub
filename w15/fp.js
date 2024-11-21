class FP {
    constructor(first, last, houseMembers, houseSize, foodChoices) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.foodChoices = foodChoices;
        this.houseHoldPoints();
        this.houseSizePoints();
        this.foodPoints();
        this.total();
    }
    houseSizePoints() {
        if (this.houseSize === "large") {
            this.houseSizePoints = 10;
        } else if(this.houseSize === "medium") {
            this.houseSizePoints = 7;
        } else if(this.houseSize === "small") {
            this.houseSizePoints =  4;
        } else if(this.houseSize === "apt") {
            this.houseSizePoints =  2;
        } 
    }
    houseHoldPoints() {
        if (this.houseMembers === 1) {
            this.houseHoldPoints = 14;
        } else if(this.houseMembers === 2) {
            this.houseHoldPoints = 12;
        }  else if(this.houseMembers === 3) {
            this.houseHoldPoints = 10;
        } else if(this.houseMembers === 4) {
            this.houseHoldPoints = 8;
        } else if(this.houseMembers === 5) {
            this.houseHoldPoints = 6;
        } else if(this.houseMembers === 6) {
            this.houseHoldPoints = 4;
        } else if(this.houseMembers > 6) {
            this.houseHoldPoints = 2;
        }
    }
    foodPoints() {
        if (this.foodChoices === "dailyBasis") {
            this.foodPoints = 10;
        } else if(this.foodChoices === "fewPerWeek") {
            this.foodPoints = 8;
        } else if(this.foodChoices === "vegetarian") {
            this.foodPoints =  4;
        } else if(this.foodChoices === "veganOrWild") {
            this.foodPoints =  2;
        } 
    } 
    total() {
        this.total = this.houseHoldPoints + this.houseSizePoints + this.foodPoints;
    }
}
export {FP}