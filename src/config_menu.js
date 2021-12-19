import Button from "./buttons/button.js";

/**
 * Representa el menú de configuración del juego
 */
export default class ConfigMenu extends Phaser.GameObjects.Container{


    constructor(scene, x, y){
        super(scene, x ,y);
        this.padding = 10;
        this.sprite = this.scene.add.sprite(0,0,'F');
        this.add(this.sprite);
        this.initVolumeConfig();
        this.initTextVelocity();
        this.initExit();
        
        
        this.scene.add.existing(this);
    }

    initVolumeConfig(){
        this.volumeContainer = this.scene.add.container(this.width+this.padding, this.height/2);
        this.add(this.volumeContainer);
        this.volumeContainer.upSelector = new Button(this.scene, 0,0,'M','+',0.5,0.5);
        this.volumeContainer.add(this.volumeContainer.upSelector);
        this.volumeContainer.upSelector.sprite.on('pointerdown', () => {
            this.scene.game.sound.volume+=0.1; 
        });

        this.volumeContainer.downSelector = new Button(this.scene, 0,30,'M','-',0.5,0.5);
        this.volumeContainer.add(this.volumeContainer.downSelector);
        this.volumeContainer.downSelector.sprite.on('pointerdown', () => {
            this.scene.game.sound.volume-=0.1; 
        });
        
    }
    initTextVelocity(){};
    initExit(){

        this.esc = this.scene.input.keyboard.addKey("ESC");
        this.esc.on('down', () => {
            this.setActive(false);
            this.setVisible(false);
        })
    };
    show(){
        console.log("funciono");
        this.setVisible(true);
        this.setActive(true);
    }
}