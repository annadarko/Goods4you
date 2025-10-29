import cl from './CartItems.module.css'
import img__cart from 'image/product/product_small_photo.svg'
import { Link } from 'react-router-dom'
import { useCallback, useState } from 'react';
import { Button } from 'components/UI/button';
import icon from 'image/shopping_cart/Vector.svg'
import { Counter } from 'components/UI/counter';

export const CartItem = () => {

    const [count, setCount] = useState<number>(1);
    const [isDeleted, setIsDeleted] = useState<boolean>(false);

    const product_id = 1;

    const handleCounterChange = useCallback ((next: number) => {
        setCount(next);
        if (next === 0) {
            setIsDeleted(true);
        }
    }, []);

    const handleDeleteClick = useCallback (() => {
        setIsDeleted (true);
        setCount(0);
    }, []);

    const handleRestoreClick = useCallback (() => {
        setIsDeleted (false);
        setCount(1);
    }, []);

    return (
        <div className={cl.item}>
                <img src={img__cart} alt='' />
                <div className={cl.description}>
                    <Link to={`/product/${product_id}`} className={cl.text}>Essence Mascara Lash Princess</Link>
                    <p className={cl.price}>$110</p>
                </div>
            <div className={cl.controls}>
            {isDeleted ? (
          <Button
            className={cl.button}
            view="icon"
            onClick={handleRestoreClick}
          >
            <img src={icon} alt="" className={cl.icon} />
          </Button>
        ) : (
          <>
            <Counter
              size="medium"
              value={count}
              onChange={handleCounterChange}
            />
            <span
              className={cl.delete}
              onClick={handleDeleteClick}
            >
              Delete
            </span>
          </>
        )}
            </div>
        </div>
    )
}