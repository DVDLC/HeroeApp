import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/auth.context"

export const PrivateRoutes = ( { children } ) => {

    const { user } = useContext( AuthContext )
    const { pathname, search } = useLocation()

    localStorage.setItem( 'lastPATH', JSON.stringify( {pathname, search} ))

    return ( user.logged )
        ?  children
        : <Navigate to='/login'/>
}