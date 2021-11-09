export default class DialogBoxs extends Phaser.GameObjects.Container{
    constructor(scene, x, y){       
        
        // let self = this; // Para usarlo en active
        // WebFont.load({
        //     google: {
        //         families: [ 'Freckle Face', 'Finger Paint', 'Nosifer', 'Coming Soon' ]
        //     },
        //     active: function () // se llama a esta función cuando está cargada
        //     {
        //         let nuevoTexto = 
        //             self.add.text(16, 0, 
        //                 '', 
        //                 { fontFamily: 'Coming Soon', fontSize: 80, color: '#ffffff' })
        //         nuevoTexto.setShadow(2, 2, "#333333", 2, false, true);
        //     }
            
        // });
        
        
        this.dialogeBackground.scale /= 1.75;
        let h = (this.dialogeBackground.scale * this.dialogeBackground.height);
        let w = (this.dialogeBackground.scale * this.dialogeBackground.width);
        this.dialogeBackground.setOrigin(0.5, 0.5);
        this.dialogeBackground.setInteractive();
    
        let spacing = 50;
        this.text = this.scene.add.text(dialogeBackground.x - w / 2 + spacing, dialogeBackground.y - h / 2 + spacing / 2, 'hola');
        this.text.setWordWrapWidth(w - spacing * 2);

        
        this.add(dialogeBackground);
        this.add(this.text);
        this.scene.add.existing(dialogeContainer);
        this.scene.add.existing(this);
        console.log('hola');
        super(scene, x, y);
        
    }



}