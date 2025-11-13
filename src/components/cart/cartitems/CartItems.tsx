import cl from './CartItems.module.css'
import { Link } from 'react-router-dom'
import { calcDiscounted } from 'utils/price';

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

  return (
    <div className={cl.item}>
      <img src={thumbnail} alt={title} />
      <div className={cl.description}>
        <Link to={`/product/${id}`} className={cl.text}>{title}</Link>
        <p className={cl.price}>${discounted} × {quantity}</p>
      </div>

      {/* справа просто суммарно по позиции */}
      <div className={cl.controls}>
        <span className={cl.sum}>${(discounted * quantity).toFixed(2)}</span>
      </div>
    </div>
  );
};