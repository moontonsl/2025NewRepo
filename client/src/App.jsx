import './styles/App.scss'
import {Footer, Header} from "./components/index.js";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {

    return (
        <div className="app">
            <Header />
            <main>
                <AppRoutes />
            </main>
            <Footer />
        </div>
    )
}

export default App
