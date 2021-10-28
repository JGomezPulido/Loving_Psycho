import Boot from './boot.js';
import TempEnd from './end.js';
import Menu from './menu.js';

let config = {
    type: Phaser.CANVAS,
    canvas: document.getElementById("juego"),
    width:  1000,
    height: 500,
    scale: {
        // mode: Phaser.Scale.FIT,  
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    pixelArt: true,
    scene: [Boot, Menu,TempEnd]
};

new Phaser.Game(config);