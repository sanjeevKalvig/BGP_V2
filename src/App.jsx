import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import TeamsPage from './pages/TeamsPage';
import DriverPage from './pages/DriverPage';
import TeamsDetails from './components/Teams/TeamsDetails';
import NewsPage from './pages/NewsPage';




export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />
        {/* Contact */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/teams' element={<TeamsPage/>} />
        <Route path='/driver' element={<DriverPage/>} />
        <Route path='/teamdetail' element={<TeamsDetails/>} />
        <Route path='/news' element={<NewsPage/>} />
      </Routes>
    </Router>
  );
}
