import cl from './NavBar.module.css';
import 'style/container.css';
import { Link } from 'react-router-dom';
import shopping_cart from 'image/shopping_cart/Vector.svg';
import { useBurger } from 'hooks/useBurger';
import { useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { selectCartTotalQuantity, selectShowBadge } from 'store/reducers/userSlice';

export const NavBar = () => {

    const { open, toggle, closeMenu } = useBurger();
    const dispatch = useAppDispatch();

    const didFetchRef = useRef (false);

    useEffect(() => {
        if (didFetchRef.current) return;
        didFetchRef.current = true;
    }, [dispatch]);

    const totalQty = useAppSelector(selectCartTotalQuantity);
    const showBadge = useAppSelector(selectShowBadge);

    const username = 'Johnson Smith';

    return (
        <div className={cl.navbar}>
        <div className="container">
            <div className={cl.content}>
                <div className={cl.logo}>
                    <Link to="/">Goods4you</Link>
                </div>
                    <button className={cl.burger} onClick={toggle} aria-expanded={open}>
                        <span/><span/><span/>
                    </button>
                <div className={`${cl.items} ${open ? cl.open : ""}`}>
                    <ul>
                        <li className={cl.item}>
                            <Link to="/#Catalog" onClick={closeMenu}>Catalog</Link>
                        </li>
                        <li className={cl.item}>
                            <Link to="/#FAQ" onClick={closeMenu}>FAQ</Link>
                        </li>
                        <li className={cl.item}>
                            <Link to="/cart" onClick={closeMenu}>
                                <span>Cart</span>
                                    <span className={cl.iconWrap}>
                                    <img className={cl.shoppingImg} src = {shopping_cart} alt="" />
                                    {showBadge && (
                                        <div className={cl.shoppingCounter}>{totalQty}</div>
                                    )}
                                </span>
                            </Link>
                        </li>
                        <li className={cl.item}>
                            <Link to="#" onClick={closeMenu}>{username}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}