import DialogManager from "./dialog_manager.js";

/**
 * Representa un cuadro de diálogo.
 */
export default class DialogBox extends Phaser.GameObjects.Container{
  /**
   * 
   * @param {Phaser.Scene} scene 
   * @param {number} x 
   * @param {number} y 
   * @param {number} width 
   * @param {number} height 
   * @param {number} inter 
   * @param {DialogManager} dialogManager 
   */
    constructor(scene, x, y, width, height, inter, dialogManager){
        super(scene, x, y);
        
        this.scene.events.on('optionsStart', this.showOptionDialog, this);
        this.initContainer(inter, width, height);
        this._dialogManager = dialogManager;
        
        //Variables para gestionar la escritura del diálogo
        this.initProperties();
    }

    /**
     * Crea el sprite del cuadro de dialogo
     * @param {number} w 
     * @param {number} h 
     * @returns {Phser.GameObjects.Sprite} - El sprite del cuadro de dialogo.
     */
    createDialogBox(w, h){
      let dialogeBackground = new Phaser.GameObjects.Sprite(this.scene, 0, -50, 'cuadroDialogo');
      dialogeBackground.setScale(w, h);
      dialogeBackground.setOrigin(0.5, 0.5);
      return dialogeBackground
    }

    /**
     * Crea el texto del cuadro de dialogo
     * @returns {Phaser.GameObjects.Text} - El texto del cuadro de dialogo
     */
    createText(){
      let SPACING = 45;
      let x = this._dialogBackground.x - this._sizeW / 2 + SPACING;
      let y = this._dialogBackground.y - this._sizeH / 2 + SPACING / 2;
      let text = new Phaser.GameObjects.Text(this.scene, x, y, '');
      text.setWordWrapWidth(this._sizeW - SPACING * 2);
      text.setFontStyle('bold');
      text.setFontSize(28);
      text.setColor('#000');
      return text;
    }
    
    /**
     * Añade los componentes al container y coloca el container en su posicion
     */
    createContainer(){
      this.add(this._dialogBackground);
      this.add(this._text);
      if (this._interactive)
        this.setPosition(this.x, this.y - this._sizeH / 2);           
      else{
        let offsetY = 100;
        this.setPosition(this.x, this.y + offsetY);
        this.setVisible(false);
        this.setActive(false);
      }       

    }

    /**
     * Añade el container a la escena y decide si es interactivo o no.
     * @param {boolean} inter - true si el cuadro de dialogo es interactivo, false si no lo es.
     * @param {number} w - ancho del sprite.
     * @param {number} h - alto del sprite.
     */
    initContainer(inter, w, h){
      this._interactive = inter;
      //Creación del cuadro de diálogo
      this._dialogBackground = this.createDialogBox(w,h);

      //Cálculo del size.
      this._sizeH = (h * this._dialogBackground.height);
      this._sizeW = (w * this._dialogBackground.width);
      
      //Creación del texto
      this._text = this.createText();

      //Creación del container
      this.createContainer();

      //Convierto el cuadro en un botón para gestionar el texto
      if(this._interactive){
        this._dialogBackground.setInteractive();
        this._dialogBackground.on('pointerdown', this.writeText, this);
      }

      //Añado el container a la escena
      this.scene.add.existing(this); 
    }

    /**
     * Inicializa las propiedades necesarias para la escritura progresiva del texto.
     */
    initProperties(){
      this._parrafo =  this._dialogManager.getActualNode().dialogs;
      this._actParrafo = '';
      this._cont = 0;
      this._delay = 0;
      this._textoEscrito = false;
      this._textSpeed = 30; 

    }

    writeText(){
      if (!this._textoEscrito){              
        this._text.setText(this._parrafo);
        this._textoEscrito = true;
        this.scene.events.emit('writtenText');             
      }
      else{
        this.reset();
        this.scene.events.emit('dialogBoxClicked', this._dialogManager.getActualNode().id_obj);             
        if (this._dialogManager.isOption()){              
          this.scene.events.emit('optionsStart', this._dialogManager.getActualNode());
        }
        else{
          this._parrafo = this._dialogManager.getActualNode().dialogs;
        }
      }
    }

    showOptionDialog(nextDialog){
      if (this._interactive){
        this.setVisible(false);
        this.setActive(false);
      }       
      else{
        this.reset();
        this._parrafo = nextDialog.dialogs;
        this.setVisible(true);
        this.setActive(true);
      }       
    }

    reset(){
      this._actParrafo = '';
      this._cont = 0;
      this._delay = 0;
      this._textoEscrito = false;
      this._parrafo = this._dialogManager.getActualNode().dialogs;
    }

    preUpdate(t, dt) {
        if (!this._textoEscrito){
            if (this._delay <= 0){
              if (this._cont < this._parrafo.length){
                this._actParrafo += this._parrafo[this._cont];
                this._text.setText(this._actParrafo);             
                this._cont++;
                this._delay = this._textSpeed;
              }
              else{
                this._textoEscrito = true;
              }
            }    
            else this._delay -= dt;
          }
      }
 
}

