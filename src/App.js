import './styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/accueil';
import APropos from './pages/a-propos'; 
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
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/logement/:annonceId" element={<Logement />} />
          <Route path="*" element={<PageErreur />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;