import Boot from './boot.js';
import Scene from './scene.js';
import Menu from './menu.js';
import DeathScene from './death_scene.js';
import MatchScene from './match_scene.js';
import ConfigMenu from './config_menu.js';


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
    scene: [Boot, Menu, Scene, DeathScene, MatchScene, ConfigMenu]
};

new Phaser.Game(config);