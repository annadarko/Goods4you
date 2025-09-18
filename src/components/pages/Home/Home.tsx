import {Header} from '../../header'
import { NavBar } from "../../UI/NavBar/NavBar";
import { Catalog } from "../../catalog/Catalog";

export const Home = () => {
    return (
        <>
            <NavBar />
            <Header />
            <Catalog />
        </>
    );
};