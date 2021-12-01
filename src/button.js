/**
 * Representa un boton de un menú.
 */
export default class Button extends Phaser.GameObjects.Sprite {

  /**
   * @param {Phaser.Scene} scene 
   * @param {number} x 
   * @param {number} y 
   */
  constructor(scene, x, y) {

    super(scene, x, y, 'boton');

    this.scene.add.existing(this).setInteractive();

    this.on("pointerdown", () =>{
      this.scene.spawn()
      this.off("pointerdown");
    });
  }
}
