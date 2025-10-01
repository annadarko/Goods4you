import { Link } from 'react-router-dom'
import cl from './CatalogItem.module.css'
import img from '../../../image/product/CatalogItem.svg'
import icon from '../../../image/shopping_cart/Vector.svg'
import { Button } from '../../UI/button'
import { Counter } from '../../UI/counter'
import { useQuantity } from '../../../hooks/useQuantity'
import { useState } from "react";

interface CatalogItemProps {
  id: number;
}

export const CatalogItem:  React.FC<CatalogItemProps> = ({ id }) => {
  
  const [showCounter, setShowCounter] = useState(false);
  const { quantity, increaseQuantity, decreaseQuantity } = useQuantity(() =>
    setShowCounter(false)
  );

  return (
    <div className={cl.item}>
      <Link className={cl.item__img} to={`/product/${id}`}>
        <img src={img} alt="" />
        <div className={cl.mask}>
          <span>Show details</span>
        </div>
      </Link>
      <div className={cl.item__content}>
        <div className={cl.contentInfo}>
          <Link className={cl.content__title} to={`/product/${id}`}>
            Essence Mascara Lash Princess
          </Link>
          <p className={cl.content__price}>$110</p>
        </div>
        {!showCounter ? (
          <Button
            className={cl.button}
            view="icon"
            size="small"
            onClick={() => {
              setShowCounter(true);
              increaseQuantity();
            }}
          >
            <img src={icon} className={cl.icon} alt="Cart" />
          </Button>
        ) : (
          <Counter
            size="medium"
            value={quantity}
            onChange={(n) => {
              if (n > quantity) increaseQuantity();
              else decreaseQuantity();
            }}
          />
        )}
      </div>
    </div>
  );
};