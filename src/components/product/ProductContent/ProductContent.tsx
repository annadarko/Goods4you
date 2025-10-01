import '../../../style/container.css'
import cl from './ProductContent.module.css'
import img__big from '../../../image/product/product_main_photo.svg'
import img__small from '../../../image/product/product_small_photo.svg'
import img__stars from '../../../image/product/stars.svg'
import { Button } from '../../UI/button'

export const ProductContent = () => {
    return (
        <div className="container">
            <div className={cl.content}>
                <div className={cl.product__wrapper}>
                    <div className={cl.img__big}>
                        <img src={img__big} alt='' />
                    </div>
                    <div className={cl.img__item}>
                        <img src={img__small} alt='' className={cl.img__small} />
                        <img src={img__small} alt='' className={cl.img__small} />
                        <img src={img__small} alt='' className={cl.img__small} />
                        <img src={img__small} alt='' className={cl.img__small} />
                        <img src={img__small} alt='' className={cl.img__small} />
                        <img src={img__small} alt='' className={cl.img__small} />
                    </div>
                </div>
                <div className={cl.info__wrapper}>
                    <h2 className={cl.title}>
                        Essence Mascara Lash Princess
                    </h2>
                    <div className={cl.raiting}>
                        <img src={img__stars} alt='' className={cl.stars} />
                        <span>electronics, selfie accessories</span>
                    </div>
                    <div className={cl.line} />
                    <p className={cl.stock}>In Stock - Only 5 left!</p>
                    <div className={cl.line} />
                    <p className={cl.description}>
                        The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
                    </p>
                    <div className={cl.other__info}>
                        <span>1 month warranty</span>
                        <span>Ships in 1 month</span>
                    </div>
                    <div className={cl.buy}>
                        <div className={cl.price__wrapper}>
                            <div className={cl.price}>
                                <p className={cl.price__up}>$7.17</p>
                                <p className={cl.price__down}>$9.99</p>
                            </div>
                            <div className={cl.line__price}/>
                            <div className={cl.discount}>
                                <p className={cl.discount__text}>Your discount:</p>
                                <p className={cl.discount__percent}>14.5%</p>
                            </div>
                        </div>
                        <Button className={cl.btn} view="text" size="big">
                            Add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}