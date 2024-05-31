import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"

export const MainRoutes = () => {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="*" element={<h1>Pagina no disponible</h1>}/>
            </Routes>
        </div>
    )
}