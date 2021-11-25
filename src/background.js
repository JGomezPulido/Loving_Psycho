export default class Background extends Phaser.GameObjects.Image{
    constructor(scene, x, y,){
        super(scene, x, y, 'blackBackground');
        this.setScale(1.3, 1.5);
        this.scene.events.on('changeBackground', this.changeBackground, this);
        this.scene.add.existing(this);
    }
        
    changeBackground(background){
        this.setImage(background);
    }
}