import { Link } from 'react-router-dom'
import cl from './CatalogItem.module.css'
import img from 'image/product/CatalogItem.svg'
import icon from 'image/shopping_cart/Vector.svg'
import { Button } from 'components/UI/button'
import { Counter } from 'components/UI/counter'
import { useQuantity } from 'hooks/useQuantity'
import { useCallback, useState } from "react";

interface CatalogItemProps {
  id: number;
}

export const CatalogItem:  React.FC<CatalogItemProps> = ({ id }) => {
  
  const [showCounter, setShowCounter] = useState(false);
  const { quantity, increaseQuantity, decreaseQuantity } = useQuantity(() =>
    setShowCounter(false)
  );

  const handlCounterChange = useCallback ((next: number) => {
    if (next > quantity) {
      increaseQuantity();
    } else {
      decreaseQuantity();
    }
  }, [quantity, increaseQuantity, decreaseQuantity]);

  const handleAddClick = useCallback(()=> {
    setShowCounter (true);
    increaseQuantity();
  }, [increaseQuantity]);

  return (
    <div className={cl.item}>
      <Link className={cl.itemImg} to={`/product/${id}`}>
        <img src={img} alt="" />
        <div className={cl.mask}>
          <span>Show details</span>
        </div>
      </Link>
      <div className={cl.itemContent}>
        <div className={cl.contentInfo}>
          <Link className={cl.contentTitle} to={`/product/${id}`}>
            Essence Mascara Lash Princess
          </Link>
          <p className={cl.contentPrice}>$110</p>
        </div>
        {showCounter ? (
          <Counter
            size="medium"
            value={quantity}
            onChange={handlCounterChange}
          />
        ) : (
          <Button
            className={cl.button}
            view="icon"
            size="small"
            onClick={handleAddClick}
          >
            <img src={icon} className={cl.icon} alt="Cart" />
          </Button>
        )}
      </div>
    </div>
  );
};