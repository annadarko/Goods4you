import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { NotFound } from "./pages/NotFound";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { AuthGate, PublicOnlyRoute } from "./authorization";

export const PageRouter = () => {
    return (
      <Routes>
        <Route
          path="/login"
          element={
            <PublicOnlyRoute>
              <LoginPage />
            </PublicOnlyRoute>
          }
        />
  
        <Route
          path="/"
          element={
            <AuthGate>
              <Home />
            </AuthGate>
          }
        />
        <Route
          path="/product/:id"
          element={
            <AuthGate>
              <ProductPage />
            </AuthGate>
          }
        />
        <Route
          path="/cart"
          element={
            <AuthGate>
              <CartPage />
            </AuthGate>
          }
        />
  
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };