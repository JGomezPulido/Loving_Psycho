import Star from './star.js';
/**
 * Clase que representa el jugador del juego. El jugador se mueve por el mundo usando los cursores.
 * También almacena la puntuación o número de estrellas que ha recogido hasta el momento.
 */
export default class Button extends Phaser.GameObjects.Sprite {
  
  /**
   * Constructor del jugador
   * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
   */
  constructor(scene, x, y) {
    super(scene, x, y, 'button');
    this.scene.add.existing(this).setInteractive();
    this.on("pointerdown",(pointer,currentlyOver)=>{
      console.log(typeof(currentlyOver));
        if(pointer.leftButtonDown()){
            currentlyOver.forEach(gO=>{
              console.log(gO);
              if(gO===this){this.scene.spawn()}
            })
        }
    });
  }
  

  /**
   * Métodos preUpdate de Phaser. En este caso solo se encarga del movimiento del jugador.
   * Como se puede ver, no se tratan las colisiones con las estrellas, ya que estas colisiones 
   * ya son gestionadas por la estrella (no gestionar las colisiones dos veces)
   * @override
   */
  preUpdate() {
    super.preUpdate();
    
  }
  
}
