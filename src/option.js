export default class Option extends Phaser.GameObjects.Container{

    constructor(scene, text, maxS, minS, score, id_obj, x, y){
        let textoOption = new Phaser.GameObjects.Text(scene, 0,0,text);
        textoOption.setOrigin(0.5,0.5);
        let sprite = scene.add.sprite(0, 0, 'cuadroOpcion');
        super(scene, x, y, [ sprite, textoOption]);
        this.textoOption = textoOption;
        this.sprite = sprite;
        sprite.setScale(0.25,0.1);
        this.maxScore = maxS;
        this.minScore = minS;
        this.score = score;
        this.id_obj = id_obj;
        sprite.setInteractive();
        sprite.on("pointerover", this.hoverIn, this);
        sprite.on("pointerout", this.hoverOut, this);
        sprite.on("pointerdown", this.clickOption, this);
        this.scene.add.existing(this);
    }

    clickOption(){
        console.log(this.id_obj);
        this.scene.events.emit('optionClicked', this.id_obj);
        this.scene.events.emit('changePsychoBar', this.score);

    }

    setOption(optionNode){
        this.textoOption.setText(optionNode.text);
        this.text = optionNode.text;
        this.minS = optionNode.minS;
        this.maxS = optionNode.maxS;
        this.score = optionNode.score;
        this.id_obj = optionNode.id_obj;
        console.log(this);
    }

    hoverIn(){
        this.sprite.setTexture('selecOpcion');
    }
    hoverOut(){
        this.sprite.setTexture('cuadroOpcion');
    }
}