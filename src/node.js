import Dialog from "./dialog.js"

export default class Node{ 
/**
 * Creates a new empty node
 */
    constructor(){
        this.dialog=[];
        this.sons=[];
        this.min_score=0;
        this.max_score=0;
    }
}