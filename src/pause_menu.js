import ConfigButton from "./config_button.js";

export default class PauseMenu extends Phaser.Scene{
    constructor(){
        super({key: "pause"});
       
        

    }

    create(){
        console.log(this);
        this._sprite = this.add.sprite(0,0,"cuadroDialogo");
        this._settingsButton = new ConfigButton(this, 50,50);
        this.add.existing(this._settingsButton);
        this.esc = this.input.keyboard.addKey("ESC");

        this.esc.on("down", this.changeScene, this);
    }

    changeScene(){
        console.log(this.scene.isPaused("Scene"));
        this.scene.run("Scene");
        //this.scene.bringToTop("Scene");
        this.scene.setVisible(false,"pause");
       
        
        this.scene.pause("pause");
    }
}