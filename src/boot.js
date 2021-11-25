export default class Boot extends Phaser.Scene {

  constructor() {
    super({ key: 'boot' });
  }

  preload() {
    this.load.setPath('assets/sprites/');
    this.load.image('corazon', 'corazon.png');
    this.load.image('pastilla', 'pasti.png');
    this.load.image('button', 'button.png');
    this.load.image('marion','marion_crane_demo.jpg');
    this.load.image('cuadroDialogo','cuadro_dialogo.png');
    this.load.image('psychoBar','psycho_bar.png');
    this.load.image('neutral','neutral.png');
    this.load.image('sorprendida','sorprendida.png');
    this.load.image('enfadada','enfadada.png');
    this.load.image('sonrojada','sonrojada.png');
    this.load.image('horrorizada','horrorizada.png');
    this.load.image('feliz','feliz.png');
    this.load.image('blackBackground','background.jpg');
    this.load.image('sheDied','she_died.png');
    this.load.json('tree','../../src/tree.json');
  }
  
  create() {
    this.scene.start('menu');
  }
}