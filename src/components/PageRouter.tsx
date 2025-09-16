import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";

export const PageRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}