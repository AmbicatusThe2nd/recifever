import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route exact path="/" element={
              <Home />
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
