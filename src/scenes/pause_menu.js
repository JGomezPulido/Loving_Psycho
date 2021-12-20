import ConfigButton from "../buttons/config_button.js";
import RestartButton from "../buttons/restart_button.js";
import ResumeButton from "../buttons/resume_botton.js";
import ConfigMenu from "../config_menu.js";

export default class PauseMenu extends Phaser.Scene {
    constructor() {
        super({
            key: "pause"
        });
    }

    init(data){
        this._textVelocity = data.textVelocity;
    }
    create() {

        let canvasW = this.cameras.main.width;
        let canvasH = this.cameras.main.height;

        this._sprite = this.add.sprite(canvasW / 2, canvasH / 2, "pauseMenu");

        this._resumeButton = new ResumeButton(this, canvasW/2, canvasH / 4 - 10);
        //this._resumeButton = new ResumeButton(this, canvasW/2 +20, canvasH / 4 + 30);

        this._settingsButton = new ConfigButton(this, canvasW / 2, canvasH / 2 - 65);
        //this._settingsButton = new ConfigButton(this, canvasW / 2 +17, canvasH / 2 - 23);
        this.configMenu = new ConfigMenu(this, canvasW/2, canvasH/2, {textVelocity: this._textVelocity});

        this._restartButton = new RestartButton(this, canvasW  / 2, canvasH / 4 * 3 - 35);
        //this._restartButton = new RestartButton(this, canvasW /2 + 23, 3* canvasH/4+40);

        this._container = this.add.container(0, 0, [this._sprite, this._settingsButton, this._resumeButton, this._restartButton,this.configMenu]);

        this.esc = this.input.keyboard.addKey("ESC");
        this.esc.on("down", this.changeScene, this);

        this.events.on('resume', (sys, data) => {
            this.configMenu.setTextVelocity(data.textVelocity);
        })
    }

    changeScene() {
        this.scene.run("Scene", {textVelocity: this.configMenu.getTextVelocity()});
        this.scene.setVisible(false, "pause");
        this.scene.pause("pause");
    }
}