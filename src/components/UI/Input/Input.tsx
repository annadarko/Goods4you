import React, { ChangeEvent } from 'react';
import cl from './Input.module.css';

interface InputProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export const Input: React.FC<InputProps> = ({onChange, value}) => {
    return (
        <input
            type='text'
            className={cl.input}
            placeholder='Search by title'
            onChange={onChange}
            value={value}
        />
    )
}