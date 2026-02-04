import { useGetCurrentUserQuery } from "api/authApi";
import { Navigate } from "react-router-dom";
import loading from 'image/shopping_cart/loading.svg';
import cl from './PublicOnlyRoute.module.css'


export const PublicOnlyRoute: React.FC<{children: React.ReactNode}> = ({children}) => {
    const token = localStorage.getItem('token');

    const {isLoading, isError} = useGetCurrentUserQuery(undefined, {
        skip: !token,
    });

    if(!token) return <>{children}</>;

    if(isLoading) {
        return (
            <div className={cl.spinner}>
                <img src={loading} alt="Loading" />
            </div>
        );
    }

    if(isError) {
        localStorage.removeItem('token');
        return<>{children}</>;
    }

    return <Navigate to='/login' replace />;
};