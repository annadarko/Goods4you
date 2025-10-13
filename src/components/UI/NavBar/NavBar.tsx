import cl from '../NavBar/NavBar.module.css';
import 'style/container.css';
import { Link } from 'react-router-dom';
import shopping_cart from 'image/shopping_cart/Vector.svg';
import { useBurger } from 'hooks/useBurger';

export const NavBar = () => {

    const { open, toggle, closeMenu } = useBurger();

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
                                    <div className={cl.shoppingCounter}>0</div>
                                </span>
                            </Link>
                        </li>
                        <li className={cl.item}>
                            <Link to="#" onClick={closeMenu}>Johnson Smith</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}