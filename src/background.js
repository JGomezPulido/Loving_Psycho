export default class Background extends Phaser.GameObjects.Image{
    constructor(scene, x, y,){
        super(scene, x, y, 'blackBackground');
        this.scene.events.on('changeBackground', this.changeBackground, this);
        this.scene.add.existing(this);
    }
        
    changeBackground(background){
        this.setImage(background);
    }
}