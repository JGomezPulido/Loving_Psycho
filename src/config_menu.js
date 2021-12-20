import Button from "./buttons/button.js";

/**
 * Representa el menú de configuración del juego
 */
export default class ConfigMenu extends Phaser.GameObjects.Container{

    /**
     * 
     * @param {Phaser.Scene} scene 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(scene, x, y, config){
        super(scene, x ,y);

        this.sprite = this.scene.add.sprite(0,0,'pauseMenu');
        this._textVelocity = config.textVelocity;

        this.add(this.sprite);
        this.initVolumeConfig();
        this.initTextVelocity();
        this.initExit();
        
        this.scene.add.existing(this);
        this.setActive(false);
        this.setVisible(false);
    }

    initVolumeConfig(){
        this.volumeContainer = this.scene.add.container(0, -190);
        this.add(this.volumeContainer);

        this.volumeContainer.sprite=this.scene.add.sprite(0,0,'boton').setScale(0.75,0.75);
        this.volumeContainer.add(this.volumeContainer.sprite);
        
        this.volumeContainer.upSelector = new Button(this.scene, 70,0,'heartPauseButton','+',0.6,0.6);
        this.volumeContainer.add(this.volumeContainer.upSelector);
        this.volumeContainer.upSelector.sprite.on('pointerdown', () => {
            if(this.scene.game.sound.volume <= 0.99){
                this.scene.game.sound.volume+=0.01;
                this.volumeContainer.text.text = Phaser.Math.RoundTo(this.scene.game.sound.volume * 100,0);
            }
        });

        this.volumeContainer.downSelector = new Button(this.scene, -70,0,'heartPauseButton','-',0.6,0.6);
        this.volumeContainer.add(this.volumeContainer.downSelector);
        this.volumeContainer.downSelector.sprite.on('pointerdown', () => {
            if(this.scene.game.sound.volume >= 0.01){
                this.scene.game.sound.volume-=0.01; 
                this.volumeContainer.text.text = Phaser.Math.RoundTo(this.scene.game.sound.volume * 100,0);
            }
        });

        this.volumeContainer.text = this.scene.add.text(5,0,(Phaser.Math.RoundTo(this.scene.game.sound.volume * 100,0)));
        this.volumeContainer.add(this.volumeContainer.text);
        this.volumeContainer.text.setOrigin(0.5,0.5);

        this.volumeContainer.title = this.scene.add.text(0,50,'Volumen');
        this.volumeContainer.add(this.volumeContainer.title);
        this.volumeContainer.title.setColor('#000').setFontStyle('Bold').setOrigin(0.5,0.5).setFontSize(20);

    }


    initTextVelocity(){
        this.textVelContainer = this.scene.add.container(0, -65);
        this.add(this.textVelContainer);

        this.textVelContainer.sprite=this.scene.add.sprite(0,0,'boton').setScale(0.7,0.7);
        this.textVelContainer.add(this.textVelContainer.sprite);
        
        this.textVelContainer.upSelector = new Button(this.scene, 70,0,'heartPauseButton','+',0.6,0.6);
        this.textVelContainer.add(this.textVelContainer.upSelector);
        this.textVelContainer.upSelector.sprite.on('pointerdown', () => {
            if(this._textVelocity <= 99){
                this._textVelocity+=1;
                this.textVelContainer.text.text = this._textVelocity;
            }
        });

        this.textVelContainer.downSelector = new Button(this.scene, -70,0,'heartPauseButton','-',0.6,0.6);
        this.textVelContainer.add(this.textVelContainer.downSelector);
        this.textVelContainer.downSelector.sprite.on('pointerdown', () => {
            if(this._textVelocity >= 1){
                this._textVelocity-=1; 
                this.textVelContainer.text.text = this._textVelocity;
            }
        });

        this.textVelContainer.text = this.scene.add.text(5,0,this._textVelocity);
        this.textVelContainer.add(this.textVelContainer.text);
        this.textVelContainer.text.setOrigin(0.5,0.5);

        this.textVelContainer.title = this.scene.add.text(0,50,'Velocidad Texto');
        this.textVelContainer.add(this.textVelContainer.title);
        this.textVelContainer.title.setColor('#000').setFontStyle('Bold').setOrigin(0.5,0.5).setFontSize(20);


    };
    initExit(){

        this.esc = this.scene.input.keyboard.addKey("ESC");
        this.esc.on('down', () => {
            this.setActive(false);
            this.setVisible(false);
           
        })
        
        this.exitButton = new Button(this.scene, 0, 150, 'boton', 'Exit', 0.95, 0.95);
        this.add(this.exitButton);

        this.exitButton.sprite.setInteractive()
        this.exitButton.sprite.on('pointerdown', () => {
            this.setActive(false);
            this.setVisible(false);
           
        })
    };

    show(){
        
        this.setVisible(true);
        this.setActive(true);
    }

    getTextVelocity(){
        return this._textVelocity;
    }

    setTextVelocity(vel){
        this._textVelocity = vel;
    }
}