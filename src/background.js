/**
 * Representa el fondo de la cita.
 */
export default class Background extends Phaser.GameObjects.Image{
    constructor(scene, x, y,){
        super(scene, x, y, 'fondoNegro');
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