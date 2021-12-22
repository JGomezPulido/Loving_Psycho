import Button from './button.js'

/**
 * Representa el botón de continuar el juego, al pulsarse se quitará la pausa de la escena y se cerrará el menú de pausa.
 */
export default class ResumeButton extends Button {
     /**
     * Construye Un nuevo botón de continuar.
     * @param {Phaser.Scene} scene - la escena a la que pertenece el botón 
     * @param {*} x - Posicion en x
     * @param {*} y - Posicion en y
     */
    constructor(scene, x, y) {
        super(scene, x, y, 'boton', 'Continuar', 0.75, 0.75); //0.75

        this.sprite.on("pointerdown", this.changeScene, this);
    }

    changeScene() {
        this.scene.scene.run("Scene", {textVelocity: this.scene.configMenu.getTextVelocity()});
        this.scene.scene.setVisible(false, "pause");
        this.scene.scene.pause("pause");
    }
}