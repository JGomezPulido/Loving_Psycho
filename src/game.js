import Boot from './boot.js';
import Scene from './scene.js';
import Menu from './menu.js';
import DeathScene from './deathScene.js';
import MatchScene from './matchScene.js';

let config = {
    type: Phaser.CANVAS,
    canvas: document.getElementById("juego"),
    width:  1280,
    height: 720,
    scale: {
        mode: Phaser.Scale.FIT,  
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    pixelArt: true,
    scene: [Boot, Menu, Scene, DeathScene, MatchScene]
};

new Phaser.Game(config);