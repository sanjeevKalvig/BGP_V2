import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import TeamsPage from './pages/TeamsPage';



export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/teams' element={<TeamsPage/>} />
      </Routes>
    </Router>
  );
}
