import DialogBox from "./dialog_box.js";
import Node from "./node.js";
import DialogManager from "./dialog_manager.js";
import Pill from "./pill.js";
import PsychoBar from "./psycho_bar.js";
import Option from "./option.js";

 export default class Scene extends Phaser.Scene {

    constructor() {
      super({ key: 'Scene' });
    }

    create(){
        this.loving_p=this.make.image({
            x:500,y:250,
            key:'marion',
            scale:{
                x:0.35,
                y:0.35
            },
            add:true
        });

        this.text=this.add.text(200,0,"A partir de aqui, el jugador elegiria su cita y empezaria a jugar");

        

        this.treeJson = this.cache.json.get("tree");
        console.log(this.treeJson[0]);
        this.tree = new Node(this.treeJson[0],this);
        console.log(this.tree);
        this.psychoBar = new PsychoBar(this, 60, 350);
        this.dialogManager = new DialogManager(null, null, this.tree, this.treeJson, this);
        let canvasW = document.getElementById("juego").width;
        let canvasH = document.getElementById("juego").height;
       
        this.dialoge = new DialogBox(this, canvasW / 2, canvasH, 0.5, 0.5, true, this.dialogManager);
        this.dialogeOption = new DialogBox(this, canvasW / 2, canvasH / 2 + 50, 0.55, 0.2, false, this.dialogManager);
        
        this.pills = new Pill(this, 60, 350);
        this.Option = new Option(this, "Musolini mola", 100, 0, 25, 3, 200, 50) ;  
    }

    


  }