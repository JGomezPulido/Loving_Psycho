import ConfigButton from './config_button.js';
import DateButton from './date_button.js';
import DifficultyButton from './difficulty_button.js';

export default class Menu extends Phaser.Scene {
  constructor() {
    super({ key: 'menu' });
  }

  // preload(){
  //   this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
  // }

  create() {
    //Esta mierda no funciona (preguntar al profe)
    //Creo que es xq el texto se escribe antes de que se cargue la fuente


    // let self = this; // Para usarlo en active
    // WebFont.load({
    //     google: {
    //         families: [ 'Freckle Face', 'Finger Paint', 'Nosifer', 'Coming Soon' ]
    //     },
    //     active: function () // se llama a esta función cuando está cargada
    //     {
    //         let nuevoTexto = 
    //             self.add.text(16, 0, 
    //                 'hola', 
    //                 { fontFamily: 'Coming Soon', fontSize: 80, color: '#ffffff' })
    //         nuevoTexto.setShadow(2, 2, "#333333", 2, false, true);
    //     }
        
    // });

    let canvas = document.getElementById("juego");
    let canvasW = canvas.width;
    let canvasH = canvas.height;

    this.add.text(canvasW / 2, canvasH * 0.05, 'Loving Psycho').setOrigin(0.5, 0).setFontSize(80);

    this.buttonMarionCrane = new DateButton(this,canvasW * 0.25,canvasH / 3, 'marionCraneMenu',this.cache.json.get("tree"));
    this.buttonEveKendall = new DateButton(this,canvasW * 0.75,canvasH / 3, 'eveKendallMenu',this.cache.json.get("tree2"));

    this.add.text(canvasW / 2, canvasH / 3 * 2, '< Dificultad >').setOrigin(0.5, 0.5).setFontSize(30).setOrigin(0.5, 0.5).setFontStyle('bold');
    this.buttonNormal = new DifficultyButton(this, canvasW / 4, canvasH / 3 * 2, "Normal", false);
    this.buttonDificil = new DifficultyButton(this, canvasW * 3 / 4, canvasH / 3 * 2, "Difícil", true);
    this.menuMusic = this.sound.add('menu');
    this.menuMusic.play();
    this.menuMusic.setLoop(true);

    this.configButton = new ConfigButton(this, canvasW / 2, canvasH / 6 * 5);
    

    this.hard = false;
    this.events.emit('difficultyButtonClicked', this.hard);
  }

  startScene(tree){
    this.menuMusic.stop();
    this.scene.start('Scene', { cita: tree, dificultad: this.hard});
  }

  setDifficulty(isHard){
    this.hard = isHard;
    console.log("hard: " + isHard);
  }

}