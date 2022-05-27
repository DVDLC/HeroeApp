import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/auth.context';
import { types } from '../../types';

export const Navbar = () => {

    const navigate = useNavigate() 
    const { user, dispatch } = useContext( AuthContext ) 

    const handleLogout = () => { 
        
        dispatch({ type: types.logout })

        navigate('/login', {
            replace: true
        })     
    }

    return (
        <nav 
            className="navbar navbar-expand-sm navbar-dark "
            style={ { backgroundColor: '#464b55', padding: '5px 10px' } }    
        >
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HeroesApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <Link 
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel
                    </Link>

                    <Link 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </Link>

                    <Link 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Search
                    </Link>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info' >
                        { user.name }
                    </span>

                    <button 
                        className="nav-item nav-link btn" 
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}