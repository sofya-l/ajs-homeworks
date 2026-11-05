import Character from "./Character";

export default class Bowerman extends Character {
    constructor() {
        super(name, 'Bowerman');
        this.attack = 25;
        this.defence = 25;
    }
}