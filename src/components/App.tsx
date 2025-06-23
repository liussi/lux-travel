import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';  // імпортуй футер

import Home from '../pages/Home';
import LuxuryPackages from '../pages/LuxuryPackages';
import BookWithUs from '../pages/BookWithUs';
import WhyLuxTrips from '../pages/WhyLuxTrips';
import Contact from '../pages/Contact';
import ClientArea from '../pages/ClientArea';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<LuxuryPackages />} />
        <Route path="/book" element={<BookWithUs />} />
        <Route path="/why" element={<WhyLuxTrips />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/client" element={<ClientArea />} />
      </Routes>
      <Footer />  {/* додай футер тут */}
    </Router>
  );
}

export default App;