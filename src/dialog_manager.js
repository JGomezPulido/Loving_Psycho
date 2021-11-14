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
        console.log(this.tree);

        this.scene.events.on('optionClicked', this.changeNode, this)
        this.scene.events.on('dialogBoxClicked', this.changeNode, this)       
    }

    changeNode(id_obj){
        console.log(this.tree);
        if(id_obj === -1){
            //end
        }
        else{
            let i=0;
            while(i<this.tree.length && this.tree[i].id !== id_obj){i++}
            this.actNode = this.tree[i];
        }
    }

    /**
     * Shows current dialog
     */
    showCurrent(){
        this.scene.events.emit('showDialog', this.actNode);
    }

    getActualNode(){
        return this.actNode;
    }

    isOption(){
        return this.actNode.id_obj === -2;
    }
    

}