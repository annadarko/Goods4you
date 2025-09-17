import { useState } from "react";

export const useQuantity = (onResetToCart: () => void) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity > 1 ? prevQuantity - 1 : 0;
      if (newQuantity === 0) {
        onResetToCart();
      }
      return newQuantity;
    });
  };

  return { quantity, increaseQuantity, decreaseQuantity };
};