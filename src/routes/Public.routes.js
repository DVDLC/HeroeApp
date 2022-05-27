import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/auth.context"
import { types } from "../types"

export const PublicRoutes = ({ children }) => {

    const { user, dispatch } = useContext( AuthContext )

    const { pathname, search } = JSON.parse( localStorage.getItem( 'lastPATH' ) )


    useEffect(() => {
        dispatch({ type: types.logout })
    },[ dispatch ])


    return ( !user.logged )
        ? children
        : <Navigate to={ `${ pathname }/${ search }` }/>
}