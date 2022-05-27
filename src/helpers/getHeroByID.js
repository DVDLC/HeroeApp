
import { heroes } from "../data/heroes"

export const getHeroeByID = ( id = '' ) => {
    
    return heroes.find( heroe => heroe.id === id )
}