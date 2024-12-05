export class DecisionMaker {
    constructor(energyLevel, timeAvailable, hasMotivation) {
        this.energyLevel = energyLevel;
        this.timeAvailable = timeAvailable;
        this.hasMotivation = hasMotivation;
    }

    getAdvice() {
        if (this.energyLevel >= 6 && this.timeAvailable > 2 && this.hasMotivation) {
            return `Fantastic! You have enough energy (Energy:${this.energyLevel}), time (${this.timeAvailable} hours), and motivation to stick to your full routine.`;
        } else if (this.energyLevel < 5 || !this.hasMotivation) {
            return `Changing your routine or taking a break could be a wise decision. Your energy is low (Energy:${this.energyLevel}) or you're not feeling motivated.`;
        } else if (this.timeAvailable < 1) {
            return `Since you're limited on time (${this.timeAvailable} hours), consider skipping or shortening parts of your routine.`;
        } else if (this.energyLevel >= 5 && this.energyLevel < 6 && this.timeAvailable >= 2) {
            return `You're feeling a bit in between (Energy:${this.energyLevel}), but have some time to spare (${this.timeAvailable} hours). You could adjust your routine to be less difficult.`;
        } else if (this.timeAvailable < 2 && this.hasMotivation) {
            return `Despite the short amount of time you have (${this.timeAvailable} hours), you're motivated. Consider doing your routine in a shortened form.`;
        } else {
            return `Something appears to be wrong. Either your energy, time, or motivations can't be calculated at the moment.`;
        }
    }
}