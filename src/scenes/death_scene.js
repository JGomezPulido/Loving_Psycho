import Background from "../background.js";
import RestartButton from "../buttons/restart_button.js";

/**
 * Escena del final en el que matas a tu cita.
 */
export default class DeathScene extends Phaser.Scene {

  constructor() {
    super({
      key: 'deathScene'
    });
  }

  /**
   * Construye la escena de muerte, poniendo el fondo y un boton de reinicio, ademas de ejecutando varios sonidos
   * @override
   */
  create() {

    let canvasW = document.getElementById("juego").width;
    let canvasH = document.getElementById("juego").height;
    //Creamos el background y el texto de muerte y ponemos el audio.
    this.background = new Background(this, canvasW / 2, canvasH / 2, 'fondoNegro');
    this.sprite = this.add.sprite(canvasW / 2, canvasH / 2, 'muerta');
    this._restartButton = new RestartButton(this, canvasW/ 2, 3*canvasH/ 4);
    this.stabSound = this.sound.add('stab');
    this.screamSound = this.sound.add('scream');
    this.screamSound.play();
    this.stabSound.play();

    this.events.on('shutdown', () => {
      this.screamSound.stop();
      this.stabSound.stop();
    });
  }
}