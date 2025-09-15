import { BrowserRouter } from 'react-router-dom';
import './style/App.css'
import { PageRouter } from './components/PageRouter';
import ScrollToAnchor from './components/ScrollToElement';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ScrollToAnchor />
            <PageRouter />
        </BrowserRouter>
    );
};

export default App;
