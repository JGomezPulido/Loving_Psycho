export default class Corazon extends Phaser.GameObjects.Sprite {

  constructor(scene, mov, x, y) {
    super(scene, x, y, 'corazon');
    this.scene.add.existing(this);
    this.mov = mov;
  }

  preUpdate(t, dt) {

    super.preUpdate(t, dt);
    
    this.setPosition(this.x + this.mov.x/dt, this.y - this.mov.y/dt);
  }
}
