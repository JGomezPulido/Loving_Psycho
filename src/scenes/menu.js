import ConfigButton from '../buttons/config_button.js';
import DateButton from '../buttons/date_button.js';
import DifficultyButton from '../buttons/difficulty_button.js';

export default class Menu extends Phaser.Scene {
  constructor() {
    super({
      key: 'menu'
    });
  }


  create() {
    let canvas = document.getElementById("juego");
    let canvasW = canvas.width;
    let canvasH = canvas.height;

    this.add.text(canvasW / 2, canvasH * 0.05, 'Loving Psycho').setOrigin(0.5, 0).setFontSize(80);

    //botones de las dos citas
    this.buttonMarionCrane = new DateButton(this, canvasW * 0.25, canvasH / 3, 'marionCraneMenu', this.cache.json.get("tree"));
    this.buttonEveKendall = new DateButton(this, canvasW * 0.75, canvasH / 3, 'eveKendallMenu', this.cache.json.get("tree2"));

    //botones para seleccionar la dificltad
    this.add.text(canvasW / 2, canvasH / 3 * 2, '< Dificultad >').setOrigin(0.5, 0.5).setFontSize(30).setOrigin(0.5, 0.5).setFontStyle('bold');
    this.buttonNormal = new DifficultyButton(this, canvasW / 4, canvasH / 3 * 2, "Normal", false);
    this.buttonDificil = new DifficultyButton(this, canvasW * 3 / 4, canvasH / 3 * 2, "Difícil", true);

    //boton de configuracion
    this.configButton = new ConfigButton(this, canvasW / 2, canvasH / 6 * 5);

    //música
    this.menuMusic = this.sound.add('menu');
    this.menuMusic.play();
    this.menuMusic.setLoop(true);


    //booleano que indica si la dificultad dificil está activada
    this.hard = false;
    this.events.emit('difficultyButtonClicked', this.hard);

  }

  startScene(tree) {
    this.menuMusic.stop();
    this.scene.start('Scene', {
      cita: tree,
      dificultad: this.hard
    });
    this.scene.stop("menu");
  }

  setDifficulty(isHard) {
    this.hard = isHard;
  }

}