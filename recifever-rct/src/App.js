import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Add_new from './components/Add_new/Add_new';
import Recipe from './components/Recipe/Recipe';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={
            <Home />
          } />
          <Route exact path="/add-new" element={
            <Add_new />
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
          <Route exact path="/recipe/:recipeId" element={
            <Recipe />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
