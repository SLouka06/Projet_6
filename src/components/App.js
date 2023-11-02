import '../styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about" element={<VotreComposantAbout />} />
          <Route path="/users" element={<VotreComposantUsers />} />
          <Route path="/" element={<VotreComposantAccueil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App