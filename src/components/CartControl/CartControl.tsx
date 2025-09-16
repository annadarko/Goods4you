import React, {useState} from "react"
import { Button } from "../UI/button";
import cl from './CartControl.module.css'
import { Counter } from "../UI/counter";
import icon from '../../image/product/CatalogItem.svg'

export const CartControl: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);

    if (!open) {
        return(
            <Button className={cl.iconButton} view="icon" onClick={() => setOpen(true)}>
                <img src={icon} alt='' />
            </Button>
        );
    }
    return (
        <Counter
          size="medium"
          value={count}
          onChange={(n) => {
            setCount(n);
            if (n === 0) setOpen(false);
          }}
        />
      );
    };