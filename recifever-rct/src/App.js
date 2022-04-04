import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route exact path="/" element={
              <h1> Hello </h1>
            } />
            <Route path='*' element={
              <h1> Not found </h1>
            } />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
