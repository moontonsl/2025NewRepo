import {Routes, Route} from 'react-router-dom';
import { Events, Home, News, Program, Resources, Login, Register, MCCMAIN, MCCCALENDARFINAL } from '../pages';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/program" element={<Program/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/mcc" element={<MCCMAIN/>} />
        <Route path="/mcc/calendar" element={<MCCCALENDARFINAL/>} />


        {/*<Route path="/network" element={<NetworkPage/>}/>*/}
        {/*<Route path="/buff-&-support" element={<BuffSupportPage/>}/>*/}
        {/*<Route path="/student-leader" element={<StudentLeaderPage/>}/>*/}

    </Routes>
);

export default AppRoutes;
