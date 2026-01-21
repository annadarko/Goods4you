import { Footer } from "components/UI/footer"
import { NavBar } from "components/UI/NavBar"
import { ProductContent } from "./ProductContent"
import cl from './Product.module.css'
import { useParams } from "react-router-dom"
import { useProductByIdQuery } from "api/dummyApi"
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import { NotFound } from "components/pages/NotFound"

export const Product = () => {
    const { id } = useParams<{ id: string }>();
    const productId = Number(id);
  
    const skip = !Number.isFinite(productId) || productId <= 0;
  
    const {
      data: product,
      isLoading,
      isError,
      error,
    } = useProductByIdQuery(productId, { skip });
  
    if (skip) return <NotFound />;
  
    const status =
      (error as FetchBaseQueryError | undefined)?.status;
  
    if (isError && status === 404) return <NotFound />;
  
    return (
      <div className={cl.container}>
        <div className={cl.content}>
          <NavBar />
  
          {isLoading && <div className={cl.container}>Loading...</div>}
  
          {isError && status !== 404 && (
            <div className={cl.container}>Error loading product</div>
          )}
  
          {!isLoading && !isError && product && (
            <ProductContent product={product} />
          )}
        </div>
  
        <div className={cl.footer}>
          <Footer />
        </div>
      </div>
    );
  };