import { useContext } from "react"
/* import { useNavigate } from "react-router-dom"*/
import { AuthContext } from "../../auth/auth.context"
import { types } from "../../types"

export const LoginScreen = () => {

    /* const navigate = useNavigate() */
    const { dispatch } = useContext( AuthContext )

    const handleLogin = () => {

        const newUser = {
            name: 'GuestName'
        }

        dispatch( { type: types.login, payload: { ...newUser } } )

        /* navigate( '/marvel', { replace: true } ) */
    }

    return(
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                style={{ backgroundColor: '#0dcaf0', color: '#464b55' }}
                onClick={ handleLogin }
            >
                login
            </button>
        </div>
    )
}