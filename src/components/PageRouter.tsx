import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { NotFound } from "./pages/NotFound";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { AuthGate, PublicOnlyRoute } from "./authorization";
import { ROUTES } from "utils/routes";

export const PageRouter = () => {
    return (
      <Routes>
        <Route
          path={ROUTES.login}
          element={
            <PublicOnlyRoute>
              <LoginPage />
            </PublicOnlyRoute>
          }
        />
  
        <Route
          path={ROUTES.home}
          element={
            <AuthGate>
              <Home />
            </AuthGate>
          }
        />
        <Route
          path={ROUTES.product}
          element={
            <AuthGate>
              <ProductPage />
            </AuthGate>
          }
        />
        <Route
          path={ROUTES.cart}
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
