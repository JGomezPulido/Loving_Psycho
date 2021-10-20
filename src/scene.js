export default class BaseScene extends Phaser.Scene{
    constructor(){
        super({key: 'escena-base'});
    }

    preload(){
        this.load.image("image", "./favicon.png");
        console.log("preloading..");
    }

    create(){
        image = this.add.text(10,10,'Hello World')
        console.log("Scene created");
    }

}