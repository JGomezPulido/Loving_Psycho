import Button from './button.js';
import Corazon from './corazon.js';

export default class Menu extends Phaser.Scene {
  constructor() {
    super({ key: 'menu' });
  }
  create() {
    let canvas = document.getElementById("juego");
    let canvasW = canvas.width/2;
    let canvasH = canvas.height/2;
    this.button=new Button(this,canvasW,canvasH);
    this.hearts = [];
  }


  spawn() {
    console.log("spawning hearts");
    let heartNumber = 10;
    for(let i = 0; i<heartNumber;i++){
      let mov = new Phaser.Math.Vector2(30*Math.pow(-1,i)*(heartNumber/(i+1)),50);
      this.hearts.push(new Corazon(this, mov, this.button.x, this.button.y));
    }
    setTimeout(()=>{
      this.scene.start('tempend');
    },1000)

  }
}