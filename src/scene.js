import DialogBox from "./dialog_box.js";
import Node from "./node.js";
import DialogManager from "./dialog_manager.js";
import Pill from "./pill.js";
import PsychoBar from "./psycho_bar.js";
import Option from "./option.js";
import Girl from "./girl.js";
import Background from "./background.js";
import ConfigMenu from "./config_menu.js";

/**
 * Representa la escena principal del juego
 */
export default class Scene extends Phaser.Scene {

  
    constructor() {
      super({ key: 'Scene' });
    }

    init(datos){
      this.treeJson = datos.cita;
      this.dificil = datos.dificultad;
    }

    create(){

      this._canvasW = document.getElementById("juego").width;
      this._canvasH = document.getElementById("juego").height;

      //Obtenemos el árbol de nodos
      this.tree = new Node(this.treeJson[0],this);
      
      //Creamos los objetos del juego
      this.dialogManager = new DialogManager(this.tree, this.treeJson, this);
      this.background = new Background(this,this._canvasW/2, this._canvasH/2, 'motel');
      this.girl = new Girl(this, this._canvasW / 2, this._canvasH / 2, this._canvasH);
      this.tween = this.tweens.add({targets: [] })
      this.psychoBar = new PsychoBar(this, 125, 500, this.dificil);    
      this.dialoge = new DialogBox(this, this._canvasW / 2, this._canvasH, 0.5, 0.5, true, this.dialogManager);
      this.dialogeOption = new DialogBox(this, this._canvasW / 2, this._canvasH / 2 + 120, 0.55, 0.2, false, this.dialogManager);
      this.pills = new Pill(this, 125, 500);
      this.intiOptions()
      this.initBlood();
      //this.configMenu = new ConfigMenu(this, this._canvasW/2, this._canvasH/2);
      this.jazzSound = this.sound.add('jazz');
      this.jazzSound.play();
      this.jazzSound.setLoop(true);

      this.esc = this.input.keyboard.addKey("ESC");

      //Suscripción a eventos
      this.events.on('badEnding', this.terminalScene, this);
      this.events.on("optionsStart", this.optionsStart, this);
      this.events.on("optionClicked", this.optionClicked, this);
      this.events.on('changeBlood', this.changeBlood, this);
      this.esc.on('down', this.showMenu, this);
    }

    /**
     * Método que cambia a la escena de muerte
     */
    terminalScene(){
      this.jazzSound.stop();
      this.scene.start('deathScene');
    }

    /**
     * Método que cambia el background de sangre de acuerdo al valor de la barra de instinto asesino
     */
    changeBlood(){
      if (this.psychoBar.getScore() <= 15){
        this.alpha = 0;
      }
      else{
        this.alpha = this.psychoBar.getScore()/100;
      }
      this.tween.stop();
      this.tween = this.tweens.add({
        targets: this.blood,
        alpha: { value: this.alpha, duration: 1000,},
        yoyo: false
        });
      
    }

    /**
     * Métoodo que crea los 4 objetos Option y los mete a un grupo
     */
    intiOptions(){

      let optionsXOffset = 50;
      let rightOptionsX = 3*this._canvasW/4-optionsXOffset;
      let upOptionsY=this._canvasH/2+250;
      let leftOptoinsX = this._canvasW/4+optionsXOffset;
      let downOptionsY=this._canvasH/2+300;

      this.optionsGroup = this.add.group();
      this.op1 = new Option(this, "", 0, 100, 20, 0, leftOptoinsX, upOptionsY);
      this.op2 = new Option(this, "", 0, 100, 20, 0, rightOptionsX, downOptionsY);
      this.op3 = new Option(this, "", 0, 100, 20, 0, rightOptionsX, upOptionsY);
      this.op4 = new Option(this, "", 0, 100, 20, 0, leftOptoinsX, downOptionsY);
      this.optionsGroup.addMultiple([this.op1,this.op2,this.op3,this.op4]);
      this.optionsGroup.children.iterate(ch =>{
        this.optionsGroup.killAndHide(ch);
      });

    }

    /**
     * Método que crea los backgrounds del juego
     */
    initBlood(){
      this.blood = new Background(this,this._canvasW/2, this._canvasH/2, 'sangre');
      this.blood.setAlpha(0);
    }

    /**
     * Método que desactiva las opciones y pasa al nodo objetivo al pulsar una opción
     * También avisa a la barra de instinto asesino de que se deje de llenar pasivamente
     * @param {number} id_obj - id del nodo objetivo
     */
    optionClicked(id_obj){
        this.psychoBar.setPasiveFill(false);

        this.dialogeOption.setActive(false);
        this.dialogeOption.setVisible(false);
        this.dialoge.reset();
        this.dialoge.setActive(true);
        this.dialoge.setVisible(true);      
        this.optionsGroup.children.iterate(ch => {
          this.optionsGroup.killAndHide(ch);
        });
        this.changeBlood();
      }

      /**
       * Método que reorganiza los nodos aleatoriamente y los habilita si cumplen los requisitos de puntuación de la barra de instinto asesino
       * * También avisa a la barra de instinto asesino de que se empiece a llenar pasivamente
       * @param {Node} node 
       */
      optionsStart(node){
        if (this.dificil){
          this.psychoBar.setPasiveFill(true);
          this.psychoBar.resetPasiveFillCont();
        }
          

        this.optionsGroup.shuffle();
        let i = 0;
        while(i < node.options.length){
          if(node.options[i].minScore <= this.psychoBar._score && node.options[i].maxScore >= this.psychoBar._score){
            let option = this.optionsGroup.getFirst();
            option.setActive(true);
            option.setVisible(true);
            option.setOption(node.options[i]);
            
          }
          i++;
        } 
      }

      showMenu(){
        console.log(this.scene.isPaused("Scene"));
        this.scene.run("config");
        //this.scene.moveAbove("config");
        this.scene.pause("Scene");
        this.scene.setVisible(true, "config");
        
         
      }
}
