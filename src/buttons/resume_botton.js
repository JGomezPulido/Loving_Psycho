import Button from './button.js'

export default class ResumeButton extends Button {
    constructor(scene, x, y) {
        super(scene, x, y, 'boton', 'Continuar', 1, 1);

        this.sprite.on("pointerdown", this.changeScene, this);
    }

    changeScene() {
        this.scene.scene.run("Scene");
        this.scene.scene.setVisible(false, "pause");
        this.scene.scene.pause("pause");
    }
}