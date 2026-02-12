import { Link } from 'react-router-dom'
import cl from './CatalogItem.module.css'
import icon from 'image/shopping_cart/Vector.svg'
import { Button } from 'components/UI/button'
import { Counter } from 'components/UI/counter'
import { useCallback, useState } from "react";
import { calcDiscounted } from 'utils/price'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectFirstCart, selectIsCartUpdatingById } from 'store/reducers/userSlice'
import { updateCartItem } from 'store/reducers/actionCreators'


interface CatalogItemProps {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

export const CatalogItem:  React.FC<CatalogItemProps> = ({ id, title, price, discountPercentage, thumbnail }) => {
  const dispatch = useAppDispatch();
  
  const cart = useAppSelector(selectFirstCart);
  const cartQty = cart?.products.find(p => p.id === id)?.quantity ?? 0;
  const isUpdating = useAppSelector((s) => selectIsCartUpdatingById(s, id));
  const showCounter = cartQty > 0;

  const handlCounterChange = useCallback ((next: number) => {
    if (isUpdating) return;
    dispatch(updateCartItem({ productId: id, nextQty: next }));
  }, [dispatch, id, isUpdating]);

  const handleAddClick = useCallback(()=> {
    if (isUpdating) return;
    dispatch(updateCartItem({ productId: id, nextQty: 1 }));
  }, [dispatch, id, isUpdating]);

  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const discounted = calcDiscounted(price, discountPercentage);

  return (
    <div className={cl.item}>
      <Link className={cl.itemImg} to={`/product/${id}`}>
        <div className={cl.imgBox}>
          {!imgLoaded && !imgError && <div className={cl.imgSkeleton} />}
          {imgError && <div className={cl.imgFallback}>No image</div>}

          <img 
            src={thumbnail} 
            alt={title} 
            loading='lazy'
            onLoad={() => setImgLoaded(true)}
            onError={() => {
              setImgError(true);
              setImgLoaded(true);
            }}
            style={{opacity: imgLoaded && !imgError ? 1:0}}
          />
        </div>
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
            value={cartQty}
            onChange={handlCounterChange}
          />
        ) : (
          <Button
            className={cl.button}
            view="icon"
            size="small"
            onClick={handleAddClick}
            disabled={isUpdating}
          >
            <img src={icon} className={cl.icon} alt="Cart" />
          </Button>
        )}
      </div>
    </div>
  );
};