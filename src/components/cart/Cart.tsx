import { useEffect, useMemo, useState } from 'react';
import 'style/container.css';
import cl from './Cart.module.css';
import { Footer } from "components/UI/footer";
import { NavBar } from 'components/UI/NavBar';
import { useAppSelector } from 'hooks/redux';
import { CartItem } from './cartitems';
import { selectFirstCart } from 'store/reducers/userSlice';
import type { CartProduct } from 'models/User';

export const Cart = () => {
  const { isLoading, error } = useAppSelector(s => s.userSlice);
  const cart = useAppSelector(selectFirstCart);

  const cartProducts = cart?.products ?? [];

  const [visibleItems, setVisibleItems] = useState<CartProduct[]>([]);

  useEffect(() => {
    if (!cart) return;

    setVisibleItems((prev) => {
      const byId = new Map<number, CartProduct>();

      prev.forEach(p => byId.set(p.id, p));

      cartProducts.forEach(p => byId.set(p.id, p));

      return Array.from(byId.values());
    });
  }, [cart?.id, cartProducts]);

  const quantityById = useMemo(() => {
    const m = new Map<number, number>();
    cartProducts.forEach(p => m.set(p.id, p.quantity ?? 0));
    return m;
  }, [cartProducts]);

  const totalCount = cart?.totalProducts ?? 0;
  const priceWithoutDiscount = cart?.total ?? 0;
  const totalPrice = cart?.discountedTotal ?? 0;

  const isEmptyCart = !cart || cartProducts.length === 0;

  return (
    <div className={cl.container}>
      <div className={cl.content}>
        <NavBar />
        <div className="container">
          <h2 className={cl.title}>My cart</h2>

          {isLoading && <div>Loading...</div>}
          {error && <div>Error loading product</div>}

          {!isLoading && !error && (
            <>
              {isEmptyCart ? (
                <div className={cl.empty}>No items</div>
              ) : (
                <div className={cl.cart}>
                  <div className={cl.form}>
                    {visibleItems.map((p) => (
                      <CartItem
                        key={p.id}
                        id={p.id}
                        title={p.title}
                        thumbnail={p.thumbnail ?? ''}
                        price={p.price}
                        discountPercentage={p.discountPercentage ?? 0}
                        quantity={quantityById.get(p.id) ?? 0} 
                      />
                    ))}
                  </div>

                  <div className={cl.price}>
                    <div className={cl.count}>
                      <p className={cl.textCount}>Total count</p>
                      <span>{totalCount} items</span>
                    </div>
                    <div className={cl.discount}>
                      <p className={cl.textDiscount}>Price without discount</p>
                      <span>${priceWithoutDiscount.toFixed(2)}</span>
                    </div>
                    <div className={cl.line} />
                    <div className={cl.cost}>
                      <p className={cl.costText}>Total price</p>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};