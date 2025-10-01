import { Footer } from "../UI/footer"
import { NavBar } from "../UI/NavBar"
import { ProductContent } from "./ProductContent"
import cl from './Product.module.css'

export const Product = () => {
    return (
        <div className={cl.container}>
            <div className={cl.content}>
                <NavBar />
                <ProductContent />
            </div>
            <div className={cl.footer}>
                <Footer />
            </div>
        </div>
    )
}