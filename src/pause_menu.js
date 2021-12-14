import Button from "./button.js";
import ConfigButton from "./config_button.js";

export default class PauseMenu extends Phaser.Scene{
    constructor(){
        super({key: "pause"});
    }

    create(){

        let canvasW = this.cameras.main.width;
        let canvasH = this.cameras.main.height;
        
        this._sprite = this.add.sprite(canvasW/2,canvasH/2,"cuadroDialogo");

        this._resumeButton=new Button(this,100,canvasH/2,"boton","Continuar",1,1);
        this._resumeButton.sprite.on("pointerdown", this.changeScene, this);

        this._settingsButton = new ConfigButton(this, canvasW/2,canvasH/2);

        this._exitButton=new Button(this,canvasW - 100,canvasH/2,"boton","Salir",1,1);
        this._exitButton.sprite.on("pointerdown",this.exit,this);

        this._container = this.add.container(0,0,[this._sprite,this._settingsButton,this._resumeButton,this._exitButton]);

        this.esc = this.input.keyboard.addKey("ESC");
        this.esc.on("down", this.changeScene, this);
    }

    changeScene(){
        this.scene.run("Scene");
        this.scene.setVisible(false,"pause");
        this.scene.pause("pause");
    }

    exit(){
        this.scene.stop("Scene");
        //this.scene.stop("pause");

        this.scene.start("menu");
    }
}