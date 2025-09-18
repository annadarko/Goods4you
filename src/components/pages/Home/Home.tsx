import {Header} from '../../header'
import { NavBar } from "../../UI/NavBar/NavBar";
import { Catalog } from "../../catalog/Catalog";
import { FAQ } from '../../Faq/Faq';


export const Home = () => {
    return (
        <>
            <NavBar />
            <Header />
            <Catalog />
            <FAQ />
        </>
    );
};