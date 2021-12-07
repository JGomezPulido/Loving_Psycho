import Button from "./button.js";


export default class DateButton extends Button {
    constructor(scene, x, y, sprite, tree){
        super(scene, x, y, sprite,"");
        this.setScale(0.3, 0.3);
        this.sprite.on("pointerdown", () =>{
            this.scene.startScene(tree);
        });
    }
}