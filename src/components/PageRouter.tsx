import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { NotFound } from "./pages/NotFound";
import { LoginPage } from "./pages/LoginPage/LoginPage";

export const PageRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    )
}