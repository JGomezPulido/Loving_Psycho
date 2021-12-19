/**
 * Escena para cargar los recursos del juego.
 */
export default class Boot extends Phaser.Scene {

  constructor() {
    super({
      key: 'boot'
    });
  }

  preload() {
    this.load.setPath('assets/sprites/');
    this.load.image('pastilla', 'pasti.png');
    this.load.image('boton', 'heart_button.png');
    this.load.image('botonCuchillo', 'heart_button_stabbed.png');
    this.load.image('marion', 'marion_crane_demo.jpg');
    this.load.image('F', 'cuadro_dialogo_rosa.png');
    this.load.image('M', 'cuadro_dialogo_azul.png');
    this.load.image('cuadroOpcion', 'cuadro_opcion.png');
    this.load.image('selecOpcion', 'select_opcion.png');
    this.load.image('barraPsycho', 'psycho_bar.png');
    this.load.image('neutral', 'marion_neutral.png');
    this.load.image('asustada', 'marion_asustada.png');
    this.load.image('enfadada', 'marion_enfadada.png');
    this.load.image('spicy', 'marion_spicy.png');
    this.load.image('horrorizada', 'marion_pavor.png');
    this.load.image('sonriente', 'marion_sonriente.png');
    this.load.image('asqueada', 'marion_asqueada.png');
    this.load.image('fondoNegro', 'background.png');
    this.load.image('parque', 'parque.png');
    this.load.image('motel', 'motel.png');
    this.load.image('muerta', 'she_died.png');
    this.load.image('sangre', 'blood.png');
    this.load.image('marionCraneMenu', 'marion_crane.jpg');
    this.load.image('eveKendallMenu', 'eve_kendall.png');
    this.load.audio('jazz', '../audio/jazz_music.mp3')
    this.load.audio('stab', '../audio/stab_sound.mp3')
    this.load.audio('scream', '../audio/scream_sound.mp3')
    this.load.audio('menu', '../audio/menu_music.mp3')
    this.load.json('tree', '../JSON/tree.json');
    this.load.json('tree2', '../JSON/tree2.json');
  }

  create() {
    this.scene.start('menu');
  }
}