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
    //Carga de 
    this.load.setPath('assets/sprites/');
    this.load.image('pastilla', 'pasti.png');
    this.load.image('boton', 'heart_button.png');
    this.load.image('botonCuchillo', 'heart_button_stabbed.png');
    this.load.image('F', 'cuadro_dialogo_rosa.png');
    this.load.image('M', 'cuadro_dialogo_azul.png');
    this.load.image('cuadroOpcion', 'cuadro_opcion.png');
    this.load.image('selecOpcion', 'select_opcion.png');
    this.load.image('barraPsycho', 'psycho_bar.png');
    this.load.image('fondoNegro', 'background.png');
    this.load.image('parque', 'parque.png');
    this.load.image('motel', 'motel.png');
    this.load.image('habitacion', 'habitacion.png');
    this.load.image('puerta', 'puerta.png');
    this.load.image('muerta', 'she_died.png');
    this.load.image('sangre', 'blood.png');
    this.load.image('eveKendallMenu', 'eve_kendall.png');
    this.load.image('configButton', 'black_button.png');
    this.load.image('pauseMenu', 'motel_pausa.png');
    this.load.image('fondoMenu', 'fondo_menu.png');
    this.load.image('heartPauseButton','heart_pause_button.png')
    this.load.image('restaurante', 'restaurante_tren.png');
    this.load.image('compartimento', 'habitacion_tren.png');

    //Sprites Marion
    this.load.setPath('assets/sprites/marion_crane/');
    this.load.image('neutral', 'marion_neutral.png');
    this.load.image('asustada', 'marion_asustada.png');
    this.load.image('enfadada', 'marion_enfadada.png');
    this.load.image('spicy', 'marion_spicy.png');
    this.load.image('horrorizada', 'marion_pavor.png');
    this.load.image('sonriente', 'marion_sonriente.png');
    this.load.image('asqueada', 'marion_asqueada.png');    
    this.load.image('marionCraneMenu', 'marion_icon.png');
    this.load.image('marionCraneMenuRojo', 'marion_icon_border.png');
    
    //Sprites Eva
    this.load.setPath('assets/sprites/eva_kendall/');
    this.load.image('evaNeutral', 'eva_neutral.png');
    this.load.image('evaAsustada', 'eva_asustada.png');
    this.load.image('evaEnfadada', 'eva_enfadada.png');
    this.load.image('evaSpicy', 'eva_spicy.png');
    this.load.image('evaHorrorizada', 'eva_pavor.png');
    this.load.image('evaSonriente', 'eva_sonriente.png');
    this.load.image('evaAsqueada', 'eva_asqueada.png');    
    this.load.image('evaKendallMenu', 'eva_icon.png');
    this.load.image('evaKendallMenuRojo', 'eva_icon_border.png');

    //Carga de audio
    this.load.setPath("assets/audio/")
    this.load.audio('jazz', 'jazz_music.mp3')
    this.load.audio('stab', 'stab_sound.mp3')
    this.load.audio('scream', 'scream_sound.mp3')
    this.load.audio('menu', 'menu_music.mp3')

    //Carga de JSON
    this.load.setPath("assets/JSON/")
    this.load.json('tree', 'tree.json');
    this.load.json('tree2', 'tree2.json');
  }

  create() {
    this.scene.start('menu');
  }
}