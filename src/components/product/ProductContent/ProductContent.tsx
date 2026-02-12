import 'style/container.css'
import cl from './ProductContent.module.css'
import { Button } from 'components/UI/button'
import { Counter } from "components/UI/counter";
import type { Product } from "models/Product";
import { calcDiscounted } from "utils/price";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { selectFirstCart, selectIsCartUpdatingById } from "store/reducers/userSlice";
//import { useQuantity } from "hooks/useQuantity";
import { useMemo, useState, useEffect, useCallback } from "react";
import { updateCartItem } from 'store/reducers/actionCreators';

type Props = { product: Product };

export const ProductContent: React.FC<Props> = ({ product }) => {
  const images = product.images?.length ? product.images : [product.thumbnail];
  const [activeImg, setActiveImg] = useState(images[0]);

  useEffect(() => {
    setActiveImg(images[0]);
  }, [product.id]);

  const ratingInt = useMemo(() => {
    const r = Math.round(product.rating ?? 0);
    return Math.min(5, Math.max(0, r));
  }, [product.rating]);
  const stars = useMemo(() => Array.from({ length: 5 }, (_, i) => i < ratingInt), [ratingInt]);

  const {price, discountPercentage} = product;
  const discounted = calcDiscounted(price, discountPercentage);

  const dispatch = useAppDispatch();

  const cart = useAppSelector(selectFirstCart);
  const isUpdating = useAppSelector((s) => selectIsCartUpdatingById(s, product.id));
  //const productInCart = cart?.products.find((p) => p.id === product.id);
  const cartQty = cart?.products.find(p => p.id === product.id)?.quantity ?? 0;

  //const [showCounter, setShowCounter] = useState(cartQty > 0);
  const showCounter = cartQty > 0;

  // const { quantity, increaseQuantity, decreaseQuantity } = useQuantity(
  //   () => setShowCounter(false),
  //   cartQty
  // );

  // useEffect(() => {
  //   if (cartQty > 0) setShowCounter(true);
  //   if (cartQty === 0) setShowCounter(false);
  // }, [cartQty]);

  const handleCounterChange = useCallback((next: number) => {
      if (isUpdating) return;
      dispatch(updateCartItem({ productId: product.id, nextQty: next }));
    },[]
  );

  const handleAddClick = useCallback(() => {
    if (isUpdating) return;
    dispatch(updateCartItem({ productId: product.id, nextQty: 1 }));
  }, []);

  return (
    <div className="container">
      <div className={cl.content}>
        <div className={cl.productWrapper}>
          <div className={cl.imgBig}>
            <img src={activeImg} alt={product.title} />
          </div>

          {images.length > 1 && (
            <div className={cl.imgItem}>
              {images.slice(0, 6).map((src) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImg(src)}
                  aria-label="Select image"
                >
                  <img 
                    src={src} 
                    alt="" 
                    className={`${cl.imgSmall} ${activeImg === src ? cl.imgSmallActive : ""}`} 
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={cl.infoWrapper}>
          <h2 className={cl.title}>{product.title}</h2>

          <div className={cl.raiting}>
            <div className={cl.stars}>
              {stars.map((filled, idx) => (
                <span key={idx} className={filled ? cl.starFilled : cl.starEmpty}>★</span>
              ))}
            </div>
            <span className={cl.tagsText}>{product.tags?.join(", ")}</span>
          </div>

          <div className={cl.line} />

          <p className={cl.stock}>
            {product.stock > 0 ? `In Stock - Only ${product.stock} left!` : "Out of stock"}
          </p>

          <div className={cl.line} />

          <p className={cl.description}>{product.description}</p>

          <div className={cl.otherInfo}>
            <span>{product.warrantyInformation}</span>
            <span>{product.shippingInformation}</span>
          </div>

          <div className={cl.buy}>
            <div className={cl.priceWrapper}>
              <div className={cl.price}>
                <p className={cl.priceUp}>${Number(discounted)}</p>
                <p className={cl.priceDown}>${Number(product.price).toFixed(2)}</p>
              </div>

              <div className={cl.linePrice} />

              <div className={cl.discount}>
                <p className={cl.discountText}>Your discount:</p>
                <p className={cl.discountPercent}>{product.discountPercentage}%</p>
              </div>
            </div>

            {showCounter ? (
              <Counter size="medium" value={cartQty} onChange={handleCounterChange} />
            ) : (
                <Button className={cl.btn} view="text" size="big" onClick={handleAddClick} disabled={isUpdating}>
                    Add to cart
                </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};