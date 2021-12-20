import Button from "./button.js";

export default class ConfigButton extends Button {
    constructor(scene, x, y) {
        super(scene, x, y, 'boton', "Configuración", 0.7, 0.7);//0.7

        this.sprite.on("pointerdown", () => {
           
            this.scene.configMenu.show();
        });

        
    }
}