import cl from './CartItems.module.css'
import img__cart from 'image/product/product_small_photo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Button } from 'components/UI/button';
import icon from 'image/shopping_cart/Vector.svg'
import { Counter } from 'components/UI/counter';

export const CartItem = () => {

    const [count, setCount] = useState<number>(1);
    const [isDeleted, setIsDeleted] = useState<boolean>(false);

    const handleChange = (next: number) => {
    setCount(next);
    if (next === 0) {
        setIsDeleted(true);
    }
  };

    const product_id = 1;

    return (
        <div className={cl.item}>
                <img src={img__cart} alt='' />
                <div className={cl.description}>
                    <Link to={`/product/${product_id}`} className={cl.text}>Essence Mascara Lash Princess</Link>
                    <p className={cl.price}>$110</p>
                </div>
            <div className={cl.controls}>
                {!isDeleted ? (
                    <>
                        <Counter size="medium" value={count} onChange={handleChange} />
                        <span
                            className={cl.delete}
                            onClick={() => {
                                setIsDeleted(true);
                                setCount(0);
                            }}
                        >
                            Delete
                        </span>
                    </>
                ) : (
                    <Button
                        className={cl.button}
                        view="icon"
                        onClick={() => {
                            setIsDeleted(false);
                            setCount(1);
                        }}
                    >
                        <img src={icon} alt="" className={cl.icon} />
                    </Button>
                )}
            </div>
        </div>
    )
}