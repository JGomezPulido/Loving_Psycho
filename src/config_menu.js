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

        this._sprite = this.scene.add.sprite(0,0,'pauseMenu');
        this._textVelocity = config.textVelocity;

        this.add(this._sprite);
        this.initVolumeConfig();
        this.initTextVelocity();
        this.initExit();
        
        this.scene.add.existing(this);
        this.setActive(false);
        this.setVisible(false);
    }

    initVolumeConfig(){
        this._volumeContainer = this.scene.add.container(0, -190);
        this.add(this._volumeContainer);

        this._volumeContainer.sprite=this.scene.add.sprite(0,0,'boton').setScale(0.75,0.75);
        this._volumeContainer.add(this._volumeContainer.sprite);
        
        this._volumeUp = false;
        this._volumeContainer.upSelector = new Button(this.scene, 70,0,'heartPauseButton','+',0.6,0.6);
        this._volumeContainer.add(this._volumeContainer.upSelector);
        this._volumeContainer.upSelector.sprite.on('pointerdown', () => {
            this._volumeUp = true;
        });
        this._volumeContainer.upSelector.sprite.on('pointerup', () => {
            this._volumeUp = false;
        });
        this._volumeContainer.upSelector.sprite.on('pointerout', () => {
            this._volumeUp = false;
        });

        this._volumeDown = false;
        this._volumeContainer.downSelector = new Button(this.scene, -70,0,'heartPauseButton','-',0.6,0.6);
        this._volumeContainer.add(this._volumeContainer.downSelector);
        this._volumeContainer.downSelector.sprite.on('pointerdown', () => {
            this._volumeDown = true;
        });
        this._volumeContainer.downSelector.sprite.on('pointerup', () => {
            this._volumeDown = false;
        });
        this._volumeContainer.downSelector.sprite.on('pointerout', () => {
            this._volumeDown = false;
        });

        this._volumeContainer.text = this.scene.add.text(5,0,(Phaser.Math.RoundTo(this.scene.game.sound.volume * 100,0)));
        this._volumeContainer.add(this._volumeContainer.text);
        this._volumeContainer.text.setOrigin(0.5,0.5);

        this._volumeContainer.title = this.scene.add.text(0,50,'Volumen');
        this._volumeContainer.add(this._volumeContainer.title);
        this._volumeContainer.title.setColor('#000').setFontStyle('Bold').setOrigin(0.5,0.5).setFontSize(20);

    }


    initTextVelocity(){
        this._textVelContainer = this.scene.add.container(0, -65);
        this.add(this._textVelContainer);

        this._textVelContainer.sprite=this.scene.add.sprite(0,0,'boton').setScale(0.7,0.7);
        this._textVelContainer.add(this._textVelContainer.sprite);
        
        this._textVelUp = false;
        this._textVelContainer.upSelector = new Button(this.scene, 70,0,'heartPauseButton','+',0.6,0.6);
        this._textVelContainer.add(this._textVelContainer.upSelector);
        this._textVelContainer.upSelector.sprite.on('pointerdown', () => {
            this._textVelUp = true;
        });
        this._textVelContainer.upSelector.sprite.on('pointerup', () => {
            this._textVelUp = false;
        });
        this._textVelContainer.upSelector.sprite.on('pointerout', () => {
            this._textVelUp = false;
        });

        this._textVelDown = false;
        this._textVelContainer.downSelector = new Button(this.scene, -70,0,'heartPauseButton','-',0.6,0.6);
        this._textVelContainer.add(this._textVelContainer.downSelector);
        this._textVelContainer.downSelector.sprite.on('pointerdown', () => {
            this._textVelDown = true;            
        });
        this._textVelContainer.downSelector.sprite.on('pointerup', () => {
            this._textVelDown = false;
        });
        this._textVelContainer.downSelector.sprite.on('pointerout', () => {
            this._textVelDown = false;
        });


        this._textVelContainer.text = this.scene.add.text(5,0,this._textVelocity);
        this._textVelContainer.add(this._textVelContainer.text);
        this._textVelContainer.text.setOrigin(0.5,0.5);

        this._textVelContainer.title = this.scene.add.text(0,50,'Velocidad Texto');
        this._textVelContainer.add(this._textVelContainer.title);
        this._textVelContainer.title.setColor('#000').setFontStyle('Bold').setOrigin(0.5,0.5).setFontSize(20);


    };
    initExit(){

        this._esc = this.scene.input.keyboard.addKey("ESC");
        this._esc.on('down', () => {
            this.setActive(false);
            this.setVisible(false);
           
        })
        
        this._exitButton = new Button(this.scene, 0, 150, 'boton', 'Exit', 0.95, 0.95);
        this.add(this._exitButton);

        this._exitButton.sprite.setInteractive()
        this._exitButton.sprite.on('pointerdown', () => {
            this.setActive(false);
            this.setVisible(false);
           
        })
    };

    show(){
        
        this.setVisible(true);
        this.setActive(true);
    }

    getTextVelocity(){
        return Phaser.Math.RoundTo(this._textVelocity);
    }

    setTextVelocity(vel){
        this._textVelocity = vel;
    }

    preUpdate(t, dt){
        if(this._textVelDown && this._textVelocity >= 1){                    
            this._textVelocity-= 8*(dt/1000); 
            this._textVelContainer.text.text = Phaser.Math.RoundTo(this._textVelocity);  
        }
        if(this._textVelUp && this._textVelocity <= 99){
            this._textVelocity+= 8*(dt/1000);
            this._textVelContainer.text.text = Phaser.Math.RoundTo(this._textVelocity);
        }      
        if(this._volumeDown && this.scene.game.sound.volume >= 0.01){
            this.scene.game.sound.volume-=0.015 * (dt/100); 
            this._volumeContainer.text.text = Phaser.Math.RoundTo(this.scene.game.sound.volume * 100,0);
        }
        if(this._volumeUp && this.scene.game.sound.volume <= 0.99){
            this.scene.game.sound.volume+=0.015 * (dt/100); 
            this._volumeContainer.text.text = Phaser.Math.RoundTo(this.scene.game.sound.volume * 100,0);
        }
        
    }
}