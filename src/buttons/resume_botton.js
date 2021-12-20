import Button from './button.js'

export default class ResumeButton extends Button {
    constructor(scene, x, y) {
        super(scene, x, y, 'boton', 'Continuar', 0.75, 0.75);

        this.sprite.on("pointerdown", this.changeScene, this);
    }

    changeScene() {
        this.scene.scene.run("Scene");
        this.scene.scene.setVisible(false, "pause");
        this.scene.scene.pause("pause");
    }
}