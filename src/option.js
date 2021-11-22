export default class Option extends Phaser.GameObjects.Container{

    constructor(scene, text, maxS, minS, score, id_obj, x, y){
        let textoOption = scene.add.text(0,0,text);
        let sprite = scene.add.sprite(x, y, 'cuadroDialogo');
        super(scene, x, y, [textoOption, sprite]);
        sprite.setScale(0.25,0.1);
        this.maxScore = maxS;
        this.minScore = minS;
        this.score = score;
        this.id_obj = id_obj;
        sprite.setInteractive();
        sprite.on("pointerdown", this.clickOption, this);
        this.scene.add.existing(this);
    }

    clickOption(){
        this.scene.events.emit('optionClicked', this.id_obj);

    }
}