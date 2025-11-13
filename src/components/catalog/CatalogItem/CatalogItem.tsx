import { Link } from 'react-router-dom'
import cl from './CatalogItem.module.css'
import icon from 'image/shopping_cart/Vector.svg'
import { Button } from 'components/UI/button'
import { Counter } from 'components/UI/counter'
import { useQuantity } from 'hooks/useQuantity'
import { useCallback, useState, useEffect } from "react";
import { calcDiscounted } from 'utils/price'
import { useAppSelector } from 'hooks/redux'
import { selectFirstCart } from 'store/reducers/userSlice'


interface CatalogItemProps {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

export const CatalogItem:  React.FC<CatalogItemProps> = ({ id, title, price, discountPercentage, thumbnail }) => {
  const cart = useAppSelector(selectFirstCart);
  const productInCart = cart?.products.find(p => p.id === id);
  const cartQty = productInCart?.quantity ?? 0;

  const [showCounter, setShowCounter] = useState(cartQty>0);
  const { quantity, increaseQuantity, decreaseQuantity } = useQuantity(() =>
    setShowCounter(false),
    cartQty,
  );

  useEffect(() => {
    if (cartQty>0) {
      setShowCounter(true);
    }
  }, [cartQty]);

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

  const discounted = calcDiscounted(price, discountPercentage);

  return (
    <div className={cl.item}>
      <Link className={cl.itemImg} to={`/product/${id}`}>
        <img src={thumbnail} alt={title} />
        <div className={cl.mask}>
          <span>Show details</span>
        </div>
      </Link>
      <div className={cl.itemContent}>
        <div className={cl.contentInfo}>
          <Link className={cl.contentTitle} to={`/product/${id}`}>
            {title}
          </Link>
          <p className={cl.contentPrice}>${discounted}</p>
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