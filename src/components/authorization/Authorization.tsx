import 'style/container.css'
import cl from './Authorization.module.css'
import { Input } from 'components/UI/Input'
import { useState } from 'react'
import { Button } from 'components/UI/button'

export const Authorization = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='container'>
            <div className={cl.content}>
                <h2 className={cl.title}>Sign in</h2>
                <div className={cl.form}>
                    <Input 
                        className={cl.input}
                        placeholder="Login" 
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <Input
                        className={cl.input}  
                        placeholder="Password" 
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        className={cl.button}
                        view="text"
                        size="small"
                    >
                        <p className={cl.text}>Sign in</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}