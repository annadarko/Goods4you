import { NavBar } from "../UI/NavBar"
import '../../style/container.css'
import { CartItem } from "./cartitems"
import cl from './Cart.module.css'
import { Footer } from "../UI/footer"


export const Cart = () => {
    return (
        <>
        <NavBar />
        <div className="container">
            <h2 className={cl.title}>My cart</h2>
            <div className={cl.content}>
                <div className={cl.form}>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className={cl.price}>
                    <div className={cl.count}>
                        <p className={cl.text__count}>
                            Total count
                        </p>
                        <span>3 items</span>
                    </div>
                    <div className={cl.discount}>
                        <p className={cl.text__discount}>
                            Price without discount
                        </p>
                        <span>$700</span>
                    </div>
                    <div className={cl.line} />
                    <div className={cl.cost}>
                        <p className={cl.cost__text}>
                            Total price
                        </p>
                        <span>$590</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}