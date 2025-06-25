import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Layout from './Layout/Layout.js';
import Home from '../pages/Home';
import LuxuryPackages from '../pages/LuxuryPackages';
import BookWithUs from '../pages/BookWithUs';
import WhyLuxTrips from '../pages/WhyLuxTrips';
import Contact from '../pages/Contact';
import ClientArea from '../pages/ClientArea';


function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="packages" element={<LuxuryPackages />} />
            <Route path="book" element={<BookWithUs />} />
            <Route path="why" element={<WhyLuxTrips />} />
            <Route path="contact" element={<Contact />} />
            <Route path="client" element={<ClientArea />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
