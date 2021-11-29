import Option from "./option.js"

/**
 * Representa un nodo del arbol de dialogos
 * @property {string} dialogs - El texto correspondiente al diálogo principal del nodo.
 * @property {number} id - La id del nodo en el árbol de diálogos.
 * @property {number} id_obj - La id del nodo siguiente, -1 si el nodo es terminal, -2 si tiene opciones.
 * @property {number} score - La puntuación que el diálogo principal del nodo suma a la PsychoBar.
 * @property {string} expression - El nombre de la expresión de Girl durante el diálogo principal del nodo.
 * @property {Option[]} [options] - El array de Opciones asociado al nodo si este tiene opciones.
 * @property {number} [match] - Match con el que terminará la cita si el nodo es terminal.
 */
export default class Node{ 

    /**
     * Construye un nuevo nodo.
     * @param {Nodo} node nodo del arbol de dialogos (JSON).
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
        }else if(this.id_obj == -1){
            this.match = node.match;
        }
    }
}