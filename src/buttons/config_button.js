import Button from "./button.js";

export default class ConfigButton extends Button {
    constructor(scene, x, y) {
        super(scene, x, y, 'boton', "Configuración", 1, 1);

        this.sprite.on("pointerdown", () => {
            console.log("El código va aquí")
        });
    }
}