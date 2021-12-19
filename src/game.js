import Boot from './scenes/boot.js';
import Scene from './scenes/scene.js';
import Menu from './scenes/menu.js';
import DeathScene from './scenes/death_scene.js';
import MatchScene from './scenes/match_scene.js';
import PauseMenu from './scenes/pause_menu.js';


let config = {
    type: Phaser.CANVAS,
    canvas: document.getElementById("juego"),
    width: 1280,
    height: 720,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    pixelArt: true,
    scene: [Boot, Menu, Scene, DeathScene, MatchScene, PauseMenu]
};

new Phaser.Game(config);