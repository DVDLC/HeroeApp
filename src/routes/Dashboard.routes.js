import { 
    Routes, 
    Route 
} from "react-router-dom";
import {
    DCscreen,
    HeroeScreen,
    MARVELscreen,
    Navbar,
    SearchScreen
} from '../components/'
import { ErrorPage } from "../components/ui/404";

export function DashboardRoutes() {
    return (
        <>
            <Navbar />
            <div className="container ">
                <Routes>
                    <Route path="marvel" element={<MARVELscreen />} />
                    <Route path="dc" element={<DCscreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroeID" element={<HeroeScreen />} />

                    <Route path="/" element={<MARVELscreen />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
            
        </>
    );
}