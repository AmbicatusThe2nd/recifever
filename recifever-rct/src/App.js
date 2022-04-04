import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route exact path="/" element={
              <Home />
            } />
            <Route exact path="/login" element={
              <Login />
            } />
            <Route exact path="/register" element={
              <Register />
            } />
            <Route path='*' element={
              <NotFound />
            } />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
