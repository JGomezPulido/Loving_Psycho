import Button from "./button.js";

export default class ConfigButton extends Button {
    constructor(scene, x, y){
        super(scene, x, y, 'boton',"Configuración",1,1);

        this.text.setFontSize(35);
        this.text.setFontStyle('bold');
        this.text.setColor('#000');

        this.sprite.on("pointerdown", () =>{
            console.log("El código va aquí")
        });

        this.sprite.on("pointerover", () =>{
            this.text.setColor('#f00');
        });

        this.sprite.on("pointerout", () =>{
            this.text.setColor('#000');
        });
    }
}