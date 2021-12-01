/**
 * Representa el fondo de la cita.
 */
export default class Background extends Phaser.GameObjects.Image{
    /**
     * @param {Phaser.Scene} scene 
     * @param {number} x 
     * @param {number} y 
     * @param {string} texture
     */
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        this.scene.add.existing(this);
    }
    
    /**
     * Este método sirve para cambiar la imagen del Background.
     * @param {string} background - El nuevo fondo al que hay que cambiar. 
     */
    changeBackground(background){
        this.setTexture(background);
    }
}