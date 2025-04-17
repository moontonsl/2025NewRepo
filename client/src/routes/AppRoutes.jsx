import { Routes, Route } from 'react-router-dom';
import { Events, Home, News, Program, Resources } from '../pages';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/program" element={<Program />} />
        <Route path="/resources" element={<Resources />} />
    </Routes>
);

export default AppRoutes;
