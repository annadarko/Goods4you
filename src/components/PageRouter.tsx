import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage/CartPage";

export const PageRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element ={<CartPage />} />
            </Routes>
        </div>
    )
}