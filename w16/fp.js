class FP {
    constructor(first, last, houseMembers, houseSize, foodChoices, foodSource, waterConsume, dishAndWash, purchases) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.foodChoices = foodChoices;
        this.foodSource = foodSource;
        this.waterConsumePoints = waterConsume;
        this.dishAndWash = dishAndWash;
        this.purchasesPoints = purchases;
        this.calHouseHoldPoints();
        this.calHouseSizePoints();
        this.calFoodPoints();
        this.calFoodSourcePoints();
        this.calTotalWater();
        this.calTotal();
    }
    calHouseSizePoints() {
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
    calHouseHoldPoints() {
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
    calFoodPoints() {
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
    calFoodSourcePoints() {
        if (this.foodSource === "prepackaged") {
            this.foodSourcePoints = 12;
        } else if(this.foodSource === "balance") {
            this.foodSourcePoints = 6;
        } else if(this.foodSource === "local") {
            this.foodSourcePoints =  2;
        }
    } 

    calTotalWater(){
        this.dishAndWash ? this.totalWater = this.waterConsumePoints * 2 : this.totalWater = this.waterConsumePoints;
    }

    calTotal() {
        this.total = 
            this.houseHoldPoints + 
            this.houseSizePoints + 
            this.foodPoints + 
            this.foodSourcePoints +
            this.totalWater +
            this.purchasesPoints
    }
}
export {FP}