import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { getHeroeByID } from "../../helpers/getHeroByID"
import { ErrorPage } from "../ui/404"

export const HeroeScreen = () => {

    const { heroeID } = useParams()
    const imagePATH = `/assets/${ heroeID }.jpg`
    const heroe =  useMemo( () => getHeroeByID( heroeID ), [heroeID]) 

    if( !heroe ) return <ErrorPage />

    return(

        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ imagePATH} 
                    alt={ heroe.superhero } 
                    className='img-thumbnail animate__animated animate__fadeInLeft animate__faster' 
                />
            </div> 

            <div 
                className="col-8"
            > 
                <h3>{ heroe.superhero }</h3>
                <ul 
                    className="list-group list-group-flush" 
                >
                    <li className="list-group-item" > <b>Alter ego:</b> { heroe.alter_ego }</li>
                    <li className="list-group-item" > <b>Publisher:</b> { heroe.publisher }</li>
                    <li className="list-group-item" > <b>First Appearance:</b> { heroe.first_appearance }</li>
                </ul>
            </div>

        </div>

    )
}