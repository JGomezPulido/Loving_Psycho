/**
 * Representa un boton de un menú.
 */
export default class Button extends Phaser.GameObjects.Container {

  /**
   * 
   * @param {Phaser.Scene} scene 
   * @param {number} x 
   * @param {number} y 
   * @param {Phaser.GameObjects.Sprite} sprite 
   * @param {Phaser.GameObjects.Text} text 
   */
  constructor(scene, x, y, sprite, text, w, h) {
    super(scene, x, y);
    this.setScale(w,h);
    this.sprite = this.scene.add.sprite(0,0,sprite);
    this.add(this.sprite);
    this.text=this.scene.add.text(0,0,text);
    this.text.setOrigin(0.5,0.5);
    this.add(this.text);
    this.scene.add.existing(this);
    this.sprite.setInteractive();
  }
}
