import { Link } from 'react-router-dom'
import cl from './Footer.module.css'
import { ROUTES } from 'utils/routes'

export const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.content}>
                <div className={cl.logo}>
                    <Link to={ROUTES.home}>Goods4you</Link>
                </div>
                <div className={cl.items}>
                    <ul>
                        <li className={cl.item}>
                            <Link to={ROUTES.catalog}>Catalog</Link>
                        </li>
                        <li className={cl.item}>
                            <Link to={ROUTES.faq}>FAQ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
