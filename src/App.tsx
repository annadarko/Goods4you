import { BrowserRouter } from 'react-router-dom';
import './style/App.css'
import { PageRouter } from './components/PageRouter';
import { SmoothScroll } from 'components/SmoothScroll';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <SmoothScroll />
            <PageRouter />
        </BrowserRouter>
    );
};

export default App;
