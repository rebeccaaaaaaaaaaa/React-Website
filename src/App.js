import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/signin" element={<SigninPage />} />
      </Route>
    </Routes>
    <Home/>
  </Router>
  );
}

export default App;
