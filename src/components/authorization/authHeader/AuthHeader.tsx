import { Link } from "react-router-dom"
import cl from './AuthHeader.module.css'
import 'style/container.css'

export const AuthHeader = () => {
    return (
        <div className={cl.header}>
            <div className="container">
            <Link className={cl.link} to = '/'>
            Goods4you
            </Link>
            </div>
        </div>
    );
};