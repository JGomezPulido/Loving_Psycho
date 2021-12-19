import Button from "./button.js";


/**
 * 
 * @param {Phaser.Scene} scene 
 * @param {number} x 
 * @param {number} y 
 * @param {Phaser.GameObjects.Sprite} sprite 
 * @param {Node[]} tree - el archivo .json que contiene toda la info de la cita asociada al boton  
 */

export default class DateButton extends Button {
    constructor(scene, x, y, sprite, tree) {
        super(scene, x, y, sprite, "", 0.3, 0.3);

        //
        this.sprite.on("pointerdown", () => {
            this.scene.startScene(tree);
        });
    }
}