export default class Pill extends Phaser.GameObjects.Container{

    constructor(scene, x, y){
        
        
        super(scene,x,y);
        this.sprite = scene.add.sprite(0, 0, 'corazon')
        this.add(this.sprite);
        this.scene.add.existing(this);
        this.sprite.setInteractive();
        this.amount = 3;
        this.text = scene.add.text(50,50,this.amount);
        this.add(this.text);
        this.bar = this.scene.psychoBar;
        this.sprite.on('pointerdown', this.takePill, this);
        this.space = this.scene.input.keyboard.addKey(' ');
        this.space.on('down', this.takePill, this);
        
    }

    takePill(){
        if(this.amount>0){
            console.log("A");
            this.bar.changePsychoBar(-10);
            this.amount--;
            this.text.text = this.amount;
        }else{
            this.sprite.off("pointerdown");
            this.space.off('down');
        }
    }
    
}