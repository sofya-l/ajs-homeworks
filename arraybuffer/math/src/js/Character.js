export default class Character {
    constructor(baseAttack, distance) {
        this.baseAttack = baseAttack;
        this.distance = distance;
        this.isStoned = false;
    }

    get attack() {
        let currentAttack = this.baseAttack * (1 - 0.1 * (this.distance - 1));

        if (this.isStoned === true) {
            currentAttack = currentAttack - Math.log2(this.distance) * 5;
        }

        return currentAttack;
    }

    set attack(value) {
        this.baseAttack = value;
    }

    get stoned() {
        return this.isStoned;
    }

    set stoned(value) {
        this.isStoned = value;
    }

}
