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
      this.text = this.add.text(canvasW/2, canvasH/2, 'La cita ha terminado, Match: ' + this.match + "%.");
      this.text.setOrigin(0.5,0.5);
      this.text.setFontSize(30);
    }
}