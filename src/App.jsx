import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './institucional/Home';
import InformeSe from './institucional/InformeSe';
import ComoAjudar from './institucional/ComoAjudar';
import SobreNos from './institucional/SobreNos';
import SistemaMain from './mesa-solidaria/App.jsx';
import DoeAgora from './institucional/DoeAgora';
import Navbar from './institucional/Navbar';
import Footer from './institucional/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const handleLogin = () => console.log("Login clicado");

  const isSistema = location.pathname.startsWith('/sistema');

  return (
    <>
      <ScrollToTop />
      
      {!isSistema && <Navbar onLogin={handleLogin} />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informe-se" element={<InformeSe />} />
        <Route path="/como-ajudar" element={<ComoAjudar />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/doe-agora" element={<DoeAgora />} />
        
        {/* Rota do Sistema Web */}
        <Route path="/sistema/*" element={<SistemaMain />} />
      </Routes>

      {!isSistema && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;