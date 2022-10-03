import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Calculator from './pages/calculator/Calculator';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                
                <Route path='/' element={<Calculator />} />
                
            </Routes>
        </Router>
    )
}