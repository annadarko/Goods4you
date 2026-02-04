import { useGetCurrentUserQuery } from "api/authApi";
import { Navigate, useLocation } from "react-router-dom";
import loading from 'image/shopping_cart/loading.svg'
import cl from './AuthGate.module.css'


export const AuthGate: React.FC<{children: React.ReactNode}> = ({children}) => {
    const token = localStorage.getItem('token');
    const location = useLocation();

    const {isLoading, isError} = useGetCurrentUserQuery(undefined, {
        skip: !token,
    });

    if (!token) {
        return <Navigate to = '/login' replace state={{from: location}} />;
    }

    if (isLoading) {
        return (
            <div className={cl.spinner}>
                <img src={loading} alt="Loading" />
            </div>
        );
    }

    if (isError) {
        localStorage.removeItem('token');
        return <Navigate to='/login' replace state={{from: location}} />;
    }

    return <>{children}</>
};