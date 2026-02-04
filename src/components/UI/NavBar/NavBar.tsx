import cl from './NavBar.module.css';
import 'style/container.css';
import { Link } from 'react-router-dom';
import shopping_cart from 'image/shopping_cart/Vector.svg';
import { useBurger } from 'hooks/useBurger';
import { useAppSelector } from 'hooks/redux';
import { selectCartTotalQuantity, selectShowBadge } from 'store/reducers/userSlice';
import { useGetCurrentUserQuery } from 'api/authApi';

export const NavBar = () => {

    const { open, toggle, closeMenu } = useBurger();

    const token = localStorage.getItem('token');
    const {data: me} = useGetCurrentUserQuery(undefined, {skip: !token});
    const fullName = me? `${me.firstName} ${me.lastName}` : '';

    const totalQty = useAppSelector(selectCartTotalQuantity);
    const showBadge = useAppSelector(selectShowBadge);

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
                            <Link to="#" onClick={closeMenu}>{fullName}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}