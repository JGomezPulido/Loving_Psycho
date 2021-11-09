import DialogBox from "./dialog_box";

/**
 * Manages the dialog logic.
 */
export default class DialogManager {

    constructor(girl, background, node, tree, scene){
        this.actNode = node;
        this.girl = girl;
        this.background = background;
        this.scene = scene;
        this.tree = tree;

        this.scene.events.on('optionClicked', this.changeNode(id_obj), this)

        this.scene.events.on('dialogBoxClicked', this.changeNode(id_obj), this)
    }

    changeNode(id_obj){
        if(id_obj === -1){
            //end
        }
        else{
            let i=0;
            while(i<tree.length && tree[i].id !== id_obj){i++}
            this.actNode = tree[i];
        }
    }

    /**
     * Shows current dialog
     */
    showCurrent(){
        this.scene.events.emit('showDialog', this.actNode.id_obj);
    }

}