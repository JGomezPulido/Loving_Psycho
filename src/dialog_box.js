export default class DialogBox extends Phaser.GameObjects.Container{
    constructor(scene, x, y, w, h, inter, dialog_manager){
        super(scene, x, y);
        
        this.scene.events.on('optionsStart', this.showOptionDialog, this);

        //Creación del cuadro de diálogo
        this.dialogeBackground = new Phaser.GameObjects.Sprite(this.scene, 0, 0, 'cuadroDialogo');
        this.dialogeBackground.setScale(w, h);
        let sizeH = (h * this.dialogeBackground.height);
        let sizeW = (w * this.dialogeBackground.width);
        this.dialogeBackground.setOrigin(0.5, 0.5);
        
        //Creación del texto
        const SPACING = 35;
        this.text = new Phaser.GameObjects.Text(this.scene, this.dialogeBackground.x - sizeW / 2 + SPACING, this.dialogeBackground.y - sizeH / 2 + SPACING / 2, '');
        this.text.setWordWrapWidth(sizeW - SPACING * 2);

        //Creación del container
        this.add(this.dialogeBackground);
        this.add(this.text);
        if (inter)
          this.setPosition(this.x, this.y - sizeH / 2);           
        else{
          this.setPosition(this.x, this.y);
          this.setVisible(false);
          this.setActive(false);
        }          
        this.scene.add.existing(this);    
        
        //Variables para gestionar la escritura del diálogo
        this.parrafo =  dialog_manager.getActualNode().dialogs;
        this.actParrafo = '';
        this.cont = 0;
        this.delay = 0;
        this.textoEscrito = false;
        this.textSpeed = 30; 

        //Convierto el cuadro en un botón para gestionar el texto
        this.dialogeBackground.setInteractive();
        this.dialogeBackground.on('pointerdown', pointer => {
            if (!this.textoEscrito){              
              this.text.setText(this.parrafo);
              this.textoEscrito = true;
              this.scene.events.emit('writtenText');             
            }
            else if (inter){
              this.reset();
              this.scene.events.emit('dialogBoxClicked', dialog_manager.getActualNode().id_obj);             
              if (dialog_manager.isOption()){              
                this.scene.events.emit('optionsStart', dialog_manager.getActualNode().dialogs);
              }
              else{
                this.parrafo = dialog_manager.getActualNode().dialogs;
              }
            }
          });
           
          
          this.dm = dialog_manager;
          this.b = inter;
    }

    showOptionDialog(nextDialog){
      if (this.b){
        this.setVisible(false);
        this.setActive(false);
      }       
      else{
        this.reset();
        this.parrafo = nextDialog;
        this.setVisible(true);
        this.setActive(true);
      }       
    }

    reset(){
      this.actParrafo = '';
      this.cont = 0;
      this.delay = 0;
      this.textoEscrito = false;
    }

    preUpdate(t, dt) {
        if (!this.textoEscrito){
            if (this.delay <= 0){
              if (this.cont < this.parrafo.length){
                this.actParrafo += this.parrafo[this.cont];
                this.text.setText(this.actParrafo);             
                this.cont++;
                this.delay = this.textSpeed;
              }
              else{
                this.textoEscrito = true;
              }
            }    
            else this.delay -= dt;
          }
      }
 
}

