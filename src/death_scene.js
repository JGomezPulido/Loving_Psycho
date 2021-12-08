import Background from "./background.js";

/**
 * Escena del final en el que matas a tu cita.
 */
export default class DeathScene extends Phaser.Scene {

    constructor() {
      super({ key:'deathScene'});
    }

    create(){
      
      let canvasW = document.getElementById("juego").width;
      let canvasH = document.getElementById("juego").height;
      //Creamos el background y el texto de muerte y ponemos el audio.
      this.background = new Background(this,canvasW/2, canvasH/2, 'fondoNegro');     
      this.sprite = this.add.sprite(canvasW/2, canvasH/2, 'muerta');
      this.stabSound = this.sound.add('stab');
      this.screamSound = this.sound.add('scream');
      this.screamSound.play();
      this.stabSound.play();
    }
}