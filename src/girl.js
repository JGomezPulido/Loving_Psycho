/**
 * Representa la chica de la cita
 */
export default class Girl extends Phaser.GameObjects.Sprite {
    /**
     * Construye un nuevo objeto Girl
     * @param {Phaser.Scene} scene 
     * @param {number} x - posición en eje x
     * @param {number} y - posición en eje y
     * @param {number} h - proporción/ escala
     */
    constructor(scene, x, y, h, expresion) {
        super(scene, x, y, expresion);
        this.setScale(h / this.height, h / this.height);
        this.scene.events.on('changeExpresion', this.changeGirlFace, this);
        this.scene.add.existing(this);

        this.on("destroy", () => { //esto si
            this.scene.events.off('changeExpresion');
        });
    }

    /**
     * Cambia la expresión de la cara de la cita
     * @param {string} expresion 
     */
    changeGirlFace(expresion) {
        this.setTexture(expresion);
    }
}