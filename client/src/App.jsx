import './styles/App.scss'
import Home from "./pages/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Sun, Moon} from "lucide-react";

import {Route, Routes} from 'react-router-dom';
import {useState} from "react";
import Events from "./pages/Events.jsx";
import News from "./pages/News.jsx";
import Program from "./pages/Program.jsx";
import Resources from "./pages/Resources.jsx";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
            <div data-theme={isDarkMode ? 'dark' : 'light'} className="app">
                <button
                    className="theme-button cursor-pointer absolute right-4 top-4"
                    onClick={toggleTheme}
                >
                    {isDarkMode ? <Sun size={20}/> : <Moon size={20}/>}
                </button>

                <Header/> {/* Include the Header component */}

                <Routes> {/* Define routes here */}
                    <Route path="/" element={<Home/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/program" element={<Program/>}/>
                    <Route path="/resources" element={<Resources/>}/>
                </Routes>

                <Footer/> {/* Include the Footer component */}
            </div>
    )
}

export default App
