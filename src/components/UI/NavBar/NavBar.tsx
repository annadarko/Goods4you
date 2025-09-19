import cl from '../NavBar/NavBar.module.css';
import '../../../style/container.css';
import { Link } from 'react-router-dom';
import shopping_cart from '../../../image/shopping_cart/Vector.svg';
import { useBurger } from '../../../hooks/useBurger';

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
                        <li className={cl.item}><a href="#Catalog" onClick={closeMenu}>Catalog</a></li>
                        <li className={cl.item}><a href="#FAQ" onClick={closeMenu}>FAQ</a></li>
                        <li className={cl.item}><Link to="/cart" onClick={closeMenu}>
                            <span>Cart</span>
                                <span className={cl.iconWrap}>
                                <img className={cl.shopping_img} src = {shopping_cart} alt="" />
                                <div className={cl.shopping_counter}>0</div>
                            </span>
                            </Link>
                        </li>
                        <li className={cl.item}><a href="#" onClick={closeMenu}>Johnson Smith</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}