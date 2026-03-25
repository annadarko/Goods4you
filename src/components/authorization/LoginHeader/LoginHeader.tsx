import { Link } from "react-router-dom"
import cl from './LoginHeader.module.css'
import 'style/container.css'
import { ROUTES } from 'utils/routes'

export const LoginHeader = () => {
    return (
        <div className={cl.header}>
            <div className="container">
            <Link className={cl.link} to={ROUTES.home}>
            Goods4you
            </Link>
            </div>
        </div>
    );
};
