import ConfigButton from "../buttons/config_button.js";
import RestartButton from "../buttons/restart_button.js";
import ResumeButton from "../buttons/resume_botton.js";

export default class PauseMenu extends Phaser.Scene {
    constructor() {
        super({
            key: "pause"
        });
    }

    create() {

        let canvasW = this.cameras.main.width;
        let canvasH = this.cameras.main.height;

        this._sprite = this.add.sprite(canvasW / 2, canvasH / 2, "F");

        this._resumeButton = new ResumeButton(this, 100, canvasH / 2, "boton", "Continuar", 1, 1);
        this._settingsButton = new ConfigButton(this, canvasW / 2, canvasH / 2);
        this._restartButton = new RestartButton(this, canvasW - 100, canvasH / 2);

        this._container = this.add.container(0, 0, [this._sprite, this._settingsButton, this._resumeButton, this._restartButton]);

        this.esc = this.input.keyboard.addKey("ESC");
        this.esc.on("down", this.changeScene, this);
    }

    changeScene() {
        this.scene.run("Scene");
        this.scene.setVisible(false, "pause");
        this.scene.pause("pause");
    }
}