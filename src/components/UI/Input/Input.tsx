import cl from './Input.module.css';

export const Input = () => {
    return (
        <input type="text" className={cl.input} placeholder="Search by title" />
    );
};