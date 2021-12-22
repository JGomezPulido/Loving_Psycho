import Background from "../background.js";
import RestartButton from "../buttons/restart_button.js";

/**
 * Escena que se muestra tras acabar la cita
 */
export default class MatchScene extends Phaser.Scene {

  constructor() {
    super({
      key: 'matchScene'
    });
  }

  /**
   * @param {object} data datos de inicio de la escena
   */
  init(data) {
    //match del nodo terminal
    this._match = data.match;
  }

  /**
   * Crea una nueva match scene, poniendo un texto con el porcentaje de match y un botón de reinicio
   * @override
   */
  create() {

    let canvasW = document.getElementById("juego").width;
    let canvasH = document.getElementById("juego").height;
    this._background = new Background(this, canvasW / 2, canvasH / 2, 'fondoNegro');
    let textString = "La cita ha terminado. Match: " + this._match + "%";
    this.setText(canvasW / 2, canvasH / 2, textString);

    this._restartButton = new RestartButton(this, canvasW / 2, 3 * canvasH / 4);
  }

  /**
   * Dibuja texto en pantalla
   * @param {number} x - posicion en el eje x
   * @param {number} y - posicion en el eje y
   * @param {string} string - texto a escribir
   */
  setText(x, y, string) {
    this._text = this.add.text(x, y, string);
    this._text.setOrigin(0.5, 0.5);
    this._text.setFontSize(30);
  }
}