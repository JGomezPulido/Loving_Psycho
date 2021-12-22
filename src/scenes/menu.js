import ConfigButton from '../buttons/config_button.js';
import DateButton from '../buttons/date_button.js';
import DifficultyButton from '../buttons/difficulty_button.js';
import ConfigMenu from '../config_menu.js';

/**
 * Representa el menú principal del juego
 */
export default class Menu extends Phaser.Scene {
  constructor() {
    super({
      key: 'menu'
    });
  }


  /**
   * Construye un menú principal, con el título, los botones para iniciar ambas citas, los selectores de dificultad
   * y un botón y menú de configuración.
   * @override
   */
  create() {
    let canvas = document.getElementById("juego");
    let canvasW = canvas.width;
    let canvasH = canvas.height;

    this.b = this.add.image(canvasW / 2, canvasH / 2, 'fondoMenu');
    this.b.setScale(canvasW / this.b.width, canvasH / this.b.height);
    this.add.text(canvasW / 2, canvasH * 0.07, 'Loving  Psycho').setOrigin(0.5, 0).setFontSize(80);


    //botones de las dos citas
    this.buttonMarionCrane = new DateButton(this, canvasW * 0.25, canvasH / 2.4, 'marionCraneMenu', this.cache.json.get("tree"));
    this.buttonEveKendall = new DateButton(this, canvasW * 0.75, canvasH / 2.4, 'evaKendallMenu', this.cache.json.get("tree2"));

    //botones para seleccionar la dificltad
    this.add.text(canvasW / 2, canvasH / 1.4, '< Dificultad >').setOrigin(0.5, 0.5).setFontSize(30).setOrigin(0.5, 0.5).setFontStyle('bold');
    this.buttonNormal = new DifficultyButton(this, canvasW / 4, canvasH / 1.4, "Normal", false);
    this.buttonDificil = new DifficultyButton(this, canvasW * 3 / 4, canvasH / 1.4, "Difícil", true);

    //boton de configuracion
    this.configButton = new ConfigButton(this, canvasW / 2, canvasH / 6 * 5);
    this.configMenu = new ConfigMenu(this, canvasW / 2, canvasH / 2, {
      "textVelocity": 40
    });

    //música
    this.menuMusic = this.sound.add('menu');
    this.menuMusic.play();
    this.menuMusic.setLoop(true);


    //booleano que indica si la dificultad dificil está activada
    this.hard = false;
    this.events.emit('difficultyButtonClicked', this.hard);

  }

  /**
   * Pasa a la escena de la cita con el árbol de diálogo especificado y los datos de velocidad del texto del menú de configuración.
   * @param {Node[]} tree - árbol de diálogos de la nueva escena
   */
  startScene(tree) {
    this.menuMusic.stop();
    this.scene.start('Scene', {
      cita: tree,
      dificultad: this.hard,
      textVelocity: this.configMenu.getTextVelocity()
    });
    this.scene.stop("menu");
  }

  /**
   * Selecciona la dificultad del juego dependiendo del parámetro.
   * @param {boolean} isHard - true para seleccionar el modo difícil, false en caso contrario
   */
  setDifficulty(isHard) {
    this.hard = isHard;
  }

}