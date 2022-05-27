import { 
    HashRouter, 
    Routes, 
    Route 
} from "react-router-dom";
import { LoginScreen } from '../components'
import { DashboardRoutes } from "./Dashboard.routes";
import { PrivateRoutes } from "./Private.routes";
import { PublicRoutes } from "./Public.routes";

export function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route 
                    path="/login" 
                    element={
                        <PublicRoutes>
                            <LoginScreen />
                        </PublicRoutes> 
                    } 
                />
                <Route 
                    path="/*" 
                    element={ 
                        <PrivateRoutes>
                            <DashboardRoutes /> 
                        </PrivateRoutes>
                    } 
                />
            </Routes>
        </HashRouter>
    );
}