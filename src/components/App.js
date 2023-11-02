import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            {/* Votre composant pour la page À propos */}
          </Route>
          <Route path="/users">
            {/* Votre composant pour la page Utilisateurs */}
          </Route>
          <Route path="/">
            {/* Votre composant pour la page d'accueil */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
