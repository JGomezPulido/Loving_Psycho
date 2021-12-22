import Node from "./node.js";

/**
 * Maneja la lógica de los dialogos, es un Container para que pueda reaccionar al evento onDestroy para desuscribirse de eventos.
 */
export default class DialogManager extends Phaser.GameObjects.Container {

    /**
     * Construye un nuevo objeto DialogManager
     * @param {Node} node 
     * @param {Node[]} tree 
     * @param {Phaser.Scene} scene 
     */
    constructor(node, tree, scene) {
        //inicializaciones
        super(scene, 0, 0);
        this._actNode = node;
        this._tree = tree;
        this.scene.add.existing(this);

        //eventos
        this.scene.events.on('optionClicked', this.changeNode, this);
        this.scene.events.on('dialogBoxClicked', this.changeNode, this);

        this.on('destroy', () => {
            this.scene.events.off('optionClicked');
            this.scene.events.off('dialogBoxClicked');
        })
    }

    /**
     * Busca en el árbol de nodos y cambia al nodo con el id: id_obj
     * @param {number} id_obj - id del nodo objetivo
     */
    changeNode(id_obj) {
        if (id_obj === -1) { //end
            this.scene.scene.start("matchScene", {
                "match": this.getActualNode().match
            });
        } else {
            let i = 0;
            while (i < this._tree.length && this._tree[i].id !== id_obj) {
                i++
            }
            this._actNode = this._tree[i];
            this.scene.events.emit('changePsychoBar', this.getActualNode().score);
            this.scene.events.emit('changeExpresion', this.getActualNode().expresion);
            this.scene.events.emit('changeDialogBox', this.getActualNode().speaker);
            let location = this.getActualNode().location;
            if (location !== null)
                this.scene.events.emit('changeLocation', location);
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