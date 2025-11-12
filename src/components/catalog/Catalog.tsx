import 'style/container.css'
import cl from './Catalog.module.css'
import { Input } from "components/UI/Input";
import { CatalogItem } from "./CatalogItem/CatalogItem";
import { Button } from 'components/UI/button';
import { useEffect, useState } from 'react';
import { fetchCatalogProducts } from 'api/catalog-api';
import type { Product } from 'models/Product';

const PAGE = 12;

export const Catalog = () => {
  const [query, setQuery] = useState('');
  const [debounced, setDebounced] = useState(query);
  const [skip, setSkip] = useState(0);

  const [items, setItems] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query), 400);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => { setSkip(0); }, [debounced]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true); setError(null);
      try {
        const data = await fetchCatalogProducts(debounced, skip, PAGE);
        if (cancelled) return;
        setTotal(data.total);
        setItems(prev => (skip === 0 ? data.products : [...prev, ...data.products]));
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? 'Failed to load');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [debounced, skip]);

  const hasMore = items.length < total;

  return (
    <div className={cl.catalog} id="Catalog">
      <div className='container'>
        <h2 className={cl.title}>Catalog</h2>

        <div className={cl.input}>
          <Input value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>

        {error && <div className={cl.error}>Error: {error}</div>}

        <div className={cl.catalogProducts}>
          {items.map(p => (
            <CatalogItem
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              discountPercentage={p.discountPercentage}
              thumbnail={p.thumbnail}
            />
          ))}
        </div>

        {loading && <div className={cl.loading}>Loading...</div>}

        {!loading && hasMore && (
          <div className={cl.catalogButton}>
            <Button className={cl.button} view='text' size='big' onClick={() => setSkip(s => s + PAGE)}>
              Show more
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};