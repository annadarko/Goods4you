import {Header} from '../../header'
import { NavBar } from "../../UI/NavBar/NavBar";
import { Catalog } from "../../catalog/Catalog";
import { FAQ } from '../../Faq/Faq';
import { Footer } from '../../UI/footer';


export const Home = () => {
    return (
        <>
            <NavBar />
            <Header />
            <Catalog />
            <FAQ />
            <Footer />
        </>
    );
};