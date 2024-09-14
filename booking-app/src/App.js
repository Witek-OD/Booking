import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/main/MainPage';
import AboutPage from './components/pages/about/AboutPage';
import HotelsPage from './components/pages/hotels/HotelsPage';
import Header from './components/header/Header';
import './App.css'

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/hotels" element={<HotelsPage />} />
            </Routes>
        </Router>
    );
}

export default App;