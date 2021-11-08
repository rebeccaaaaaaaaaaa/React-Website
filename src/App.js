import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/index';
import SigninPage from './pages/signin'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} component={Home} />
        <Route exact path="/signin" element={<SigninPage/>} component={SigninPage} />
      </Routes>
    <Home/>
  </Router>
  );
}

export default App;
