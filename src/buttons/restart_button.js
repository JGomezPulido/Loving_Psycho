import Button from "./button.js"

/**
 * Representa el botón de reinicio de juego. Al pulsarlo se cerrarán todas las escenas, volviendo a la del menú principal
 * (IMPORTANTE: Se resetea la configuración de velocidad diálogos)
 */
export default class RestartButton extends Button {
    /**
     * Construye Un nuevo botón de reinicio.
     * @param {Phaser.Scene} scene - la escena a la que pertenece el botón 
     * @param {*} x - Posicion en x
     * @param {*} y - Posicion en y
     */
    constructor(scene, x, y) {
        super(scene, x, y, 'boton', 'Reiniciar', 0.95, 0.95);//0.95

        this.sprite.on("pointerdown", this.exit, this);
    }

    exit() {
        this.scene.scene.stop("Scene");
        this.scene.scene.start("menu");
    }
}