import { useEffect, useState } from 'react';

export const useQuantity = (onZero?: () => void, initial: number = 0) => {
  const [quantity, setQuantity] = useState(initial);

  const increaseQuantity = () => setQuantity(q => q + 1);

  const decreaseQuantity = () =>
    setQuantity(q => {
      const next = q - 1;
      if (next <= 0) {
        onZero?.();
        return 0;
      }
      return next;
    });

  // если initial изменился (например, корзину подгрузили асинхронно) — обновим локальное состояние
  useEffect(() => {
    setQuantity(initial);
  }, [initial]);

  return { quantity, increaseQuantity, decreaseQuantity };
};