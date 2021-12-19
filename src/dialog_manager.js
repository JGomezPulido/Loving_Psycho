/**
 * Maneja la lógica de los dialogos
 */
export default class DialogManager {

    /**
     * Construye un nuevo objeto DialogManager
     * @param {Node} node 
     * @param {Node[]} tree 
     * @param {Phaser.Scene} scene 
     */
    constructor(node, tree, scene) {
        this._actNode = node;
        this._scene = scene;
        this._tree = tree;

        // this._scene.events.emit('changePsychoBar', this.getActualNode().score);
        // this._scene.events.emit('changeExpresion', this.getActualNode().expresion);
        this._scene.events.on('optionClicked', this.changeNode, this)
        this._scene.events.on('dialogBoxClicked', this.changeNode, this)

        //parece que aqui no hace falta hacer off
    }

    /**
     * Busca en el árbol de nodos y cambia al nodo con el id: id_obj
     * @param {number} id_obj - id del nodo objetivo
     */
    changeNode(id_obj) {

        if (id_obj === -1) { //end
            this._scene.scene.start("matchScene", {
                "match": this.getActualNode().match
            });
        } else {
            let i = 0;
            while (i < this._tree.length && this._tree[i].id !== id_obj) {
                i++
            }
            this._actNode = this._tree[i];
            //console.log(this.getActualNode());
            this._scene.events.emit('changePsychoBar', this.getActualNode().score);
            this._scene.events.emit('changeExpresion', this.getActualNode().expresion);
            this._scene.events.emit('changeDialogBox', this.getActualNode().speaker);
        }
    }

    /**
     * Devuelve el nodo actual
     * @returns {Node} 
     */
    getActualNode() {
        return this._actNode;
    }

    /**
     * Devuelve si el nodo actual tiene opciones
     * @returns {boolean}
     */
    isOption() {
        return this._actNode.id_obj === -2;
    }


}