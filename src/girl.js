/**
 * Representa la chica de la cita
 */
export default class Girl extends Phaser.GameObjects.Sprite{
    /**
     * @param {Phaser.Scene} scene 
     * @param {number} x - posición en eje x
     * @param {number} y - posición en eje y
     * @param {number} h - proporción
     */
    constructor(scene, x, y, h){
        super(scene, x, y, 'neutral');
        this.setScale(h / this.height, h / this.height);
        this.scene.events.on('changeExpresion', this.changeGirlFace, this);
        this.scene.add.existing(this);
    }
        
    /**
     * Cambia la expresión de la cara de la cita
     * @param {string} expresion 
     */
    changeGirlFace(expresion){
        this.setTexture(expresion);
    }
}