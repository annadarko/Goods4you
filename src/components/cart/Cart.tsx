import 'style/container.css'
import cl from './Cart.module.css'
import { Footer } from "components/UI/footer"
import { NavBar } from 'components/UI/NavBar'
import { useAppSelector } from 'hooks/redux'
import { CartItem } from './cartitems'

import { selectFirstCart } from 'store/reducers/userSlice'

export const Cart = () => {
  const { isLoading, error } = useAppSelector(s => s.userSlice);
  const cart = useAppSelector(selectFirstCart);

  const products = cart?.products ?? [];

  const totalCount = cart?.totalProducts ?? 0;
  const priceWithoutDiscount = cart?.total ?? 0;
  const totalPrice = cart?.discountedTotal ?? 0;

  const isEmptyCart = !cart || products.length === 0;

  return (
    <div className={cl.container}>
      <div className={cl.content}>
        <NavBar />
        <div className="container">
          <h2 className={cl.title}>My cart</h2>

          {isLoading && <div>Loading...</div>}
          {error && <div className={cl.error}>Error: {error}</div>}

          {!isLoading && !error && (
            <>
              {isEmptyCart ? (
                <div className={cl.empty}>
                  No items
                </div>
              ) : (
                <div className={cl.cart}>
                  <div className={cl.form}>
                    {products.map((p) => (
                      <CartItem
                        key={p.id}
                        id={p.id}
                        title={p.title}
                        thumbnail={p.thumbnail ?? ''}  
                        price={p.price}
                        discountPercentage={p.discountPercentage ?? 0}
                        quantity={p.quantity ?? 0}
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