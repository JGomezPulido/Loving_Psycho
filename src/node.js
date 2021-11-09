import Option from "./option.js"

/**
 * Represents a node of the dialog tree
 */
export default class Node{ 

    /**
     * Creates a new node.
     * @param {int} id - id of the node.
     * @param {int} id_obj - id of the next node, -1 if terminal node, -2 if the node has options.
     * @param {string[]} dialogs - array with the texts of the node's dialogs.
     * @param {Option} options - array with the options, null if the node has no options.
     */
    constructor(node){
        this.dialogs= node.text;
        this.id= node.id;
        this.id_obj = node.obj_id;
        this.options  = null;
        if(this.id_obj === -2){
            this.options = [];
            node.options.forEach(el => {
                let op = new Option(scene, el.text, el.maxS, el.minS, el.score, id_obj = el.id_obj, x = x, y = y);
                this.options.push(op);
            });
        }
    }
}