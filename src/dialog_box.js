export default class DialogBox extends Phaser.GameObjects.Container{
    constructor(scene, x, y, iniText){
        super(scene, x, y);
        
        //Creación del cuadro de diálogo
        this.dialogeBackground = new Phaser.GameObjects.Sprite(this.scene, 0, 0, 'cuadroDialogo');
        const DIA_SCALE = 0.5;
        this.dialogeBackground.scale *= DIA_SCALE;
        let h = (DIA_SCALE * this.dialogeBackground.height);
        let w = (DIA_SCALE * this.dialogeBackground.width);
        this.dialogeBackground.setOrigin(0.5, 0.5);
        
        //Creación del texto
        const SPACING = 50;
        this.text = this.scene.add.text(this.dialogeBackground.x - w / 2 + SPACING, this.dialogeBackground.y - h / 2 + SPACING / 2, iniText);
        this.text.setWordWrapWidth(w - SPACING * 2);

        //Creación del container
        this.add(this.dialogeBackground);
        this.add(this.text);
        this.setPosition(this.x, this.y - h / 2);  
        this.scene.add.existing(this);    
        
        //Convierto el cuadro en un botón para gestionar el texto
        this.dialogeBackground.setInteractive();
        this.dialogeBackground.on('pointerdown', pointer => {
            if (!this.textoEscrito && this.cont < this.parrafo.length){
              this.text.setText(this.parrafo);
              this.textoEscrito = true;
            }
            else{
              this.cont = 0;
              this.contParrafos++;
              this.parrafo = this.arrayParrafos[this.contParrafos % this.arrayParrafos.length];
              this.actParrafo = '';
              this.delay = 0;
              this.textoEscrito = false;
            }
          });

          this.arrayParrafos = ['Durante su mandato al frente del Ejército y de la Jefatura del Estado, especialmente durante la guerra civil y los primeros años del régimen, se produjo una fuerte represión, en particular contra los partidarios del bando republicano que fue derrotado en la contienda, a la que se sumó el exilio de centenares de miles de españoles al extranjero. La cifra total de víctimas mortales varía en torno a varios centenares de miles de personas, que perecieron en su mayoría en campos de concentración, ejecuciones extrajudiciales o en prisión.',
          'Bajo la dirección de Hitler, las fuerzas alemanas y sus aliados ocuparon en 1941 la mayor parte de Europa y África del Norte. Esas conquistas territoriales decrecieron paulatinamente después de la batalla de Stalingrado, hasta 1945, cuando los ejércitos aliados derrotaron al ejército alemán. Por motivos raciales, Hitler causó la muerte de diecisiete millones de personas,6​ incluyendo una cifra en torno a seis millones de judíos7​ y entre medio y millón y medio de gitanos, en lo que posteriormente se denominó «Holocausto».',
          'Benito Amilcare Andrea Mussolini (Predappio, 29 de julio de 1883 - Giulino, 28 de abril de 1945) fue un político, militar y dictador italiano, presidente del Consejo de Ministros Reales de Italia desde 1922 hasta 1943 y Duce —guía— de la República Social Italiana desde 1943 hasta 1945. Llevó al poder al Partido Nacional Fascista y posteriormente al Partido Fascista Republicano y estableció un régimen totalitario durante el período conocido como fascismo italiano, bajo el beneplácito del rey Víctor Manuel III, hasta su colapso en la Segunda Guerra Mundial.'];
          this.contParrafos = 0;
          this.parrafo = this.arrayParrafos[this.contParrafos];
          this.actParrafo = '';
          this.cont = 0;
          this.delay = 0;
          this.textoEscrito = false;
    }



    preUpdate(t, dt) {
        if (!this.textoEscrito){
            if (this.delay <= 0){
              if (this.cont < this.parrafo.length){
                this.actParrafo += this.parrafo[this.cont];
                this.text.setText(this.actParrafo);
                this.cont++;
                this.delay = 0.005;
            }
            }    
            else this.delay -= dt;
          }
      }
 
}

