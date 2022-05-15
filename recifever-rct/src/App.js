import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Add_new from './components/Add_new/Add_new';
import Recipe from './components/Recipe/Recipe';
import useToken from './hooks/useToken';

function App() {

  const { token, setToken } = useToken();

  let AppRoutes = (
    <>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/add-new" element={<Add_new />} />
      <Route exact path="/recipe/:recipeId" element={<Recipe />} />
      <Route path='*' element={<NotFound />} />
    </>
  )

  if (!token) {
    AppRoutes = (
      <>
        <Route exact path="/login" element={<Login setToken={setToken} />} />
        <Route exact path="/register" element={<Register />} />
      </>
    )
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {AppRoutes}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
