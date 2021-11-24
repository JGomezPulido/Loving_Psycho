export default class PsychoBar extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'psychoBar');
        this.setOrigin(0.5, 1);
        this.scaleY = 0;
        this.score = 0;
        this.scene.add.existing(this);
        

        this.scene.events.on('changePsychoBar', this.changePsychoBar, this);
        this.scene.events.on('writtenText', this.prematureFillBar, this);
        this.scene.events.on('dialogBoxClicked', this.barraTope, this);
        this.tween = this.scene.tweens.add({
            targets: [] })
    }

    changePsychoBar(n){
        this.score += n;
        
        if (this.score >= 100){
            this.score = 100;
            
        }
            
        else if (this.score < 0){
            this.score = 0;
        } 
        
        this.tween.stop();
        this.tween = this.scene.tweens.add({
            targets: [ this ],
            scaleY: this.score / 100,
            duration: 4000,
            ease: 'Linear:',
            yoyo: false,
            repeat: 0
        });
    }

    barraTope(){
        if (this.score === 100){
            this.scene.events.emit('changeEscena', "deathScene");
        }
    }

    pillEffect(){
        this.score /= 2;

        this.tween.stop();
        this.tween = this.scene.tweens.add({
            targets: [ this ],
            scaleY: this.score / 100,
            duration: 3000,
            ease: 'Expo.Out',
            yoyo: false,
            repeat: 0
        });
    }

    prematureFillBar(){
        this.tween.stop();
        this.scaleY = this.score / 100;
    }
}