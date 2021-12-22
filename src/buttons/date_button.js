import Button from "./button.js";

/**
 * Representa un botón de selección de cita, al pulsarlo, saltará a la escena de la cita indicada.
 */

export default class DateButton extends Button {
    /**
     * Construye un nuevo Date button
     * @param {*} scene - escena a la que pertenece el botón 
     * @param {*} x - posición en x
     * @param {*} y - posición en y
     * @param {*} sprite - key del sprite
     * @param {*} tree - arbol de diálogo correspondiente a la cita
     */
    constructor(scene, x, y, sprite, tree) {
        super(scene, x, y, sprite, "", 0.3, 0.3);
        //
        this.sprite.on("pointerover", () =>{
            this.sprite.setTexture(sprite+'Rojo')
          });
        this.sprite.on("pointerout", () =>{
            this.sprite.setTexture(sprite)
        });
        this.sprite.on("pointerdown", () => {
            this.scene.startScene(tree);
        });
    }
}