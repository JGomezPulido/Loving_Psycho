import Background from "./background.js";


export default class MatchScene extends Phaser.Scene {

    constructor() {
      super({ key:'matchScene'});
    }

    init(data){
      this.match = data.match;
    }

    create(){
      
      let canvasW = document.getElementById("juego").width;
      let canvasH = document.getElementById("juego").height;
      this.background = new Background(this,canvasW/2, canvasH/2); 
      let textString = "La cita ha terminado. Match: " + this.match + "%";
      this.setText(canvasW/2, canvasH/2, textString);
    }

    setText(x, y, string){
      this.text = this.add.text(x, y, string);
      this.text.setOrigin(0.5,0.5);
      this.text.setFontSize(30);
    }
}