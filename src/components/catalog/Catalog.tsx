import '../../style/container.css'
import cl from './Catalog.module.css'
import { Input } from "../UI/Input/Input";
import { CatalogItem } from "./CatalogItem/CatalogItem";
import { Button } from '../UI/button';

export const Catalog = () => {
    return (
        <div className={cl.catalog} id="Catalog">
            <div className='container'>
                <h2 className={cl.title}>Catalog</h2>
                <div className={cl.input}>
                    <Input />
                </div>
                <div className={cl.catalog__products}>
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                </div>
                <div className={cl.catalog__button}>
                    <Button className={cl.button} view='text' size='big'>
                        Show more
                    </Button>
                </div>
            </div>
        </div>
    )
}