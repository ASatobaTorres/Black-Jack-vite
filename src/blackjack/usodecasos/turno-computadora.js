import {crearCartaHtml, pedirCarta, valorCarta} from './'


/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora ncesista para gannar
 * @param {HTMLElement} puntosMinimos elemnto HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemnto HTML para mostrar los puntosde la computadora
 * @param {Array <String>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if ( !puntosMinimos ) throw new Error ('Puntos Minimos son necesarios');
    if ( !puntosHTML ) throw new Error ('Argumentos puntosHTML es necesario');
    // if ( !deck ) throw new Error ('deck es necesario');

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        
        const imgCarta = crearCartaHtml (carta);
        
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
