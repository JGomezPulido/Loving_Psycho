export default class Pill extends Phaser.GameObjects.Container{

    constructor(scene, x, y){
        
        
        super(scene,x,y);
        this.sprite = scene.add.sprite(0, 10, 'pastilla')
        this.sprite.setScale(0.12, 0.12);
        this.add(this.sprite);
        this.scene.add.existing(this);
        this.sprite.setInteractive();
        this.amount = 3;
        this.text = scene.add.text(50,50,this.amount);
        this.text.setFontSize(25);
        this.text.setFontStyle('bold');
        this.add(this.text);
        this.bar = this.scene.psychoBar;
        this.sprite.on('pointerdown', this.takePill, this);
        this.space = this.scene.input.keyboard.addKey(' ');
        this.space.on('down', this.takePill, this);
    }

    takePill(){
        if(this.amount>0){
            console.log("A");
            this.bar.pillEffect();
            this.amount--;
            this.text.text = this.amount;
        }else{
            this.sprite.off("pointerdown");
            this.space.off('down');
        }
    }
    
}