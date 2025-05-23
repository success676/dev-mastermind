import './styles/main.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound/NotFound';

import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/dev-mastermind" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />

          <Route path="/" element={<Navigate to="/dev-mastermind" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
