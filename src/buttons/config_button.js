import Button from "./button.js";

/**
 * Representa el botón de configuración
 */
export default class ConfigButton extends Button {
    /**
     * Construye un nuevo botón de configuración
     * @param {Phaser.Scene} scene -Escena a la que pertenece el botón.
     * @param {number} x - posición en X
     * @param {number} y - posición en Y
     */
    constructor(scene, x, y) {
        super(scene, x, y, 'boton', "Configuración", 0.7, 0.7); //0.7

        this.sprite.on("pointerdown", () => {

            this.scene.configMenu.show();
        });


    }
}