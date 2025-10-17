import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Hosting from './pages/Hosting';
import Domain from './pages/Domain';
import Contact from './pages/Contact';
import About from './pages/About';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = ['/auth'].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;
