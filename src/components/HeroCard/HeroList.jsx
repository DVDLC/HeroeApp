import { useMemo } from "react"
import { getHeroByPublsher } from "../../helpers/getHeroByPublisher"
import { HeroCard } from "./HeroCard"

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroByPublsher( publisher ), [ publisher ] ) 

    return(
        <div className="" >
            <h3>Hero List - { publisher }</h3>
            <hr /> 
            {
                heroes?.map( heroe => (
                    <HeroCard 
                        key={ heroe.id }
                        { ...heroe }
                    />
                ))
            }
        </div>
    )
}