 /**
  * Representa el fondo de sangre, que irá perdiendo transparencia conforme avance el juego
  */
 export default class Blood extends Phaser.GameObjects.Image {
    /**
     * Construye un nuevo objeto Blood
     * @param {Phaser.Scene} scene 
     * @param {number} x - posición en el eje x
     * @param {number} y - posición en el eje y
     * @param {string} texture - nombre de la textura a dar al objeto
     */
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.scene.add.existing(this);
    }
}