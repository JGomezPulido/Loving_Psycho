export default class Boot extends Phaser.Scene {

  constructor() {
    super({ key: 'boot' });
  }

  preload() {
    this.load.setPath('assets/sprites/');
    this.load.image('corazon', 'corazon.png');
    this.load.image('button', 'button.png');
    this.load.image('loving_psycho','loving_psycho.jpg');
  }
  
  create() {
    this.scene.start('menu');
  }
}