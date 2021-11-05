/**
 * Manages the dialog logic.
 */
export default class Dialog {

    /**
     * 
     * @param {Phaser.Scene} scene - the scene that the dialog belongs to
     * @param {string} text - the dialog text
     * @param {number} points - the punctuation that the dialog adds to the psycho bar
     * @param {Options[]} options - the options that the dialog has, if none leave undefined
     * @param {PsycoBar} bar - the scene psycho bar
     * @param {Girl} girl - 
     */
    constructor(scene, text, points, options, bar, girl){
        this.scene = scene;
        this.text = text;
        this. points = points;
        this.options = options;
        this.bar = bar;
        this.girl = girl;
    }

    mostrar(pos){
        let dialog = new DialogBox(this.scene, pos.x, pos.y);       
    }
}