import cl from './CartItems.module.css'
import { Link } from 'react-router-dom'
import { calcDiscounted } from 'utils/price';
import icon from 'image/shopping_cart/Vector.svg';
import { useState } from 'react';
import { Counter } from 'components/UI/counter';
import { Button } from 'components/UI/button';

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
  const discounted = calcDiscounted(price, discountPercentage);

  const [count, setCount] = useState<number>(quantity);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const handleChange = (next: number) => {
    setCount(next);
    if (next===0) {
      setIsDeleted(true);
    }
  };

  const handleDelete = () => {
    setIsDeleted(true);
    setCount(0);
  };

  const handleAddBack = () => {
    setIsDeleted(false);
    setCount(1);
  }

  return (
    <div className={cl.item}>
      <img src={thumbnail} alt={title} />
      <div className={cl.description}>
        <Link to={`/product/${id}`} className={cl.text}>{title}</Link>
        <p className={cl.price}>${discounted}</p>
      </div>
      <div className={cl.controls}>
        {! isDeleted ? (
          <>
            <Counter size='medium' value={count} onChange={handleChange}/>
            <button
              type='button'
              className={cl.delete}
              onClick={handleDelete}
            >
              Delete
            </button>
          </>
        ):(
            <Button
              className={cl.button}
              view='icon'
              size='small'
              onClick={handleAddBack}
            >
              <img src={icon} className={cl.icon} alt='' />
            </Button>
          )}
      </div>
    </div>
  );
};