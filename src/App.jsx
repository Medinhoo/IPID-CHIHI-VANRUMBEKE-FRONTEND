import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import OrderPage from './pages/OrderPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import HistoriquePage from './pages/HistoriquePage';
import EditInformationPage from './pages/EditInformationPage'; // Import de la nouvelle 
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import './assets/fonts/fonts.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/commander" element={<OrderPage />} />
        <Route path="/commander/confirmation" element={<OrderConfirmationPage/>} />
        <Route path="/historique" element={<HistoriquePage />} />
        <Route path="/mon-compte" element={<ProfilePage />} />
        <Route path="/mon-compte/modifier" element={<EditInformationPage />} /> {/* Nouvelle route */}
      </Routes>
    </Router>
  );
};

export default App;
