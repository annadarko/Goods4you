import cn from "classnames";
import cl from '../counter/Counter.module.css';
import React from "react";
import { Button } from '../button';

interface CounterProps {
  size?: "medium" | "large";
  value: number;
  onChange: (next: number) => void;
}

export const Counter: React.FC<CounterProps> = ({
  size = "medium",
  value,
  onChange
}) => {
  const increment = () => onChange(value+1);
  const decrement = () => onChange(Math.max(0, value -1));

  return (
    <div className={cl.counter}>
      <Button
        className={cn(cl.button, cl[size])}
        onClick={decrement}
        view="icon"
      >
        <div className={cl.minus} />
      </Button>
      <span className={cl.countText}>{value} items</span>
      <Button
        className={cn(cl.button, cl[size])}
        onClick={increment}
        view="icon"
      >
        <div className={cl.plus} />
      </Button>
    </div>
  );
};