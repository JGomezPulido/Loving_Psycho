import Button from './button.js';
import Star from './star.js';

/**
 * Escena principal del juego. La escena se compone de una serie de plataformas 
 * sobre las que se sitúan las bases en las podrán aparecer las estrellas. 
 * El juego comienza generando aleatoriamente una base sobre la que generar una estrella. 
 * Cada vez que el jugador recoge la estrella, aparece una nueva en otra base.
 * El juego termina cuando el jugador ha recogido 10 estrellas.
 * @extends Phaser.Scene
 */
export default class Level extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'level' });
  }

  /**
   * Creación de los elementos de la escena principal de juego
   */
  create() {
    let canvas = document.getElementById("juego");
    let canvasW = canvas.width/2;
    let canvasH = canvas.height/2;
    this.button=new Button(this,canvasW,canvasH);
    this.hearts = [];
  }

  /**
   * Genera una estrella en una de las bases del escenario
   * @param {Array<Base>} from Lista de bases sobre las que se puede crear una estrella
   * Si es null, entonces se crea aleatoriamente sobre cualquiera de las bases existentes
   */
  spawn() {
    console.log("asi e asi e");
    let starNumber = 10;
    for(let i = 0; i<starNumber;i++){
      let mov = 5;
      this.hearts.push(new Star(this, mov * Math.pow(-1,i), this.button.x, this.button.y));
      console.log(this.hearts[i].mov);
    }
    this.scene.start("level");
  }
}