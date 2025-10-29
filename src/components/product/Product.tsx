import { Footer } from "components/UI/footer"
import { NavBar } from "components/UI/NavBar"
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