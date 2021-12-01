import DialogBox from "./dialog_box.js";
import Node from "./node.js";
import DialogManager from "./dialog_manager.js";
import Pill from "./pill.js";
import PsychoBar from "./psycho_bar.js";
import Option from "./option.js";
import Girl from "./girl.js";
import Background from "./background.js";

 export default class Scene extends Phaser.Scene {

    constructor() {
      super({ key: 'Scene' });
      
    }

    create(){

        // this.loving_p=this.make.image({
        //     x:500,y:250,
        
        //     key:'marion',
        //     scale:{
        //         x:0.35,
        //         y:0.35
        //     },
        //     add:true
        // });
        this.events.on('badEnding', this.terminalScene, this);
        // this.text=this.add.text(200,0,"A partir de aqui, el jugador elegiria su cita y empezaria a jugar");
        let canvasW = document.getElementById("juego").width;
        let canvasH = document.getElementById("juego").height;
        

        this.treeJson = this.cache.json.get("tree");
        console.log(this.treeJson[0]);
        this.tree = new Node(this.treeJson[0],this);
        console.log(this.tree);
        
        this.background = new Background(this,canvasW/2, canvasH/2);
        this.girl = new Girl(this, canvasW / 2, canvasH / 2, canvasH);
        this.blood = new Background(this,canvasW/2, canvasH/2);
        this.blood.changeBackground('sangre');
        this.blood.setAlpha(0);
        this.tween = this.tweens.add({targets: [] })
        this.psychoBar = new PsychoBar(this, 125, 500);
        this.dialogManager = new DialogManager(this.tree, this.treeJson, this);

       
        // this.psychoBar.events.on('badEnding', this.terminalScene, this);
        this.dialoge = new DialogBox(this, canvasW / 2, canvasH, 0.5, 0.5, true, this.dialogManager);
        // this.dialoge.setVisible(false);
        let optionsXOffset = 50;
        let rightOptionsX = 3*canvasW/4-optionsXOffset;
        let upOptionsY=canvasH/2+250;
        let leftOptoinsX = canvasW/4+optionsXOffset;
        let downOptionsY=canvasH/2+300;
        this.dialogeOption = new DialogBox(this, canvasW / 2, canvasH / 2 +120, 0.55, 0.2, false, this.dialogManager);
        this.optionsGroup = this.add.group();
        this.op1 = new Option(this, "hola", 0, 100, 20, 0, canvasW/4+50, upOptionsY);
        this.op2 = new Option(this, "adios", 0, 100, 20, 0, rightOptionsX, downOptionsY);
        this.op3 = new Option(this, "a", 0, 100, 20, 0, rightOptionsX, upOptionsY);
        this.op4 = new Option(this, "o", 0, 100, 20, 0, leftOptoinsX, downOptionsY);
        this.optionsGroup.addMultiple([this.op1,this.op2,this.op3,this.op4]);
        this.optionsGroup.children.iterate(ch =>{
          this.optionsGroup.killAndHide(ch);
        });
        this.pills = new Pill(this, 125, 500);
        this.events.on("optionsStart", (node) => {
          this.optionsGroup.shuffle();
          let i  =0;
          while(i < node.options.length){
            if(node.options[i].minScore <= this.psychoBar._score && node.options[i].maxScore >= this.psychoBar._score){
              let option = this.optionsGroup.getFirst();
              option.setActive(true);
              option.setVisible(true);
              option.setOption(node.options[i]);
              
            }
            i++;
            
          }
          console.log(this.psychoBar._score);
        });
        this.events.on("optionClicked", (id_obj)  => {
          this.dialogeOption.setActive(false);
          this.dialogeOption.setVisible(false);
          this.dialoge.reset();
          this.dialoge.setActive(true);
          this.dialoge.setVisible(true);      
          this.optionsGroup.children.iterate(ch => {
            this.optionsGroup.killAndHide(ch);
          })
        });
        
        this.changeBlood();
        this.events.on('changeBlood', this.changeBlood, this);
    }

    terminalScene(){
      this.scene.start('deathScene');
    }

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
      
      console.log(this.alpha)
    }
  }