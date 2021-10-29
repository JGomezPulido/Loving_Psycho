export default class Boot extends Phaser.Scene {

  constructor() {
    super({ key: 'boot' });
  }

  preload() {
    this.load.setPath('assets/sprites/');
    this.load.image('corazon', 'corazon.png');
    this.load.image('button', 'button.png');
    this.load.image('marion','marion_crane_demo.jpg');
  }
  
  create() {
    this.scene.start('menu');
  }
}