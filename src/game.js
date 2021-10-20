import BaseScene from "./scene.js";

new Phaser.Game({
    type: Phaser.CANVAS,
    canvas: document.getElementById("juego"),
    width: 800,
    height: 400,
    scene: [BaseScene]
});

document.getElementById("juego").focus();