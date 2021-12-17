import Button from "./button.js";


export default class DifficultyButton extends Button {
    /**
     * 
     * @param {Phaser.Scene} scene 
     * @param {number} x 
     * @param {number} y 
     * @param {string} text 
     * @param {boolean} difficulty - true: dificultad difícil; false: dificultad true
     */

    constructor(scene, x, y, text, difficulty){
        super(scene, x, y, 'boton', text,0.8,0.8);
        this.scene.events.on('difficultyButtonClicked', this.changeButton, this);

        this.text.setFontSize(40);
        this.text.setColor('#000');
        
        this.sprite.on("pointerdown", () =>{
            this.scene.setDifficulty(difficulty);
            this.scene.events.emit('difficultyButtonClicked', difficulty);
        });
        
        this.sprite.on("pointerover", () =>{
            this.text.setColor('#f00');
        });

        this.sprite.on("pointerout", () =>{
            this.text.setColor('#000');
        });
        this.dif = difficulty;
    }

    /**
     * Cambia el color de la dificultad seleccionada a rojo 
     * @param {boolean} newDifficulty - la nueva dificultad seleccionada por el usuario
     */
    changeButton(newDifficulty){
        if (this.dif === newDifficulty){
            this.sprite.setTexture("botonCuchillo");
        }
        else{
            this.sprite.setTexture("boton");
        }
            
    }
}