import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Products } from "../pages/product";
import { AboutUs } from "../pages/about";

export function MainRoutes() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Home />} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="products" element={<Products />} />
            </Route>
        </Routes>
    )
}