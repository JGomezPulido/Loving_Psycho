export default class Background extends Phaser.GameObjects.Image{
    constructor(scene, x, y,){
        super(scene, x, y, 'fondoNegro');
        this.scene.add.existing(this);
    }
        
    changeBackground(background){
        this.setTexture(background);
    }
}