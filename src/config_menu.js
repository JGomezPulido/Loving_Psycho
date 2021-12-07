import ConfigButton from "./config_button.js";

export default class ConfigMenu extends Phaser.GameObjects.Container{
    constructor(scene, x, y){
        super(scene, x, y);
        this._sprite = this.scene.add.sprite(0,0,"cuadroDialogo");
        this.add(this._sprite);
        this._settingsButton = new ConfigButton(this.scene, 50,50);
        this.add(this._settingsButton);
        this.scene.add.existing(this);
        this.setActive(false);
        this.setVisible(false);
        
    }
}