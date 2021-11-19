export default class PsychoBar extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'psychoBar');
        this.setOrigin(0.5, 1);
        this.scaleY = 0;
        this.scene.add.existing(this);
        this.score = 0;

        this.scene.events.on('changePsychoBar', this.changePsychoBar, this);
    }

    changePsychoBar(n){
        this.score += n;
        this.scaleY += n / 100;

        if (this.score >= 100)
            this.scaleY = 1;
        else if (this.scaleY < 0)
            this.scaleY = 0; 
    }

    pillEffect(){
        this.score /= 2;
        this.scaleY /= 2;
    }
}