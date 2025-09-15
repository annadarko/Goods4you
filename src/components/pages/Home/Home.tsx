import React from "react";
import {Header} from '../../header'
import { NavBar } from "../../NavBar/NavBar";
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