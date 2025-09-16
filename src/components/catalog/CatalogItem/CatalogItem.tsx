import { useState } from "react";
import { Link } from 'react-router-dom'
import cl from './CatalogItem.module.css'
import img from '../../../image/product/CatalogItem.svg'
import icon from '../../../image/shopping_cart/Vector.svg'
import { Button } from '../../UI/button'
import { Counter } from '../../UI/counter'

export const CatalogItem = () => {
    const [count, setCount] = useState(0);
    return (
        <div className={cl.item}>
            <Link className={cl.item__img} to='/product'>
            <img src={img} alt="" />
            <div className={cl.mask}>
                <span>Show details</span>
            </div>
            </Link>
            <div className={cl.item__content}>
                <div className={cl.contentInfo}>
                 <Link className={cl.content__title} to="/product">
                 Essence Mascara Lash Princess
                 </Link>
                 <p className={cl.content__price}>$110</p>
                </div>
                {count === 0 ? (
          <Button
            className={cl.button}
            view="icon"
            size="small"
            onClick={() => setCount(1)}
          >
            <img src={icon} className={cl.icon} alt="Cart" />
          </Button>
        ) : (
          <Counter
            size="medium"
            value={count}
            onChange={(n) => setCount(n)}
          />
        )}
            </div>
        </div>
    )
}