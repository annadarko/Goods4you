import 'style/container.css'
import cl from './Authorization.module.css'
import { Input } from 'components/UI/Input'
import { useState } from 'react'
import { Button } from 'components/UI/button'
import { authApi, useLoginUserMutation } from 'api/authApi'
import { useAppDispatch } from 'hooks/redux'
import { useNavigate } from 'react-router-dom'
import loading from 'image/shopping_cart/loading.svg'


export const Authorization = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const[loginUser, {isLoading, error}] = useLoginUserMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const user = await loginUser({username, password}).unwrap();
            localStorage.setItem('token', user.accessToken);
            dispatch(authApi.util.invalidateTags(['Me']));
            navigate('/');
        } catch (e) {

        }
    };

    return (
        <div className='container'>
            <div className={cl.content}>
                <h2 className={cl.title}>Sign in</h2>
                <div className={cl.form}>
                    <Input 
                        className={cl.input}
                        placeholder="Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        className={cl.input}  
                        placeholder="Password" 
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={cl.error}>
                        {error && <span>Некорректный логин или пароль</span>}
                    </div>
                    {isLoading ? (
                            <span className={cl.btnSpinner}>
                                <img src={loading} alt="Loading" />
                            </span>
                    ) : (
                        <Button
                            className={cl.button}
                            onClick={handleSubmit}
                            view="text"
                            size="small"
                            disabled={!username || !password}
                        >
                            Sign in
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}