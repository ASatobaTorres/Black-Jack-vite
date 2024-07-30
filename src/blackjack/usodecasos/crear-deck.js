import _ from 'underscore';

// export const miNombre = 'andres';

/**
 * esta funcion crea un nuevo deck
 * @param {Array <string>} cartasEspeciales ['C','D','H','S']
 * @param {Array <string>} tiposDeCarta ['A','J','Q','K']
 * @returns {Array <string>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, cartasEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error ('tiposDeCarta es obligatorio como un arreglo de string');
    if ( !cartasEspeciales || cartasEspeciales.length === 0 ) 
        throw new Error ('cartasEspeciales es obligatorio como un arreglo de string');
    

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of cartasEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}

// export default crearDeck;

