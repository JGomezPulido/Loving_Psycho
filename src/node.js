import Option from "./option.js"

/**
 * Represents a node of the dialog tree
 */
export default class Node{ 

    /**
     * Creates a new node.
     * @param {Nodo} node node from dialog tree
     */
    constructor(node, scene){
        this.dialogs= node.dialogs;
        this.id= node.id;
        this.id_obj = node.id_obj;
        this.score = node.score;
        this.expresion = node.expresion;
        this.escena = node.escena;
        this.options  = null;
        this.scene = scene;
        if(this.id_obj === -2){
            this.options = [];
            node.options.forEach(el => {
                let op = new Option(this.scene, el.text, el.maxS, el.minS, el.score, id_obj = el.id_obj, x = x, y = y);
                this.options.push(op);
            });
        }
    }
}