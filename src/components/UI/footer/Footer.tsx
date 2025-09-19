import { Link } from 'react-router-dom'
import cl from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.content}>
                <div className={cl.logo}>
                    <Link to = '/'>Goods4you</Link>
                </div>
                <div className={cl.items}>
                    <ul>
                        <li className={cl.item}>
                            <Link to = '#Catalog'>Catalog</Link>
                        </li>
                        <li className={cl.item}>
                            <Link to = '#FAQ'>FAQ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}