import Button from "./button.js";

export default class ConfigButton extends Button {
    constructor(scene, x, y){
        super(scene, x, y, 'boton');

        this.setScale(1.2, 0.8);
        this.text = this.scene.add.text(x, y, "Configuración").setOrigin(0.5, 0.6).setFontSize(40);

        this.on("pointerdown", () =>{
            console.log("El código va aquí")
        });
    }
}