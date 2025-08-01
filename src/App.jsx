import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import OopsSection from './components/OopsSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import MyKraeg from './components/MyKraeg';

function App() {
  return (
    <Router basename="/Final_Spring-2025">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroCarousel />
                <OopsSection />
                <Gallery />
              </>
            }
          />
          <Route path="/my-kraeg" element={<MyKraeg />} />

          {/* Redirect unmatched routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

<main style={{ paddingTop: '1rem' }}>
  {/* your routed pages */}
</main>

export default App;
