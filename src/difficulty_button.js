import Button from "./button.js";

export default class DifficultyButton extends Button {
    constructor(scene, x, y, text, difficulty){
        super(scene, x, y, 'boton', text,0.8,0.8);
        this.scene.events.on('difficultyButtonClicked', this.changeColor, this);

        this.text.setFontSize(40);

        this.sprite.on("pointerdown", () =>{
            this.scene.setDifficulty(difficulty);
            this.scene.events.emit('difficultyButtonClicked', difficulty);
        });
        this.dif = difficulty;
    }

    changeColor(newDifficulty){
        if (this.dif === newDifficulty){
            this.text.setColor('#f00');
        }
        else{
            this.text.setColor('#000');
        }
            
    }
}