/**
 * Respresenta las pastillas que bajan la barra de instinto asesino
 */
export default class Pill extends Phaser.GameObjects.Container {

    /**
     * Construye un nuevo objecto Pill
     * @param {Phaser.scene} scene 
     * @param {number} x - posición en el eje x
     * @param {number} y - posición en el eje y
     */
    constructor(scene, x, y) {

        super(scene, x, y);
        this.scene.add.existing(this);
        this._sprite = this.initSprite(0.12, 0, 10);
        this._amount = 3;
        this._text = this.initText(25, 50, 50);
        this._bar = this.scene.psychoBar;
        this._sprite.on('pointerdown', this.takePill, this);
        this._space = this.scene.input.keyboard.addKey('SPACE');
        this._space.on('down', this.takePill, this);
    }

    /**
     * Inicializa el texto indicador del número de pastillas restantes.
     * @param {string} fontSize 
     * @param {number} x 
     * @param {number} y 
     * @returns 
     */
    initText(fontSize, x, y) {
        let text = this.scene.add.text(x, y, this._amount);
        text.setFontSize(fontSize);
        text.setFontStyle('bold');
        this.add(text);
        return text;
    }

    /**
     * Crea el sprite de la pastilla.
     * @param {number} scale 
     * @param {number} x 
     * @param {number} y 
     * @returns 
     */
    initSprite(scale, x, y) {
        let sprite = this.scene.add.sprite(x, y, 'pastilla');
        sprite.setScale(scale, scale);
        this.add(sprite);
        sprite.setInteractive();
        return sprite;
    }

    /**
     * Método que se llama al tomarse una pastilla 
     */
    takePill() {
        if (this._amount > 0) {
            this._bar.pillEffect();
            this._bar.resetPasiveFillCont();
            this._amount--;
            this._text.text = this._amount;
        } else {
            this._sprite.off("pointerdown");
            this._space.off('down');
        }
    }

}