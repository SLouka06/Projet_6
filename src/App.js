import './styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/accueil';
import APropos from './pages/a_propos'; 
import Logement from './pages/logement';
import PageErreur from './pages/page_erreur';
import Header from './components/header';
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/a_propos" element={<APropos />} />
          <Route path="/logement" element={<Logement/>} />
          <Route path="/page_erreur" element={<PageErreur />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;