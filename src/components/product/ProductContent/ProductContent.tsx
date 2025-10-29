import 'style/container.css'
import cl from './ProductContent.module.css'
import img__big from 'image/product/product_main_photo.svg'
import img__small from 'image/product/product_small_photo.svg'
import img__stars from 'image/product/stars.svg'
import { Button } from 'components/UI/button'

export const ProductContent = () => {
    return (
        <div className="container">
            <div className={cl.content}>
                <div className={cl.productWrapper}>
                    <div className={cl.imgBig}>
                        <img src={img__big} alt='' />
                    </div>
                    <div className={cl.imgItem}>
                        <img src={img__small} alt='' className={cl.imgSmall} />
                        <img src={img__small} alt='' className={cl.imgSmall} />
                        <img src={img__small} alt='' className={cl.imgSmall} />
                        <img src={img__small} alt='' className={cl.imgSmall} />
                        <img src={img__small} alt='' className={cl.imgSmall} />
                        <img src={img__small} alt='' className={cl.imgSmall} />
                    </div>
                </div>
                <div className={cl.infoWrapper}>
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
                    <div className={cl.otherInfo}>
                        <span>1 month warranty</span>
                        <span>Ships in 1 month</span>
                    </div>
                    <div className={cl.buy}>
                        <div className={cl.priceWrapper}>
                            <div className={cl.price}>
                                <p className={cl.priceUp}>$7.17</p>
                                <p className={cl.priceDown}>$9.99</p>
                            </div>
                            <div className={cl.linePrice}/>
                            <div className={cl.discount}>
                                <p className={cl.discountText}>Your discount:</p>
                                <p className={cl.discountPercent}>14.5%</p>
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