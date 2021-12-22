/**
 * Representa una opción de un nodo
 */
export default class Option extends Phaser.GameObjects.Container {

    /**
     * Construye una nueva opción
     * @param {Phaser.Scene} scene 
     * @param {string} text - texto que contiene la opción
     * @param {number} maxS - máxima puntuación de la barra de instinto asesino con la que aparece la opción
     * @param {number} minS - minima puntuación de la barra de instinto asesino con la que aparece la opción
     * @param {number} score - puntuación que se le suma a la barra de instinto asesino al seleccionar la opción
     * @param {number} id_obj - id del nodo objetivo
     * @param {number} x - posición en el eje x
     * @param {number} y - posición en el eje y
     */
    constructor(scene, text, maxS, minS, score, id_obj, x, y) {
        let textoOption = new Phaser.GameObjects.Text(scene, 0, 0, text);
        textoOption.setOrigin(0.5, 0.5);
        let sprite = scene.add.sprite(0, 0, 'cuadroOpcion');

        super(scene, x, y, [sprite, textoOption]);

        this._textoOption = textoOption;
        this._sprite = sprite;
        this._sprite.setScale(0.3, 0.1);
        this._maxScore = maxS;
        this._minScore = minS;
        this._score = score;
        this._id_obj = id_obj;

        this._sprite.setInteractive();
        this._sprite.on("pointerover", this.hoverIn, this);
        this._sprite.on("pointerout", this.hoverOut, this);
        this._sprite.on("pointerdown", this.clickOption, this);

        this.scene.add.existing(this);
    }

    /**
     * Este metodo se encarga de emitir eventos cuando se elige una opción
     */
    clickOption() {
        this.scene.events.emit('optionClicked', this._id_obj);
        this.scene.events.emit('changePsychoBar', this._score);

    }

    /**
     * Este método le da la información a la opción sobre el dialogo a representar
     * @param {object} optionNode 
     */
    setOption(optionNode) {
        this._textoOption.setText(optionNode.text);
        this._text = optionNode.text;
        this._minS = optionNode.minScore;
        this._maxS = optionNode.maxScore;
        this._score = optionNode.score;
        this._id_obj = optionNode.id_obj;
    }

    /**
     * Cambia el sprite del cuadro de dialogo de la opcion cuando nos ponemos encima de ella
     */
    hoverIn() {
        this._sprite.setTexture('selecOpcion');
    }
    /**
     * Cambia el sprite del cuadro de dialogo de la opcion cuando salimos de encima de ella
     */
    hoverOut() {
        this._sprite.setTexture('cuadroOpcion');
    }

    getMinScore() {
        return this._minS;
    }

    getMaxScore() {
        return this._maxS;
    }
}