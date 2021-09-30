# LOVING PSYCHO
[Documento de Brainstorming](https://docs.google.com/document/d/1pQZNYVFjzyh0nKH6pELmN9OpXBWc8SqLfTluE3-CcKY/edit?usp=sharing)  

[Página de gestión (Pivotal Tracker)](https://www.pivotaltracker.com/n/projects/2532848)

*Documento de diseño de videojuego*  
*Nombre de los autores o la empresa*  
*José María Gómez Pulido*  
*Víctor Estremera Herranz*  
*Eduardo de Orellana*  
*Sergio Baña Marchante*  
*E-mails de contacto:*   
*jgomez18@ucm.es*   
*sebana@ucm.es*  
*vestre01@ucm.es*  
*eorellana@ucm.es*    
*Versión 1.1 – 15 de febrero de 2021* 

<table>
  <tr>
    <td colspan = "2"> Resumen </td>
  </tr>
  <tr>
    <td> Generos: </td>
    <td> Modos: </td>
  </tr>
  <tr>
    <td> Cantidades: <br>
         Escenarios <br>
         Objetos <br>
         Armas <br>
         Personajes <br>
         Palabras <br>
   </td>
    <td> Hitos: <br>
         Fecha de propuesta del concepto <br>
         Fechas de pre-producción <br>
         Fechas de producción <br>
         Fecha de lanzamiento <br>
   </td>
  </tr>
</table>

-------------------------------------------

## Descripción

Logotipo y portada del juego |
-----------------------------|
x|

-------------------------------------------

## Tabla de contenidos

1. [Aspectos Generales](#aspectos-generales)  
    1.1 [Relato breve y parcial de una partida típica](#relato-breve)  
  
2. [Jugabilidad](#Jugabilidad)  
    2.1 [Mecánica](#Mecánica)   
         - [Controles](#Controles)  
         - [Cámara](#Cámara)  
    2.2 [Dinámica](#Dinámica)  
    2.3 [Estética](#Estética)  

3. [Menús y modos de juegos](#Menús_y_modos_de_juegos)  
    3.1 [Configuración](#Configuración)  
    3.2 [Interfaz y control](#Interfaz_y_control)  

4. [Contenido](#Contenido)  
    4.1 [Historia](#Historia)  
    4.2 [Niveles](#Niveles)  
    4.3 [Personajes y enemigos](#Personajes_y_enemigos)  
    4.4 [Objetos](#Objetos)  

5. [Referencias](#Referencias)  

--------------------------------------------

## <a name = "aspectos-generales">1. Aspectos Generales</a>

Vista general |
-|
[imagen]|
### <a name = "relato-breve">1.1 Relato breve y parcial de una partida tipica</a>

El jugador elegirá una de las treas citas disponibles, aparecerá una introducción poniendo en contexto la cita para dar comienzo a esta.
A medida que el jugador avanza en la conversación, este elige las distintas opciones de diálogo que cree más convenientes para, al mismo tiempo, 
agradar a su cita y evadir el instinto asesino en forma de madre que duerme en su interior. Durante la cita el jugador también podrá hacer uso de sus pastillas
para reducir su barra de instinto asesino. Dependiendo de lo bien o mal que lo haya hecho, se podrán conseguir tres finales: "Tu cita ha salido con éxito",
"Tu cita ha huido" o "Has matado a tu cita".


------------------------------------

## <a name = "Jugabilidad">2. Jugabilidad</a>

### <a name = "Mecánica">2.1 Mecánica</a>
La mecánica principal del juego es controlar la barra de instinto asesino (0 - 100). Si la barra llega al máximo la conversación acabará y tu instinto asesino en forma de madre matará a tu cita. La barra podrá subir y bajar con las distintas opciones de diálogo:
a medida que avance la cita el jugador tendrá que elegir entre diferentes opciones de diálogo, algunas de ellas aumentarán tu
barra de instinto asesino, otras dejarán la barra prácticamente intacta y otras la reducirán. Así mismo, cuando el jugador tenga 
que elegir entre varias opciones de diálogo la barra de instinto asesino aumentará poco a poco hasta que el jugador se decida por
una de las respuestas. Dependiendo de tu nivel de instinto asesino podrás elegir unas opciones de diálogo u otras, de esta forma, si el jugador deja pasar el tiempo haciendo que la barra de instnto asesino suba gradualmente, podrá ocurrir que despareciesen algunas opciones de diálogo al mismo tiempo que otras apareciesen. No en todos los diálogos el jugador tendrá que elegir entre varias opciones, muchos de estos serán lineales. Los diálogos lineales, tanto de tu cita, como los tuyos, también podrán modificar la barra de instinto asesino (tenidendo en cuenta que estos diálogos lineales dependen de las opciones obtenidas). Durante estos diálogos la barra de instinto asesino no subirá progresivamente si tardas en pasar de un diálogo a otro.

El jugador podrá hacer uso de sus pastillas durante cualquier momento de la cita. El jugador dispondrá de tres pastillas. Si el jugador toma un pastilla su barra de instinto bajará la mitad de la que tenga en ese momento.

En una partida o cita se podrán obtener tres finales distintintos:  
-Derrota: si la barra de instinto asesino llega al máximo y terminas matando a tu cita.  
-Empate: si la cita termina antes de tiempo, ya sea porque tu cita ha huido o porque tu cita se ha aburrido de vuestra conversación.  
-Victoria: si has logrado controlar con éxito tu barra de instinto asesino, al mismo tiempo que has conseguido agradar a tu cita, has triunfado en tu cita.

La lógica del juego se basará en un sistema de rutas depndiendo de las opciones de diálogo que elija el jugador, por lo que habrá varios finales de Victoria, de Empate y de Derrota. De todas formas, puedes perder de forma prematura si tu barra de instinto asesino sube al máximo. 

Durante el juego podrán aparecer escenas en negro con texto que te expliquen lo que pasa, ya sea al principio de la cita como forma de intruducción para que el jugador entienda el contexto, o al final de esta para explicarte los detalles de cámo ha terminado tu cita o qué ha pasado después de esta. 

#### <a name = "Controles">2.1.1 Controles </a>
El juego se controla principalmente con el ratón, haciendo click en las diferentes opciones de diálogo o en el botón de tomarse las pastillas. Adicionalmente, para tomarse las pastillas se podrá pulsar la barra espaciadora.

#### <a name = "Cámara">2.1.2 Cámara </a>

### <a name = "Dinámica">2.2 Dinámica</a>
El objetivo del juego es conseguir triunfar en tu cita, para ello el jugador tendrá que valorar qué respuesta le conviene más en cada momento teniendo en cuenta que, cuanto más sugerentes sean tus conversaciones con tu cita, más mosqueada estará tu madre y por lo tanto, más subirá tu barra de instinto asesino. 

De esta forma se pueden idean estrategias muy variadas. Si tu barra de instinto asesino se encuentra baja tendrás más banda ancha para hablar con tu cita, mientras que si tu barra se encuentra alta deberás medir más tus palabras. También puedes arriesgarte elegir opciones que sabes que no le van a gustar a tu madre para posteriormente tomarte uno de tus pastillas. Así mismo, si has llegado a un punto en el que tu barra de instinto asesino está muy alta y ya se te hace muy difícil remediarlo debido a que las opcines de diálogo favorables ni siquiera aparecen, lo mejor será que intentes asustar a tu cita para poder lograra un empate.

### <a name = "Estética">2.3 Estética</a>

------------------------------------

## <a name = "Menús_y_modos_de_juegos">3. Menús y modos de juegos</a>

### <a name = "Configuración">3.1 Configuración</a>

### <a name = "Interfaz_y_control">3.2 Interfaz y control</a>

-------------------------------------

## <a name = "Contenido">4. Contenido</a>
El juego consistirá en 3 citas independientes, de una duración de 10 minutos, siempre y cuando el jugador llegue hasta el final de la cita. Cada cita tendrá diversas ramas dependiendo de las opciones que elija el jugador.

### <a name = "Historia">4.1 Historia</a>
El jugador encarnará el papel de Norman, el asesino de Psicosis, bajo la premisa de que en él duerme una doble personalidad, siendo su objetivo evitar que su madre se apodere de él completamente, al contrario que pasa en la película.

Las citas estarán basadas en fragmentos de las distintas películas de Hitchcock, pero debido a las características del juego, desviarán de las conversaciones y contexto de las películas originales.

Marion Crane (Psicosis) --> Se recreará la escena en la que Norman invita a comer a Marion, en la primera noche en la que esta llega al al Motel Bates.

Eve Kendall (Con la Muerte en los Talones) --> Se recreará la escena en la que Roger Thornhill conoce por primera vez a Eva Kendall en el buffet del tren. En este caso, Roger Thornhill sería también interpretado por Norman Bates, con todas las características descritas en este GDD.

Tercera cita (¿deberíamos hacer tantas citas?)

### <a name = "Niveles">4.2 Niveles</a>

### <a name = "Personajes_y_enemigos">4.3 Personajes y enemigos</a>

### <a name = "Objetos">4.4 Objetos</a>
Pastillas --> Tendrás 3 en cada cita. Reducirán la barra de instinto asesino a la mitad. Las puedes utilizar en cualquier momento de la cita.

--------------------------------------

## <a name = "Referencias">5. Referencias</a>
 

