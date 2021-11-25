export default class Girl extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, h){
        super(scene, x, y, 'neutral');
        this.setScale(h / this.height, h / this.height);
        this.scene.events.on('changeExpresion', this.changeGirlFace, this);
        this.scene.add.existing(this);
    }
        
    changeGirlFace(expresion){
        this.setTexture(expresion);
    }
}