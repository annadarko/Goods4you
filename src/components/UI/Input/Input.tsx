import React, { ChangeEvent } from 'react';
import cl from './Input.module.css';
import cn from 'classnames';

interface InputProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    className?: string;
    placeholder?: string;
    type?: string;
}

export const Input: React.FC<InputProps> = ({
    value = "",
    onChange,
    className,
    placeholder = "Search by title",
    type = "text",
}) => {
    return (
      <input
        type={type}
        className={cn(cl.input, className)}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    );
};