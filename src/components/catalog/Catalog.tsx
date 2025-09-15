import React from "react";
import {Link} from 'react-router-dom';
import '../../style/container.css'
import cl from './Catalog.module.css'

export const Catalog = () => {
    return (
        <div className={cl.catalog} id="Catalog">
            <div className='container'>
                <h2 className={cl.title}>Catalog</h2>
            </div>
        </div>
    )
}