/**
 * Representa un boton de un menú.
 */
export default class Button extends Phaser.GameObjects.Sprite {

  /**
   * @param {Phaser.Scene} scene 
   * @param {number} x 
   * @param {number} y 
   */
  constructor(scene, x, y, sprite) {
    super(scene, x, y, sprite);

    this.scene.add.existing(this).setInteractive();
  }
}
