import 'style/container.css'
import cl from './Catalog.module.css'
import { Input } from "components/UI/Input";
import { CatalogItem } from "./CatalogItem/CatalogItem";
import { Button } from 'components/UI/button';

export const Catalog = () => {
    return (
        <div className={cl.catalog} id="Catalog">
            <div className='container'>
                <h2 className={cl.title}>Catalog</h2>
                <div className={cl.input}>
                    <Input />
                </div>
                <div className={cl.catalog__products}>
                    <CatalogItem id = {1}/>
                    <CatalogItem id = {2}/>
                    <CatalogItem id = {3}/>
                    <CatalogItem id = {4}/>
                    <CatalogItem id = {5}/>
                    <CatalogItem id = {6}/>
                    <CatalogItem id = {7}/>
                    <CatalogItem id = {8}/>
                    <CatalogItem id = {9}/>
                    <CatalogItem id = {10}/>
                    <CatalogItem id = {11}/>
                    <CatalogItem id = {12}/>
                    <CatalogItem id = {13}/>
                    <CatalogItem id = {14}/>
                    <CatalogItem id = {15}/>
                    <CatalogItem id = {16}/>
                    <CatalogItem id = {17}/>
                    <CatalogItem id = {18}/>
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