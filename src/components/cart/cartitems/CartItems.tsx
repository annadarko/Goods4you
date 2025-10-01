import cl from './CartItems.module.css'
import img__cart from '../../../image/product/product_small_photo.svg'
import { Link } from 'react-router-dom'
import { Counter } from '../../UI/counter'
import { useState } from 'react';
import { Button } from '../../UI/button';
import icon from '../../../image/shopping_cart/Vector.svg'

export const CartItem = () => {

    const [count, setCount] = useState<number>(1);
    const [isDeleted, setIsDeleted] = useState<boolean>(false);

    const handleChange = (next: number) => {
    setCount(next);
    if (next === 0) {
        setIsDeleted(true);
    }
  };

    return (
        <div className={cl.item}>
                <img src={img__cart} alt='' />
                <div className={cl.description}>
                    <Link to="/product" className={cl.text}>Essence Mascara Lash Princess</Link>
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