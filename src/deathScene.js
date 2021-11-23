import Background from "./background.js";

export default class DeathScene extends Phaser.Scene {

    constructor() {
      super({ key:'deathScene'});
    }
    create(){
      
      console.log("Aqui me hallo");
      let canvasW = document.getElementById("juego").width;
      let canvasH = document.getElementById("juego").height;
      this.background = new Background(this,canvasW/2, canvasH/2);     
      this.sprite = this.add.sprite(canvasW/2, canvasH/2, 'sheDied');
    }
}