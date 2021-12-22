/**
 * Representa la barra de instinto asesino
 */
export default class PsychoBar extends Phaser.GameObjects.Sprite {
    /**
     * Construye un nuevo objeto PsychoBar
     * @param {Phaser.Scene} scene 
     * @param {number} x Posición en el eje x
     * @param {number} y Posición en el eje y
     */
    constructor(scene, x, y) {
        super(scene, x, y, 'barraPsycho');
        this.setOrigin(0.5, 1);
        this._scaleY = 0;
        this._score = 0;
        this._detune = 0;
        this.scene.add.existing(this);
        this._rect = this.scene.add.rectangle(x, y, this.width, this.height, 0, 0);
        this._rect.setOrigin(0.5, 1);
        this._rect.setStrokeStyle(2, 0xFF0000);

        this.pasiveFill = false;
        this.pasiveIncr = 0.05;
        this._pasiveFillDelay = 5000;
        this.pasiveFillCont = 0;


        this.scene.events.on('changePsychoBar', this.changePsychoBar, this);
        this.scene.events.on('writtenText', this.prematureFillBar, this);
        //this.scene.events.on('dialogBoxClicked', this.fullBar, this);
        this._tween = this.scene.tweens.add({
            targets: []
        });

        this.on("destroy", () => { //esto si
            console.log("psycho bar on destroy");
            this.scene.events.off('changePsychoBar');
            this.scene.events.off('writtenText');
        });

    }

    /**
     * Cambia el valor de la barra de instinto asesino
     * @param {number} n cantidad a añadir a la barra
     */
    changePsychoBar(n) {
        console.log(n);
        this._score += n;

        if (this._score >= 100)
            this._score = 100;
        else if (this._score < 0)
            this._score = 0;

        this._tween.stop();
        this._tween = this.scene.tweens.add({
            targets: [this],
            scaleY: this._score / 100,
            duration: 1000,
            ease: 'Linear:',
            yoyo: false,
            repeat: 0
        });
        this._tween.once('complete', () => {
            this.fullBar();
        });
        this._detune = -5 * this._score;
        this.scene.events.emit('detuneMusic', this._detune);

        this.scene.events.emit('changeBlood');

    }

    /**
     * Método que comprueba si la barra ha llegado al tope y lanza el final malo
     */
    fullBar() {
        if (this._score >= 100) {
            this.scene.events.emit('badEnding');
        }
    }

    /**
     * Método que reduce el valor de la barra al usar una pastilla
     */
    pillEffect() {
        this._score /= 2;

        this._tween.stop();
        this._tween = this.scene.tweens.add({
            targets: [this],
            scaleY: this._score / 100,
            duration: 3000,
            ease: 'Expo.Out',
            yoyo: false,
            repeat: 0
        });
        this._detune = -5 * this._score;
        this.scene.events.emit('detuneMusic', this._detune);
        this.scene.events.emit('changeBlood');
    }

    /**
     * Método que cancela la animación de llenado de la barra y lo pone a la altura correspondiente
     */
    prematureFillBar() {
        this._tween.stop();
        this._scaleY = this._score / 100;
        this.fullBar();
    }

    /**
     * Devuelve el valor de la barra
     * @returns {number} 
     */
    getScore() {
        return this._score;
    }

    /**
     * Método que activa y desactiva la subida pasiva de la barra
     * @param {boolean} pasFill 
     */
    setPasiveFill(pasFill) {
        this.pasiveFill = pasFill;
    }

    /**
     * Método que restea el contador para que se inicie
     */
    resetPasiveFillCont() {
        this.pasiveFillCont = 0;
    }

    preUpdate(t, dt) {
        if (this.pasiveFill) {
            if (this.pasiveFillCont < this._pasiveFillDelay) {
                this.pasiveFillCont += dt;
            } else {
                this._score += dt / 1000;
                this.scaleY = this._score / 100;
                this.fullBar();
            }
            this.scene.updateOptions();
        }

    }
}