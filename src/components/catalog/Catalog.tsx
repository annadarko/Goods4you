import 'style/container.css'
import cl from './Catalog.module.css'
import { Input } from "components/UI/Input";
import { CatalogItem } from "./CatalogItem/CatalogItem";
import { Button } from 'components/UI/button';
import { useEffect, useState, useCallback } from 'react';
import type { Product } from 'models/Product';
import { useSearchProductsQuery } from 'api/dummyApi';
import loading from 'image/shopping_cart/loading.svg'

const PAGE = 12;

export const Catalog = () => {
  const [query, setQuery] = useState('');
  const [debounced, setDebounced] = useState(query);
  const [skip, setSkip] = useState(0);

  const [items, setItems] = useState<Product[]>([]);
  const limit = PAGE

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query), 400);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => { 
    setSkip(0);
    setItems([]);
  }, [debounced]);

  const { data, isLoading, isFetching, isError } = useSearchProductsQuery({
    q: debounced,
    skip,
    limit,
  });

  useEffect(() => {
    if (!data) return;
  
    setItems((prev) => {
      const merged = skip === 0 ? data.products : [...prev, ...data.products];
  
      const unique = merged.filter(
        (p, idx, arr) => arr.findIndex(x => x.id === p.id) === idx
      );
  
      return unique;
    });
  }, [data, skip]);

  const total = data?.total ?? 0;
  const hasMore = items.length < total;

  const isInitialLoading = isLoading && skip === 0;
  const isMoreLoading = isFetching && skip > 0;

  const handleShowMore = useCallback(() => {
    if (isFetching) return;
    setSkip(s => s + PAGE);
  }, [isFetching]);

  return (
    <div className={cl.catalog} id="Catalog">
      <div className='container'>
        <h2 className={cl.title}>Catalog</h2>

        <div className={cl.input}>
          <Input value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>

        {isError && <div> Error loading product {isError}</div>}

        <div className={cl.catalogProducts}>
          {items.map(p => (
            <CatalogItem
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              discountPercentage={p.discountPercentage}
              thumbnail={p.thumbnail}
              stock={p.stock}
            />
          ))}
        </div>

        {isInitialLoading && <div className={cl.loading}>Loading...</div>}

        {isMoreLoading && (
          <div className={cl.catalogButton}>
            <span className={cl.btnSpinner}>
              <img src={loading} alt="Loading" />
            </span>
          </div>
        )}

        {!isFetching && hasMore && (
          <div className={cl.catalogButton}>
            <Button
              className={cl.button}
              view="text"
              size="big"
              onClick={handleShowMore}
            >
              Show more
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};