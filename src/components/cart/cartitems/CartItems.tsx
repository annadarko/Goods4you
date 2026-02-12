import cl from './CartItems.module.css'
import { Link } from 'react-router-dom'
import { calcDiscounted } from 'utils/price';
import icon from 'image/shopping_cart/Vector.svg';
//import { useState } from 'react';
import { Counter } from 'components/UI/counter';
import { Button } from 'components/UI/button';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { selectIsCartUpdatingById } from 'store/reducers/userSlice';
import { updateCartItem } from 'store/reducers/actionCreators';

interface CartItemProps {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  quantity: number;
}

export const CartItem: React.FC<CartItemProps> = ({
  id, title, thumbnail, price, discountPercentage, quantity
}) => {

  const dispatch = useAppDispatch();
  const isUpdating = useAppSelector((s) => selectIsCartUpdatingById(s, id));

  const handleChange = (next: number) => {
    dispatch(updateCartItem({ productId: id, nextQty: next }));
  };

  const handleDelete = () => {
    dispatch(updateCartItem({ productId: id, nextQty: 0 }));
  };

  const handleAddBack = () => {
    dispatch(updateCartItem({ productId: id, nextQty: 1 }));
  };

  return (
    <div className={`${cl.item} ${quantity===0 ? cl.itemDisabled : ''}`}>
      <img src={thumbnail} alt={title} />
      <div className={cl.description}>
        <Link to={`/product/${id}`} className={cl.text}>{title}</Link>
        <p className={cl.price}>${calcDiscounted(price, discountPercentage)}</p>
      </div>

      <div className={cl.controls}>
        {quantity > 0 ? (
          <>
            <Counter size="medium" value={quantity} onChange={handleChange} />
            <button
              type="button"
              className={cl.delete}
              onClick={handleDelete}
              disabled={isUpdating}
            >
              Delete
            </button>
          </>
        ) : (
          <Button
            className={cl.button}
            view="icon"
            size="small"
            onClick={handleAddBack}
            disabled={isUpdating}
          >
            <img src={icon} className={cl.icon} alt="" />
          </Button>
        )}
      </div>
    </div>
  );
};