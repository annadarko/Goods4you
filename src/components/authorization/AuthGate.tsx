import { useGetCurrentUserQuery } from "api/authApi";
import { Navigate, useLocation } from "react-router-dom";
import loading from 'image/shopping_cart/loading.svg'
import cl from './AuthGate.module.css'
import { useAppDispatch } from "hooks/redux";
import { useEffect, useRef } from "react";
import { fetchCartsByUser } from "store/reducers/actionCreators";


export const AuthGate: React.FC<{children: React.ReactNode}> = ({children}) => {
    const token = localStorage.getItem('token');
    const location = useLocation();
    const dispatch = useAppDispatch();

    const {data: me, isLoading, isError} = useGetCurrentUserQuery(undefined, {
        skip: !token,
    });

    const didFetchCart = useRef(false);

    useEffect(() => {
        if (!me?.id) return;
        if(didFetchCart.current) return;

        didFetchCart.current = true;
        dispatch(fetchCartsByUser({id: me.id}));
    }, [me?.id, dispatch]);

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