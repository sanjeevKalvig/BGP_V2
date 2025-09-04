import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import TeamsPage from "./pages/TeamsPage";
import DriverPage from "./pages/DriverPage";
import TeamsDetails from "./components/Teams/TeamsDetails";
import NewsPage from "./pages/NewsPage";
import DriverDetail from "./components/DriverDetail.jsx/DriverDetail";
import EventPage from "./pages/EventPage";
import TicketsPage from "./pages/TicketsPage";
import TrackPage from "./pages/TrackPage";
import TrackDetail from "./components/Track/TrackDetail";
import Sponsors from "./pages/Sponsors";
import AutoPlaySound from "./components/AutoPlaySound";

export default function App() {
  return (
    <>
      <AutoPlaySound />
      <Router>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />
          {/* Contact */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/driver" element={<DriverPage />} />
          <Route path="/driverdetail" element={<DriverDetail />} />
          <Route path="/teamdetail" element={<TeamsDetails />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/tracks" element={<TrackPage />} />
          <Route path="/trackdetail" element={<TrackDetail />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </Router>
    </>
  );
}
