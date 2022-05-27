import { heroes } from "../data/heroes"

export const getHeroByName = ( name = '' ) => {
    console.log( 'Me volví a ejecutar' )
    name = name.toLowerCase()
    return heroes.filter( heroe => heroe.superhero.toLowerCase().includes( name ) )
}
