import DialogBox from "./dialog_box.js";

 export default class TempEnd extends Phaser.Scene {

    constructor() {
      super({ key: 'tempend' });
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

        this.dialoge = new DialogBox(this, document.getElementById("juego").height, document.getElementById("juego").width / 2, 'hola');

        console.log(this.cache.json.get("tree"));
    }

      


  }