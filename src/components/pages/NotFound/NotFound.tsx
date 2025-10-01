import { Link } from 'react-router-dom'
import { Footer } from '../../UI/footer'
import { NavBar } from '../../UI/NavBar'
import cl from './NotFound.module.css'
import '../../../style/container.css'
import { Button } from '../../UI/button'

export const NotFound = () => {
    return (
        <div className={cl.container}>
            <div className={cl.content}>
                <NavBar />
                <div className='container'>
                    <div className={cl.not__found}>
                        <h1 className={cl.title}>
                            404
                        </h1>
                        <p className={cl.text}> PAGE NOT FOUND</p>
                        <Link to='/'>
                            <Button
                                className={cl.button}
                                view="text"
                                size="big"
                            >
                                <span>
                                    Go to shopping
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}