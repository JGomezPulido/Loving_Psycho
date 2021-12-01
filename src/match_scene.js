import Background from "./background.js";

/**
 * Escena que se muestra tras acabar la cita
 */
export default class MatchScene extends Phaser.Scene {

    constructor() {
      super({ key:'matchScene'});
    }

    /**
     * @param {object} data 
     */
    init(data){
      //match del nodo terminal
      this.match = data.match;
    }

    create(){
      
      let canvasW = document.getElementById("juego").width;
      let canvasH = document.getElementById("juego").height;
      this.background = new Background(this,canvasW/2, canvasH/2, 'fondoNegro'); 
      let textString = "La cita ha terminado. Match: " + this.match + "%";
      this.setText(canvasW/2, canvasH/2, textString);
    }

    /**
     * Dibuja texto en pantalla
     * @param {number} x - posicion en el eje x
     * @param {number} y - posicion en el eje y
     * @param {string} string - texto a escribir
     */
    setText(x, y, string){
      this.text = this.add.text(x, y, string);
      this.text.setOrigin(0.5,0.5);
      this.text.setFontSize(30);
    }
}