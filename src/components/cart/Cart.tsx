import 'style/container.css'
import { CartItem } from "./cartitems"
import cl from './Cart.module.css'
import { Footer } from "components/UI/footer"
import { NavBar } from 'components/UI/NavBar'


export const Cart = () => {
    return (
        <div className={cl.container}>
            <div className={cl.content}>
                <NavBar />
                <div className="container">
                    <h2 className={cl.title}>My cart</h2>
                    <div className={cl.cart}>
                        <div className={cl.form}>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </div>
                        <div className={cl.price}>
                            <div className={cl.count}>
                                <p className={cl.textCount}>
                                    Total count
                                </p>
                                <span>3 items</span>
                            </div>
                            <div className={cl.discount}>
                                <p className={cl.textDiscount}>
                                    Price without discount
                                </p>
                                <span>$700</span>
                            </div>
                            <div className={cl.line} />
                            <div className={cl.cost}>
                                <p className={cl.costText}>
                                    Total price
                                </p>
                                <span>$590</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <Footer />
        </div>
    )
}