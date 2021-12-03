/**
 * Respresenta las pastillas que bajan la barra de instinto asesino
 */
export default class Pill extends Phaser.GameObjects.Container{

    /**
     * Construye un nuevo objecto Pill
     * @param {Phaser.scene} scene 
     * @param {number} x - posición en el eje x
     * @param {number} y - posición en el eje y
     */
    constructor(scene, x, y){
        
        super(scene,x,y);
        this._sprite = scene.add.sprite(0, 10, 'pastilla')
        this._sprite.setScale(0.12, 0.12);
        this.add(this._sprite);
        this.scene.add.existing(this);
        this._sprite.setInteractive();

        this._amount = 3;

        this._text = scene.add.text(50,50,this._amount);
        this._text.setFontSize(25);
        this._text.setFontStyle('bold');
        this.add(this._text);

        this._bar = this.scene.psychoBar;

        this._sprite.on('pointerdown', this.takePill, this);
        this._space = this.scene.input.keyboard.addKey('SPACE');
        this._space.on('down', this.takePill, this);
    }

    /**
     * Método que se llama al tomarse una pastilla 
     */
    takePill(){
        if(this._amount>0){
            this._bar.pillEffect();
            this._amount--;
            this._text.text = this._amount;
        }else{
            this._sprite.off("pointerdown");
            this._space.off('down');
        }
    }
    
}