import cn from "classnames";
import cl from '../counter/Counter.module.css';
import React from "react";
import { Button } from '../button';

interface CounterProps {
  size?: "medium" | "large";
  value: number;
  onChange: (next: number) => void;
  disablePlus?: boolean;
  disableMinus?: boolean;
}

export const Counter: React.FC<CounterProps> = ({
  size = "medium",
  value,
  onChange,
  disablePlus = false,
  disableMinus = false,
}) => {
  const increment = () => {if (!disablePlus) onChange(value+1)};
  const decrement = () => {if (!disableMinus) onChange(Math.max(0, value -1))};

  return (
    <div className={cl.counter}>
      <Button
        className={cn(cl.button, cl[size])}
        onClick={decrement}
        view="icon"
        disabled={disableMinus}
      >
        <div className={cl.minus} />
      </Button>
      <span className={cl.countText}>{value} items</span>
      <Button
        className={cn(cl.button, cl[size])}
        onClick={increment}
        view="icon"
        disabled={disablePlus}
      >
        <div className={cl.plus} />
      </Button>
    </div>
  );
};