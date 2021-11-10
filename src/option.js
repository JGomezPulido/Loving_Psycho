export default class Option extends Phaser.GameObjects.Text{

    constructor(scene, text, maxS, minS, score, id_obj, x, y){
        this.maxScore = maxS;
        this.minScore = minS;
        this.score = score;
        this.id_obj = id_obj;
        this.scene = scene;
        this.setInteractive();
        this.on("pointerdown", this.clickOption(), this);
    }

    clickOption(){
        this.scene.events.emit('optionClicked', id_obj)

    }
}