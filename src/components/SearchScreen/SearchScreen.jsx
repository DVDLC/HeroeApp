import { useMemo } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { getHeroByName } from "../../helpers/getHeroesByName"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../HeroCard/HeroCard"

export const SearchScreen = () => {

    const navigate = useNavigate()
    const [ query ] = useSearchParams()
    const search = query.get('q') ?? ''
    
    const [ values, handleInputChange ] = useForm({
        searchText: search
    })
    const { searchText } = values
    const heroesFiltered = useMemo( () => getHeroByName( search ), [search]) 

    const handlesubmit = e => {
        e.preventDefault()
        navigate(`?q=${ searchText }`)
    }
    

    return(
        <>
            <h2>Searchs</h2>
            <hr />
            <div className="row">
                <div className="col-5">
                    <form 
                        action=""
                        onSubmit={ handlesubmit }
                    >
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Heroe name"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            className="btn btn-outline-primary mt-2"
                            type="submit"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        heroesFiltered?.map( heroe => <HeroCard key={ heroe.id } {...heroe} /> )
                    }
                </div>
            </div>

        </>
    )
}