import DialogBox from "./dialog_box.js";
import Node from "./node.js";
import DialogManager from "./dialog_manager.js";
import Pill from "./pill.js";

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
        this.dialogManager = new DialogManager(null, null, this.tree, this.treeJson, this);
        this.dialoge = new DialogBox(this, document.getElementById("juego").height, document.getElementById("juego").width / 2, this.dialogManager);
        this.pills = new Pill(this, 100,200);
    }

      


  }