import { AppRoutes } from "./routes/App.routes";
import './App.css'
import { AuthContext } from "./auth/auth.context";
import { useEffect, useReducer } from "react";
import { authReducer } from "./auth/auth.reducer";


const init = () => {
    return JSON.parse( localStorage.getItem('user') ) || { logged: false } 
}

function HeroesApp() {

  const [ user, dispatch ] =  useReducer( authReducer, {}, init )

  useEffect(() => {

    if( !user ) return

    localStorage.setItem( 'user', JSON.stringify( user ) )

  }, [ user ])

  return (
    <AuthContext.Provider value={{ user, dispatch }} >
      <AppRoutes />
    </AuthContext.Provider>
  );
}

export default HeroesApp;
