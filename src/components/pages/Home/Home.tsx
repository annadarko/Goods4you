import {Header} from 'components/header'
import { NavBar } from "components/UI/NavBar";
import { Catalog } from "components/catalog";
import { FAQ } from 'components/Faq/';
import { Footer } from 'components/UI/footer';
import { useTitle } from 'hooks/useTitle';


export const Home = () => {
    useTitle ("Catalog | Goods4you")
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