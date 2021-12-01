/**
 * Representa un cuadro de diálogo.
 */
export default class DialogBox extends Phaser.GameObjects.Container{
    constructor(scene, x, y, w, h, inter, dialog_manager){
        super(scene, x, y);
        
        this.scene.events.on('optionsStart', this.showOptionDialog, this);
        this.initContainer(inter, w, h);
           
        
        //Variables para gestionar la escritura del diálogo
        this._parrafo =  dialog_manager.getActualNode().dialogs;
        this._actParrafo = '';
        this._cont = 0;
        this._delay = 0;
        this._textoEscrito = false;
        this._textSpeed = 30; 

        //Convierto el cuadro en un botón para gestionar el texto
        this._dialogeBackground.setInteractive();
        this._dialogeBackground.on('pointerdown', pointer => {
            if (!this._textoEscrito){              
              this._text.setText(this._parrafo);
              this._textoEscrito = true;
              this.scene.events.emit('writtenText');             
            }
            else if (inter){
              this.reset();
              this.scene.events.emit('dialogBoxClicked', dialog_manager.getActualNode().id_obj);             
              if (dialog_manager.isOption()){              
                this.scene.events.emit('optionsStart', dialog_manager.getActualNode());
              }
              else{
                this._parrafo = dialog_manager.getActualNode().dialogs;
              }
            }
          });
           
          
          this.dm = dialog_manager;
          this.b = inter;
    }

    createDialogBox(w, h){
      let dialogeBackground = new Phaser.GameObjects.Sprite(this.scene, 0, -50, 'cuadroDialogo');
      dialogeBackground.setScale(w, h);
      dialogeBackground.setOrigin(0.5, 0.5);
      return dialogeBackground
    }

    createText(){
      let SPACING = 45;
      let x = this._dialogeBackground.x - this._sizeW / 2 + SPACING;
      let y = this._dialogeBackground.y - this._sizeH / 2 + SPACING / 2;
      let text = new Phaser.GameObjects.Text(this.scene, x, y, '');
      text.setWordWrapWidth(this._sizeW - SPACING * 2);
      text.setFontStyle('bold');
      text.setFontSize(28);
      text.setColor('#000');
      return text;
    }

    initContainer(inter, w, h){
      //Creación del cuadro de diálogo
      this._dialogeBackground = this.createDialogBox(w,h);

      //Cálculo del size.
      this._sizeH = (h * this._dialogeBackground.height);
      this._sizeW = (w * this._dialogeBackground.width);
      
      //Creación del texto
      this._text = this.createText();

      //Creación del container
      this.add(this._dialogeBackground);
      this.add(this._text);
      if (inter)
        this.setPosition(this.x, this.y - this._sizeH / 2);           
      else{
        let offsetY = 100;
        this.setPosition(this.x, this.y + offsetY);
        this.setVisible(false);
        this.setActive(false);
      }       

      this.scene.add.existing(this); 
    }

    showOptionDialog(nextDialog){
      if (this.b){
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
      this._parrafo = this.dm.getActualNode().dialogs;
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

