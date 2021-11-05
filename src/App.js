import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div className="App">
  
      <Router>
        
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>

        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>

        <Route path="/register">
          <SignupPage></SignupPage>
        </Route>

        <Route path="/detail/:id">
          <DetailPage></DetailPage>
        </Route>

      </Router>
    </div>
  );
}

export default App;
