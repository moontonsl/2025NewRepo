import './styles/App.scss'
import {Sun, Moon} from "lucide-react";
import {Route, Routes} from 'react-router-dom';
import {useState} from "react";
import {Events, Home, News, Program, Resources} from "./pages/index.js";
import {Footer, Header} from "./components/index.js";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <div data-theme={isDarkMode ? 'dark' : 'light'} className="app">
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/program" element={<Program/>}/>
                    <Route path="/resources" element={<Resources/>}/>
                </Routes>
            </main>
            <Footer/>

            <button
                className="theme-button cursor-pointer absolute right-4 bottom-4 h"
                onClick={toggleTheme}
            >
                {isDarkMode ? <Sun size={20}/> : <Moon size={20}/>}
            </button>
        </div>
    )
}

export default App
