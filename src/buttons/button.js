/**
 * Representa un boton de un menú.
 */
export default class Button extends Phaser.GameObjects.Container {

  /**
   * 
   * @param {Phaser.Scene} scene 
   * @param {number} x - posición en el eje x
   * @param {number} y - posición en el eje x
   * @param {Phaser.GameObjects.Sprite} sprite - sprite del boton 
   * @param {Phaser.GameObjects.Text} text - texto del boton
   */
  constructor(scene, x, y, sprite, text, w, h) {
    super(scene, x, y);
    this.setScale(w, h);
    this.sprite = this.scene.add.sprite(0, 0, sprite);
    this.add(this.sprite);
    this.text = this.scene.add.text(0, 0, text);
    this.text.setOrigin(0.5, 0.5);
    this.add(this.text);
    this.scene.add.existing(this);
    this.sprite.setInteractive();

    this.text.setFontSize(35);
    this.text.setColor('#000');
    this.text.setFontStyle('bold');

    this.sprite.on("pointerover", () => {
      this.text.setColor('#f00');
    });

    this.sprite.on("pointerout", () => {
      this.text.setColor('#000');
    });
  }


  
}