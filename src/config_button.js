import Button from "./button.js";

export default class ConfigButton extends Button {
    constructor(scene, x, y){
        super(scene, x, y, 'boton',"Configuración");

        this.setScale(1.2, 0.8);
        this.text.setOrigin(0.5, 0.5).setFontSize(40);

        this.sprite.on("pointerdown", () =>{
            console.log("El código va aquí")
        });
    }
}