export default class Boot extends Phaser.Scene {

  constructor() {
    super({ key: 'boot' });
  }

  preload() {
    this.load.setPath('assets/sprites/');
    this.load.image('corazon', 'corazon.png');
    this.load.image('button', 'button.png');
    this.load.image('marion','marion_crane_demo.jpg');
    this.load.image('cuadroDialogo','cuadro_dialogo.png');
    this.load.image('psychoBar','psycho_bar.png');
    this.load.json('tree','../../src/tree.json');
  }
  
  create() {
    this.scene.start('menu');
  }
}